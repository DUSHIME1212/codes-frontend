'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, BarChart, BookOpen, Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import HeroSection from './ui/HeroSection';
import FeaturedCourses from '@/components/ui/FeaturedCourses';

const page = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div>
      <HeroSection />
      <FeaturedCourses title="Featured Courses" subtitle="Handpicked courses to boost your skills" type="featured" />
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose Educodes</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Join millions of learners worldwide and transform your career with our cutting-edge platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-background border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mb-4 mx-auto">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">10,000+ Courses</h3>
                <p className="text-center text-muted-foreground">
                  Explore a vast library of courses across various disciplines
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mb-4 mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Expert Instructors</h3>
                <p className="text-center text-muted-foreground">
                  Learn from industry experts and accomplished professionals
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mb-4 mx-auto">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Certification</h3>
                <p className="text-center text-muted-foreground">
                  Earn recognized certificates to showcase your skills
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mb-4 mx-auto">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Lifetime Access</h3>
                <p className="text-center text-muted-foreground">Enjoy unlimited access to your courses and updates</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <FeaturedCourses title="Popular Courses" subtitle="Most in-demand courses by our students" type="popular" />
      <section className="py-16 bg-blue-700 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start learning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of students and expand your skills with our courses
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="/courses">Browse Courses</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10">
              Sign Up for Free
            </Button>
          </div>
        </div>
      </section>
      <FeaturedCourses title="New Courses" subtitle="Fresh content added to our library" type="new" />
    </div>
  );
};

export default page;
