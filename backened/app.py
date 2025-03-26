from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows requests from React frontend

# ✅ Load the trained ML model from `house_price_model.pkl`
with open("house_price_model.pkl", "rb") as f:
    model = pickle.load(f)

# Load the column names used during training
with open("columns.pkl", "rb") as f:
    data_columns = pickle.load(f)  # This should include all column names used in training

@app.route("/")
def home():
    return "House Price Prediction API is Running!"

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json  # Get input from React frontend
        print("Received Data:", data)  # ✅ Debugging

        # Prepare the input array
        x = np.zeros(len(data_columns))

        # Fill in the numerical features
        x[0] = data["bathrooms"]
        x[1] = data["balcony"]  # Add this if balcony is part of the model
        x[2] = data["rooms"]
        x[3] = data["area"]

        # Handle one-hot encoding for `locality` (site_location)
        if data["locality"] in data_columns:
            loc_index = data_columns.index(data["locality"])
            x[loc_index] = 1

        # Handle one-hot encoding for `area_type`
        if data["property_type"] in data_columns:
            area_index = data_columns.index(data["property_type"])
            x[area_index] = 1

        # Handle one-hot encoding for `availability`
        if data["availability"] in data_columns:
            avail_index = data_columns.index(data["availability"])
            x[avail_index] = 1

        print("Features for Prediction:", x)  # ✅ Debugging

        # Make prediction
        price = model.predict([x])[0]
        print("Predicted Price:", price)  # ✅ Debugging

        return jsonify({"predicted_price": price})

    except Exception as e:
        print("Error:", str(e))  # ✅ Debugging
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
