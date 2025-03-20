'use client';
import { games } from '@/lib/games';
import React, { useState } from 'react';
import GameHeader from './_components/GameHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad, Brain, Sparkles, Award, Timer } from "lucide-react";
import GameCard from '@/components/cards/GameCard';

const page = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  // Filter games by category
  const filteredGames = activeCategory === 'all' ? games : games.filter((game) => game.category === activeCategory);

  return (
    <div>
      <GameHeader />
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Browse Games</h2>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="math">Math</TabsTrigger>
              <TabsTrigger value="language">Language</TabsTrigger>
              <TabsTrigger value="science">Science</TabsTrigger>
              <TabsTrigger value="cognitive">Cognitive</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="m-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGames.map((game) => (
                <GameCard
                  key={game.id}
                  title={game.title}
                  description={game.description}
                  image={game.image}
                  category={game.category}
                  difficulty={game.difficulty}
                  playTime={game.playTime}
                  slug={game.slug}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Benefits section */}
        <section className="mt-12 bg-secondary rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Sparkles className="h-6 w-6 mr-2 text-primary" />
            Benefits of Educational Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Brain className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">Cognitive Development</h3>
                <p className="text-sm text-muted-foreground">
                  Enhance problem-solving skills, critical thinking, and memory through interactive challenges.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">Achievement Motivation</h3>
                <p className="text-sm text-muted-foreground">
                  Build confidence and motivation through immediate feedback and rewards for accomplishments.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Gamepad className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">Engaging Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Increase knowledge retention through fun, interactive experiences that make learning enjoyable.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
