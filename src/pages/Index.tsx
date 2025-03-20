
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PredictionForm } from "@/components/PredictionForm";
import { FeatureCard } from "@/components/FeatureCard";

import { FadeIn, StaggeredFadeIn } from "@/components/animations/FadeIn";
import {
  Award,
  BarChart3,
  Building,
  Cpu,
  DollarSign,
  Home,
  LineChart,
  MapPin,
  Timer,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Features data
  const features = [
    {
      title: "AI-Powered Predictions",
      description: "Our advanced machine learning algorithms analyze thousands of data points to provide accurate price estimates.",
      icon: Cpu,
    },
    {
      title: "Real-Time Market Data",
      description: "Stay updated with the latest real estate trends and market valuations in your neighborhood.",
      icon: TrendingUp,
    },
    
    {
      title: "Instant Results",
      description: "Get immediate property value estimates without waiting for traditional appraisals.",
      icon: Timer,
    },
    {
      title: "Location Intelligence",
      description: "Neighborhood-specific insights that affect your property's value, from schools to amenities.",
      icon: MapPin,
    },
    
  ];

  // Testimonials data
  
  // How it works steps
  const steps = [
    {
      number: "01",
      title: "Enter Your Address",
      description: "Start by providing your property's location to anchor our prediction model to your specific area and market conditions.",
      icon: MapPin,
    },
    {
      number: "02",
      title: "Add Property Details",
      description: "Tell us about your home's unique features, size, and condition to refine our valuation model for your specific property.",
      icon: Building,
    },
    {
      number: "03",
      title: "Review Market Analysis",
      description: "Our AI analyzes thousands of comparable properties and current market trends to determine accurate valuations.",
      icon: BarChart3,
    },
    {
      number: "04",
      title: "Get Your Valuation",
      description: "",
      icon: DollarSign,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Features for Precise Valuation</h2>
              <p className="text-xl text-muted-foreground">
                Our cutting-edge technology delivers accurate home value predictions with industry-leading precision
              </p>
            </FadeIn>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our AI Valuation Works</h2>
              <p className="text-xl text-muted-foreground">
                A simple four-step process to get an accurate estimate of your property's value
              </p>
            </FadeIn>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <FadeIn key={index} delay={0.2 * index} direction="up">
                  <div className="relative flex flex-col items-center text-center">
                    <div className="absolute text-8xl font-bold text-primary/5 -z-10 transform -translate-y-1/4">
                      {step.number}
                    </div>
                    <div className="mb-6 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
       
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Discover Your Home's Value?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get an accurate estimate of your property's worth in minutes
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <PredictionForm className="max-w-4xl mx-auto" />
            </FadeIn>
          </div>
        </section>
        
       
        
       
        
      </main>
      
      
    </div>
  );
};

export default Index;
