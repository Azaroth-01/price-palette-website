
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-soft-xl hover:-translate-y-1",
        className
      )}
    >
      <div className="absolute -right-2 -top-2 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-300 group-hover:scale-110" />
      
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      
      <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
      
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
