
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { BarChart3, Building, Loader2, MapPin, Maximize, Square, Upload } from "lucide-react";

interface PredictionFormProps {
  minimal?: boolean;
  className?: string;
}

export function PredictionForm({ minimal = false, className }: PredictionFormProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [confidence, setConfidence] = useState<number>(0);
  const [sqft, setSqft] = useState<number>(1500);
  const [bedrooms, setBedrooms] = useState<number>(3);
  const [bathrooms, setBathrooms] = useState<number>(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setResult(850000);
      setConfidence(92);
    }, 1500);
  };

  if (minimal) {
    return (
      <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Enter your address"
              className="h-12"
              icon={<MapPin className="h-4 w-4 text-muted-foreground" />}
            />
          </div>
          <Button type="submit" className="h-12 px-8" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
              </>
            ) : (
              "Estimate Price"
            )}
          </Button>
        </div>
      </form>
    );
  }

  return (
    <Card id="prediction-form" className={cn("overflow-hidden", className)}>
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-6 md:p-10 space-y-6">
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">Get Your Home's Value</h3>
              <p className="text-muted-foreground">Enter your property details for an accurate estimation</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Property Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input id="address" placeholder="123 Main St, City, State" className="pl-10" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="beds">Bedrooms</Label>
                    <Select defaultValue="3">
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
                    <Select defaultValue="2">
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
                  <div className="flex justify-between">
                    <Label htmlFor="sqft">Square Footage: {sqft} sq ft</Label>
                  </div>
                  <Slider
                    id="sqft"
                    defaultValue={[1500]}
                    max={5000}
                    min={500}
                    step={50}
                    onValueChange={(value) => setSqft(value[0])}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="property-type">Property Type</Label>
                  <Select defaultValue="single-family">
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single-family">Single Family Home</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="multi-family">Multi-Family</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
                  </>
                ) : (
                  "Get Estimate"
                )}
              </Button>
            </form>
          </div>

          <div className="bg-gradient-soft p-6 md:p-10 space-y-6 flex flex-col">
            {result ? (
              <>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-2">Your Estimate</h3>
                  <p className="text-muted-foreground">Based on current market data and similar properties</p>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center space-y-8">
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-gradient mb-2 animate-scale-in">
                      ${result.toLocaleString()}
                    </div>
                    <div className="text-muted-foreground">Estimated Value</div>
                  </div>

                  <div className="w-full max-w-md space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Confidence Score</span>
                      <span className="font-medium">{confidence}%</span>
                    </div>
                    <div className="w-full bg-background/50 rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out-expo"
                        style={{ width: `${confidence}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Our model is {confidence}% confident in this estimate based on available data and comparable properties
                    </p>
                  </div>
                </div>

                <div className="flex justify-between gap-4">
                  <Button variant="outline" className="flex-1">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    <span>Compare</span>
                  </Button>
                  <Button className="flex-1">
                    Detailed Report
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8">
                <div className="w-32 h-32 rounded-full bg-background/80 flex items-center justify-center">
                  <Building className="h-16 w-16 text-primary/70" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    Fill out the form and we'll provide an accurate estimate of your property's value
                  </p>
                </div>
                <div className="flex flex-col space-y-4 w-full max-w-xs">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <span>Enter your address</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Square className="h-4 w-4 text-primary" />
                    </div>
                    <span>Add property details</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Maximize className="h-4 w-4 text-primary" />
                    </div>
                    <span>Get accurate valuation</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
