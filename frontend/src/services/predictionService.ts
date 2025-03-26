
import axios from 'axios';

// This will be replaced with actual API URL when backend is deployed
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export interface PropertyDetails {
  address: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  propertyType: string;
  location?: string;
}

export interface PredictionResult {
  estimatedPrice: number;
  confidenceScore: number;
  priceRange?: {
    min: number;
    max: number;
  };
}

export const getPrediction = async (propertyDetails: PropertyDetails): Promise<PredictionResult> => {
  try {
    // In a real implementation, this would call your ML model API
    // For now, we'll simulate a response with a placeholder implementation
    
    // Temporary simulation - will be replaced with actual API call
    // const response = await axios.post(`${API_URL}/predict`, propertyDetails);
    // return response.data;
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate prediction based on property details
    const basePrice = 60000; // Base price per sqft in Pune (in INR)
    const locationMultiplier = getLocationMultiplier(propertyDetails.address);
    const bedroomFactor = propertyDetails.bedrooms * 500000;
    const bathroomFactor = propertyDetails.bathrooms * 300000;
    const sqftFactor = propertyDetails.sqft * basePrice;
    const propertyTypeFactor = getPropertyTypeFactor(propertyDetails.propertyType);
    
    const estimatedPrice = Math.round(
      (sqftFactor + bedroomFactor + bathroomFactor) * 
      locationMultiplier * 
      propertyTypeFactor
    );
    
    // Add some randomness to simulate model variance
    const variance = 0.1; // 10% variance
    const randomFactor = 1 + (Math.random() * variance * 2 - variance);
    const finalPrice = Math.round(estimatedPrice * randomFactor);
    
    // Create a price range
    const priceRange = {
      min: Math.round(finalPrice * 0.9),
      max: Math.round(finalPrice * 1.1)
    };
    
    return {
      estimatedPrice: finalPrice,
      confidenceScore: Math.floor(80 + Math.random() * 15), // Random confidence between 80-95%
      priceRange
    };
  } catch (error) {
    console.error('Error fetching prediction:', error);
    throw new Error('Failed to get property prediction');
  }
};

// Helper functions for the placeholder implementation
const getLocationMultiplier = (address: string): number => {
  // Premium locations in Pune
  const premiumLocations = ['koregaon park', 'kalyani nagar', 'aundh', 'baner', 'viman nagar'];
  const midRangeLocations = ['kharadi', 'wakad', 'hinjewadi', 'magarpatta', 'hadapsar'];
  
  const addressLower = address.toLowerCase();
  
  if (premiumLocations.some(location => addressLower.includes(location))) {
    return 1.5;
  } else if (midRangeLocations.some(location => addressLower.includes(location))) {
    return 1.2;
  } else {
    return 1.0;
  }
};

const getPropertyTypeFactor = (propertyType: string): number => {
  switch (propertyType) {
    case 'single-family':
      return 1.2;
    case 'condo':
      return 1.0;
    case 'townhouse':
      return 1.1;
    case 'multi-family':
      return 1.3;
    default:
      return 1.0;
  }
};
