"use client"

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserPlus } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

const BannerParents = () => {
  const [childName, setChildName] = useState('');
  const [childEmail, setChildEmail] = useState('');
  const [selectedChildId, setSelectedChildId] = useState<string | null>(null);
  const handleAddChild = async () => {
    if (!childName || !childEmail) {
      toast.error('Please enter child name and email');
      return;
    }

    try {
    //   await addChildToParent(childName, childEmail);
      toast.success('Child added successfully');
      setChildName('');
      setChildEmail('');
    } catch (error) {
      toast.error('Failed to add child');
      console.error(error);
    }
  };
  return (
    <section className="bg-gradient-to-r from-blue-700 min-h-60 to-blue-500/80 text-primary-foreground">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Parent Dashboard</h1>
            <p className="text-primary-foreground/80">Monitor your children's learning progress</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-4 md:mt-0">
                <UserPlus className="h-4 w-4 mr-2" />
                Add Child
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a Child</DialogTitle>
                <DialogDescription>Enter your child's information to link their account to yours.</DialogDescription>
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
        </div>
      </div>
    </section>
  );
};

export default BannerParents;
