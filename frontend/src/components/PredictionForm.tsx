import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { BarChart3, Building, Loader2, MapPin, Maximize, Square } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

interface PredictionFormProps {
  minimal?: boolean;
  className?: string;
}

export function PredictionForm({ minimal = false, className }: PredictionFormProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number } | null>(null);

  // Form fields
  const [address, setAddress] = useState<string>("");
  const [sqft, setSqft] = useState<number>(1500);
  const [bedrooms, setBedrooms] = useState<number>(3);
  const [bathrooms, setBathrooms] = useState<number>(2);
  const [propertyType, setPropertyType] = useState<string>("single-family");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    const propertyDetails = {
      area: sqft,
      rooms: bedrooms,
      locality: address, // Ensure this matches the backend's expected input
      bathrooms: bathrooms,
      property_type: propertyType, // Ensure this matches the backend's expected input
    };
  
    console.log("Sending Data:", propertyDetails); // ✅ Debugging
  
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", propertyDetails);
      console.log("Received Response:", response.data); // ✅ Debugging
      setResult(response.data.predicted_price);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to fetch prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Card id="prediction-form" className={className}>
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-6 md:p-10 space-y-6">
            <h3 className="text-2xl font-bold tracking-tight mb-2">Get Your Home's Value</h3>
            <p className="text-muted-foreground">Enter your property details for an accurate estimation</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Property Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="address"
                      placeholder="123 Main St, Pune, Maharashtra"
                      className="pl-10"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="beds">Bedrooms</Label>
                    <Select defaultValue={bedrooms.toString()} onValueChange={(value) => setBedrooms(Number(value))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="baths">Bathrooms</Label>
                    <Select defaultValue={bathrooms.toString()} onValueChange={(value) => setBathrooms(Number(value))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 1.5, 2, 2.5, 3, 3.5, 4].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sqft">Square Footage: {sqft} sq ft</Label>
                  <Slider id="sqft" defaultValue={[1500]} max={5000} min={500} step={50} onValueChange={(value) => setSqft(value[0])} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="property-type">Property Type</Label>
                  <Select defaultValue={propertyType} onValueChange={(value) => setPropertyType(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single-family">Super built-up Area</SelectItem>
                      <SelectItem value="condo">Built-up Area</SelectItem>
                      <SelectItem value="townhouse">Plot Area</SelectItem>
                      <SelectItem value="multi-family">Carpet Area</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing</> : "Get Estimate"}
              </Button>
            </form>
          </div>

          <div className="bg-gradient-soft p-6 md:p-10 space-y-6 flex flex-col">
            {result !== null ? (
              <>
                <h3 className="text-2xl font-bold tracking-tight mb-2">Your Estimate</h3>
                <p className="text-muted-foreground">Based on current market data and similar properties</p>

                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-gradient mb-2 animate-scale-in">
                    ₹{result.toLocaleString()}
                  </div>
                  <div className="text-muted-foreground">Estimated Value</div>
                </div>

                {priceRange && (
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Price Range</div>
                    <div className="text-lg font-semibold">
                      ₹{priceRange.min.toLocaleString()} - ₹{priceRange.max.toLocaleString()}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8">
                <Building className="h-16 w-16 text-primary/70" />
                <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  Fill out the form and we'll provide an accurate estimate of your property's value.
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
