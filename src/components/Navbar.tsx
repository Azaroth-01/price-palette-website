
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Home, Menu, X } from "lucide-react";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6",
        scrolled ? "neo-blur py-3" : "bg-transparent",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Home className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl">PricePalette</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            How it Works
          </a>
          <a
            href="#testimonials"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Testimonials
          </a>
          <Button>Get Started</Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[72px] bg-background/80 backdrop-blur-lg p-6 border-b border-border transition-all duration-300 ease-in-out transform md:hidden",
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-4">
          <a
            href="#features"
            className="text-foreground/80 hover:text-foreground py-2 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-foreground/80 hover:text-foreground py-2 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            How it Works
          </a>
          <a
            href="#testimonials"
            className="text-foreground/80 hover:text-foreground py-2 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <Button className="w-full">Get Started</Button>
        </nav>
      </div>
    </header>
  );
}
