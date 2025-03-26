
import { Navbar } from "@/components/Navbar";

import { FadeIn } from "@/components/animations/FadeIn";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Brain, Database, FileCode, LineChart, Layers } from "lucide-react";

const ModelDetails = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeIn className="max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl font-bold mb-6">Our Prediction Technology</h1>
              <p className="text-xl text-muted-foreground">
                Learn how our advanced machine learning model makes accurate property valuations in Pune
              </p>
            </FadeIn>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FadeIn delay={0.1}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Brain className="mr-2 h-5 w-5 text-primary" />
                      Machine Learning Model
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our model uses gradient boosting algorithms trained on historical Pune property data to 
                      make precise predictions based on multiple features.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Database className="mr-2 h-5 w-5 text-primary" />
                      Data Sources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We analyze thousands of property transactions across Pune, including government records, 
                      real estate listings, and market trends data.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <LineChart className="mr-2 h-5 w-5 text-primary" />
                      Accuracy Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our model achieves over 90% accuracy with a mean absolute percentage error under 7% 
                      for properties within Pune.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
            
            <FadeIn className="mt-16">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Key Factors in Our Model</CardTitle>
                  <CardDescription>
                    The features that contribute most to our prediction algorithm
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">Location</div>
                        <Badge variant="outline">Highest Impact</Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Precise neighborhood data for all areas of Pune, from Koregaon Park to Hinjewadi
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">Property Size</div>
                        <Badge variant="outline">High Impact</Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Square footage evaluations calibrated to Pune's unique property market
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">Amenities</div>
                        <Badge variant="outline">Medium Impact</Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Analysis of building features, parking, security, and other amenities
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">Property Age</div>
                        <Badge variant="outline">Medium Impact</Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Consideration of construction year and building condition assessments
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">Market Trends</div>
                        <Badge variant="outline">Dynamic Factor</Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Real-time adjustments based on Pune's current market conditions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
            
            <FadeIn className="mt-16 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Future Enhancements</h2>
              <p className="text-muted-foreground mb-8">
                Our team is continuously working to improve our prediction algorithm with these upcoming features:
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6 flex items-center">
                    <Layers className="h-8 w-8 text-primary mr-4" />
                    <div className="text-left">
                      <div className="font-medium">Deep Learning Integration</div>
                      <div className="text-sm text-muted-foreground">For even more precise valuations</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-center">
                    <BarChart className="h-8 w-8 text-primary mr-4" />
                    <div className="text-left">
                      <div className="font-medium">Forecast Predictions</div>
                      <div className="text-sm text-muted-foreground">Estimate future value growth</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-center">
                    <FileCode className="h-8 w-8 text-primary mr-4" />
                    <div className="text-left">
                      <div className="font-medium">Document Analysis</div>
                      <div className="text-sm text-muted-foreground">Automated property document review</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-center">
                    <FileCode className="h-8 w-8 text-primary mr-4" />
                    <div className="text-left">
                      <div className="font-medium">Image Recognition</div>
                      <div className="text-sm text-muted-foreground">Value based on property photos</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      
     
    </div>
  );
};

export default ModelDetails;
