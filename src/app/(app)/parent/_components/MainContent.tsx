"use client"

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Users, UserPlus, BookOpen, Clock, BarChart3 } from "lucide-react";
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const MainContent = () => {
    const [selectedChildId, setSelectedChildId] = useState<string | null>(null);
    const [childName, setChildName] = useState<string>('');
    const [childEmail, setChildEmail] = useState<string>('');
    const getChildProgress = (childId: string) => {
      return {
        inProgressCourses: Math.floor(Math.random() * 10),
        completedCourses: Math.floor(Math.random() * 10),
        totalHours: Math.floor(Math.random() * 100),
        recentActivity: [
          { action: "Completed a quiz", date: new Date().toISOString() },
          { action: "Watched a video", date: new Date().toISOString() },
        ],
      };
    }
    const handleAddChild = async () => {
        if (!childName || !childEmail) {
          toast.error("Please enter child name and email");
          return;
        }
    };
    const user = {
      children: [
        {
          id: "1",
          name: "John Doe",
          email: "",
          role: "Parent",
          avatar: "",
        }
      ]
    };
    const childProgress = selectedChildId ? getChildProgress(selectedChildId) : null;
  return (
    <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sidebar with children list */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    My Children
                  </CardTitle>
                  <CardDescription>
                    Select a child to view their progress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {user?.children && user.children.length > 0 ? (
                    <ul className="space-y-2">
                      {user.children.map((child) => (
                        <li key={child.id}>
                          <Button
                            variant={selectedChildId === child.id ? "default" : "outline"}
                            className="w-full justify-start"
                            onClick={() => setSelectedChildId(child.id)}
                          >
                            {child.name}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-center py-4 text-muted-foreground">
                      No children added yet
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
            
            {/* Child progress */}
            <div className="md:col-span-2">
              {selectedChildId ? (
                <>
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Learning Progress</CardTitle>
                      <CardDescription>
                        Overview of your child's learning journey
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Courses in Progress</span>
                            <span>{childProgress?.inProgressCourses}</span>
                          </div>
                          <Progress value={60} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Completed Courses</span>
                            <span>{childProgress?.completedCourses}</span>
                          </div>
                          <Progress value={40} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Hours Learned</span>
                            <span>{childProgress?.totalHours}</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>
                        Your child's latest learning activities
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {childProgress?.recentActivity.map((activity, index) => (
                        <div 
                          key={index} 
                          className="flex items-start space-x-4 py-3 border-b last:border-0"
                        >
                          <div className="bg-primary/10 p-2 rounded-full">
                            {activity.action.includes('quiz') ? (
                              <BookOpen className="h-5 w-5 text-primary" />
                            ) : (
                              <Clock className="h-5 w-5 text-primary" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{activity.action}</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(activity.date).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Activity
                      </Button>
                    </CardFooter>
                  </Card>
                </>
              ) : (
                <Card className="h-full flex items-center justify-center">
                  <CardContent className="text-center py-10">
                    <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg mb-2">No Child Selected</p>
                    <p className="text-muted-foreground mb-6">
                      Select a child from the list to view their progress
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>
                          <UserPlus className="h-4 w-4 mr-2" />
                          Add Child
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add a Child</DialogTitle>
                          <DialogDescription>
                            Enter your child's information to link their account to yours.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input
                              id="name"
                              value={childName}
                              onChange={(e) => setChildName(e.target.value)}
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                              Email
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              value={childEmail}
                              onChange={(e) => setChildEmail(e.target.value)}
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button onClick={handleAddChild}>Add Child</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
  )
}

export default MainContent