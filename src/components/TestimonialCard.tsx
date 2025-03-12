
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  author: {
    name: string;
    role?: string;
    image?: string;
  };
  className?: string;
}

export function TestimonialCard({ content, author, className }: TestimonialCardProps) {
  const initials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl p-6 transition-all duration-300 bg-card border hover:shadow-soft-xl",
        className
      )}
    >
      <div className="absolute -right-4 -top-4 p-4 text-primary/10 opacity-50 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-60">
        <Quote className="h-16 w-16" />
      </div>
      
      <div className="relative z-10">
        <p className="mb-6 text-muted-foreground">{content}</p>
        
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3 border">
            <AvatarImage src={author.image} alt={author.name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          
          <div>
            <p className="text-sm font-medium">{author.name}</p>
            {author.role && <p className="text-xs text-muted-foreground">{author.role}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
