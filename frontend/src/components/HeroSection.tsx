
import { Button } from "@/components/ui/button";
import { FadeIn } from "./animations/FadeIn";
import { PredictionForm } from "./PredictionForm";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById("prediction-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full filter blur-3xl animate-float animation-delay-2000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-6" delay={0.1}>
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              Precise Home Price Predictions
            </span>
          </FadeIn>
          
          <FadeIn className="text-center" delay={0.3}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-gradient">Discover</span> Your Home's <br />
              True Market Value
            </h1>
          </FadeIn>
          
          <FadeIn className="text-center max-w-2xl mx-auto" delay={0.5}>
            <p className="text-xl text-foreground/70 mb-8">
              Our advanced AI model provides accurate home price predictions based on location, 
              features, and market trends with industry-leading precision.
            </p>
          </FadeIn>

          <FadeIn delay={0.7}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Button size="lg" className="h-12 px-8" onClick={scrollToForm}>
                Get Your Estimate
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8">
                Learn More
              </Button>
            </div>
          </FadeIn>

          <FadeIn
            className={`max-w-3xl mx-auto transition-all duration-1000 ease-in-out ${
              isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
            }`}
            delay={0.9}
          >
            <div className="neo-blur rounded-2xl p-8 relative">
              <PredictionForm minimal />
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button
          onClick={scrollToForm}
          className="text-foreground/50 hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
