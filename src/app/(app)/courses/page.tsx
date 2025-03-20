"use client"

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { courses, categories, levels } from "@/lib/data";
import CourseCard from "@/components/ui/course-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Search, Filter, X } from "lucide-react";

const page = () => {
  const location = usePathname();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [sort, setSort] = useState('popularity');
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    
    // Extract query parameters
    const queryParams = new URLSearchParams(location);
    const categoryParam = queryParams.get("category");
    const searchParam = queryParams.get("search");
    
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
    
    if (searchParam) {
      setSearchTerm(searchParam);
    }
  }, [location.search]);

  // Filter courses based on search and filters
  useEffect(() => {
    let filtered = [...courses];
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(course => 
        selectedCategories.includes(course.category)
      );
    }
    
    // Filter by levels
    if (selectedLevels.length > 0) {
      filtered = filtered.filter(course => 
        selectedLevels.includes(course.level)
      );
    }
    
    // Sort courses
    switch (sort) {
      case "popularity":
        filtered.sort((a, b) => b.studentsCount - a.studentsCount);
        break;
      case "newest":
        filtered.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
        break;
      case "highest-rated":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "price-low":
        filtered.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
        break;
      case "price-high":
        filtered.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
        break;
    }
    
    setFilteredCourses(filtered);
  }, [searchTerm, selectedCategories, selectedLevels, sort]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevels(prev => 
      prev.includes(level)
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedLevels([]);
    setSort("popularity");
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };
  
  return <div className="min-h-screen">
            <section className="bg-secondary/50 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold mb-4">Explore Courses</h1>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Button 
                variant="outline" 
                className="md:hidden flex items-center"
                onClick={toggleFilters}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Sort by: Popularity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Sort by: Popularity</SelectItem>
                  <SelectItem value="newest">Sort by: Newest</SelectItem>
                  <SelectItem value="highest-rated">Sort by: Highest Rated</SelectItem>
                  <SelectItem value="price-low">Sort by: Price (Low to High)</SelectItem>
                  <SelectItem value="price-high">Sort by: Price (High to Low)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden md:block w-full md:w-64 lg:w-72 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Filters</h3>
                  {(selectedCategories.length > 0 || selectedLevels.length > 0) && (
                    <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 text-xs">
                      Clear All
                    </Button>
                  )}
                </div>
                
                <Accordion type="single" collapsible defaultValue="categories">
                  <AccordionItem value="categories" className="border-b">
                    <AccordionTrigger className="text-base py-3">Categories</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`category-${category}`} 
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => handleCategoryChange(category)}
                            />
                            <label
                              htmlFor={`category-${category}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="levels" className="border-b">
                    <AccordionTrigger className="text-base py-3">Level</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        {levels.map((level) => (
                          <div key={level} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`level-${level}`} 
                              checked={selectedLevels.includes(level)}
                              onCheckedChange={() => handleLevelChange(level)}
                            />
                            <label
                              htmlFor={`level-${level}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {level}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            {filtersVisible && (
              <div className="md:hidden fixed inset-0 bg-background z-50 overflow-auto animate-slide-in-right">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-medium text-lg">Filters</h3>
                    <Button variant="ghost" size="icon" onClick={toggleFilters}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3">Categories</h4>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`mobile-category-${category}`} 
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => handleCategoryChange(category)}
                            />
                            <label
                              htmlFor={`mobile-category-${category}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Level</h4>
                      <div className="space-y-2">
                        {levels.map((level) => (
                          <div key={level} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`mobile-level-${level}`} 
                              checked={selectedLevels.includes(level)}
                              onCheckedChange={() => handleLevelChange(level)}
                            />
                            <label
                              htmlFor={`mobile-level-${level}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {level}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex space-x-2">
                    <Button variant="outline" className="flex-1" onClick={clearFilters}>
                      Clear All
                    </Button>
                    <Button className="flex-1" onClick={toggleFilters}>
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
            )}
            <div className="flex-grow">
              {/* Active filters */}
              {(selectedCategories.length > 0 || selectedLevels.length > 0) && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {selectedCategories.map(category => (
                    <div 
                      key={category}
                      className="bg-secondary text-sm px-3 py-1 rounded-full flex items-center"
                    >
                      {category}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-4 w-4 ml-1" 
                        onClick={() => handleCategoryChange(category)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                  
                  {selectedLevels.map(level => (
                    <div 
                      key={level}
                      className="bg-secondary text-sm px-3 py-1 rounded-full flex items-center"
                    >
                      {level}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-4 w-4 ml-1" 
                        onClick={() => handleLevelChange(level)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="font-medium text-foreground">{filteredCourses.length}</span> results
                </p>
              </div>
              {filteredCourses.length > 0 ? (
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {filteredCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                  <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
  </div>;
};

export default page;
