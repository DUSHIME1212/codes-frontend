import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Timer } from "lucide-react";

const GameCard = ({ 
    title, 
    description, 
    image, 
    category, 
    difficulty, 
    playTime, 
    slug 
  }: { 
    title: string; 
    description: string; 
    image: string; 
    category: string; 
    difficulty: "Easy" | "Medium" | "Hard"; 
    playTime: string; 
    slug: string; 
  }) => {
    const difficultyColor = {
      Easy: "text-green-500 bg-green-50",
      Medium: "text-amber-500 bg-amber-50",
      Hard: "text-red-500 bg-red-50"
    };
  
    return (
      <Card className="overflow-hidden">
        <div className="aspect-video relative">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute top-2 right-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColor[difficulty]}`}>
              {difficulty}
            </span>
          </div>
        </div>
        <CardHeader className="p-4">
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{category}</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex items-center text-sm text-muted-foreground">
            <Timer className="h-4 w-4 mr-1" />
            <span>{playTime}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button asChild className="w-full">
            <Link href={`/games/${slug}`}>Play Now</Link>
          </Button>
        </CardFooter>
      </Card>
    );
  };
  
  export default GameCard;