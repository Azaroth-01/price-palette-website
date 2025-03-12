
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PredictionForm } from "@/components/PredictionForm";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Footer } from "@/components/Footer";
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
      title: "Comprehensive Analysis",
      description: "Detailed reports on property valuation factors, including location, size, amenities, and market trends.",
      icon: LineChart,
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
    {
      title: "Competitive Edge",
      description: "Make informed decisions with comparative market analysis of similar properties in your area.",
      icon: Award,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      content: "The price prediction was spot on! I was able to sell my house for almost exactly what PricePalette estimated. This tool is a game-changer for homeowners.",
      author: {
        name: "Sarah Johnson",
        role: "Homeowner",
        image: "",
      },
    },
    {
      content: "As a real estate investor, I rely on accurate valuations. This tool has been instrumental in helping me identify undervalued properties in competitive markets.",
      author: {
        name: "Michael Chen",
        role: "Real Estate Investor",
        image: "",
      },
    },
    {
      content: "The detailed breakdown of how different features affect my home's value was eye-opening. I used these insights to prioritize renovations that actually increased my property value.",
      author: {
        name: "Emma Rodriguez",
        role: "Home Renovator",
        image: "",
      },
    },
    {
      content: "In my 15 years as a realtor, I've never seen such an accurate automated valuation tool. I now recommend PricePalette to all my clients before listing their properties.",
      author: {
        name: "David Thompson",
        role: "Real Estate Agent",
        image: "",
      },
    },
  ];

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
      description: "Receive a comprehensive report with your property's estimated value, price factors, and confidence score.",
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
        
        {/* CTA Section with Form */}
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
        
        {/* Testimonials */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-xl text-muted-foreground">
                Real experiences from homeowners, buyers, and real estate professionals
              </p>
            </FadeIn>
            
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <FadeIn key={index} delay={0.15 * index}>
                  <TestimonialCard
                    content={testimonial.content}
                    author={testimonial.author}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <FadeIn className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform How You Value Real Estate</h2>
              <p className="text-xl opacity-80 mb-8">
                Join thousands of homeowners who've discovered their property's true market value
              </p>
              <Button size="lg" variant="secondary" className="h-12 px-8">
                Get Started Today
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
