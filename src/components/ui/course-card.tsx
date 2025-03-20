import { useState } from "react";
import { Star, Clock, Users, Award, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type Course } from "@/lib/data";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

const CourseCard = ({ course, featured = false }: CourseCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className={`course-card overflow-hidden border bg-card ${featured ? 'lg:flex' : ''}`}>
      <div className={`relative ${featured ? 'lg:w-2/5' : 'aspect-video'}`}>
        <div className="image-blur-wrapper w-full h-full">
          <img
            src={course.thumbnail}
            alt={course.title}
            className={`w-full h-96 object-cover ${imageLoaded ? 'image-blur loaded' : 'image-blur'}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        {course.bestseller && (
          <Badge className="absolute top-2 left-2 bg-yellow-500 hover:bg-yellow-600">
            Bestseller
          </Badge>
        )}
        {course.new && (
          <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">
            New
          </Badge>
        )}
      </div>
      
      <CardContent className={`p-4 ${featured ? 'lg:w-3/5 lg:p-6' : ''}`}>
        <div className="flex items-center space-x-1 mb-2">
          {Array(5).fill(0).map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < Math.floor(course.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-muted text-muted"
              }`}
            />
          ))}
          <span className="text-sm font-medium ml-1">{course.rating}</span>
          <span className="text-sm text-muted-foreground">({course.reviewCount.toLocaleString()})</span>
        </div>
        
        <Link href={`/courses/${course.slug}`}>
          <h3 className={`font-semibold hover:text-primary transition-colors ${featured ? 'text-xl mb-3' : 'text-base mb-2'}`}>
            {course.title}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground mb-2">
          {course.instructor}
        </p>
        
        {featured && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {course.description}
          </p>
        )}
        
        <div className="flex flex-wrap gap-2 mb-3">
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Users className="h-3 w-3 mr-1" />
            {course.studentsCount.toLocaleString()} students
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Award className="h-3 w-3 mr-1" />
            {course.level}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            {course.discountPrice ? (
              <>
                <span className="text-lg font-bold">${course.discountPrice}</span>
                <span className="text-sm text-muted-foreground line-through ml-2">
                  ${course.price}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold">${course.price}</span>
            )}
          </div>
          
          {featured && (
            <Button size="sm" className="ml-auto">
              <BookOpen className="h-4 w-4 mr-2" />
              View Course
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
