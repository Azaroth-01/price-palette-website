import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 h-16 md:h-20 flex items-center",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold">PricePalette</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/" className="px-4 py-2 text-foreground/70 hover:text-foreground transition-colors">
            Home
          </Link>
          
          <a href="#how-it-works" className="px-4 py-2 text-foreground/70 hover:text-foreground transition-colors">
            How It Works
          </a>
          <Link to="/model-details" className="px-4 py-2 text-foreground/70 hover:text-foreground transition-colors">
            Model Details
          </Link>
          
          <Button asChild size="sm" className="ml-2 px-4">
            <a href="#prediction-form">Get Estimate</a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md shadow-md py-4 px-4 md:hidden">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="px-4 py-2 text-foreground hover:bg-muted rounded-md" onClick={toggleMenu}>
              Home
            </Link>
            <a href="#features" className="px-4 py-2 text-foreground hover:bg-muted rounded-md" onClick={toggleMenu}>
              Features
            </a>
            <a href="#how-it-works" className="px-4 py-2 text-foreground hover:bg-muted rounded-md" onClick={toggleMenu}>
              How It Works
            </a>
            <Link to="/model-details" className="px-4 py-2 text-foreground hover:bg-muted rounded-md" onClick={toggleMenu}>
              Model Details
            </Link>
            <a href="#testimonials" className="px-4 py-2 text-foreground hover:bg-muted rounded-md" onClick={toggleMenu}>
              Testimonials
            </a>
            <Button asChild size="sm" className="mt-2" onClick={toggleMenu}>
              <a href="#prediction-form">Get Estimate</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
