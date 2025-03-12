
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  duration = 0.5,
  delay = 0,
  className,
  direction = "up",
  distance = 20,
  once = true,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once]);

  let transform = "translateY(0)";
  if (direction === "up") transform = `translateY(${distance}px)`;
  if (direction === "down") transform = `translateY(-${distance}px)`;
  if (direction === "left") transform = `translateX(${distance}px)`;
  if (direction === "right") transform = `translateX(-${distance}px)`;

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : transform,
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function StaggeredFadeIn({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  className,
  direction = "up",
  distance = 20,
  once = true,
}: {
  children: React.ReactNode[];
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
}) {
  return (
    <div className={className}>
      {Array.isArray(children) &&
        children.map((child, i) => (
          <FadeIn
            key={i}
            delay={initialDelay + i * staggerDelay}
            direction={direction}
            distance={distance}
            once={once}
          >
            {child}
          </FadeIn>
        ))}
    </div>
  );
}
