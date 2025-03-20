import { useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/lib/data";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { AuroraText } from "@/components/magicui/aurora-text";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/courses?search=${encodeURIComponent(searchTerm)}`;
  };

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"
        aria-hidden="true"
      />
      
      {/* Decorative circles */}
      <div 
        className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-16 right-1/3 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        aria-hidden="true"
      />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col items-center text-center">
        <Badge  
          variant="outline" 
          className="mb-4 py-1 px-4 bg-background/80 backdrop-blur-sm animate-fade-in"
        >
          Learning that gets you
        </Badge>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
          Skills for your present <br className="hidden md:block" />
          <span className="text-primary italic">and your future</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
          Expand your potential with expert-led courses across development, business,
          design and more. Start learning today.
        </p>
        
        <form 
          onSubmit={handleSubmit}
          className="w-full max-w-md mb-10 animate-slide-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="What do you want to learn?"
              className="pl-10 pr-20 py-6 h-14 text-base rounded-full border-2 bg-background/90 backdrop-blur-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button 
              type="submit" 
              className="absolute right-1.5 top-1/2 transform -translate-y-1/2 rounded-full"
              size="sm"
            >
              Search
            </Button>
          </div>
        </form>
        
        <div className="w-full max-w-4xl animate-slide-up" style={{ animationDelay: "400ms" }}>
          <h3 className="text-sm font-medium text-muted-foreground mb-4">Popular topics</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.slice(0, 8).map((category) => (
              <a
                key={category}
                href={`/courses?category=${encodeURIComponent(category)}`}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white border border-border hover:bg-secondary transition-colors"
              >
                {category}
                <ChevronRight className="ml-1 h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;