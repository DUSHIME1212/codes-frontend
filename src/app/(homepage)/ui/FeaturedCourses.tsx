
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/ui/course-card";
import { getFeaturedCourses, getPopularCourses, getNewCourses } from "@/lib/data";

interface FeaturedCoursesProps {
  title: string;
  subtitle?: string;
  type: "featured" | "popular" | "new";
  limit?: number;
  showViewAll?: boolean;
}

const FeaturedCourses = ({ 
  title, 
  subtitle, 
  type = "featured", 
  limit = 3,
  showViewAll = true 
}: FeaturedCoursesProps) => {
  const getCourses = () => {
    switch (type) {
      case "featured":
        return getFeaturedCourses().slice(0, limit);
      case "popular":
        return getPopularCourses().slice(0, limit);
      case "new":
        return getNewCourses().slice(0, limit);
      default:
        return getFeaturedCourses().slice(0, limit);
    }
  };

  const courses = getCourses();

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
            {subtitle && (
              <p className="mt-2 text-muted-foreground">{subtitle}</p>
            )}
          </div>
          
          {showViewAll && (
            <Button variant="link" asChild className="mt-4 md:mt-0">
              <a href="/courses">
                View all courses <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
        
        {type === "featured" && courses.length > 0 ? (
          <div className="space-y-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} featured={true} />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedCourses;