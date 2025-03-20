import { Button } from '@/components/ui/button';
import { Brain, Gamepad } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const GameHeader = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Gamepad className="h-8 w-8 mr-2" />
              Educational Games
            </h1>
            <p className="text-white/80">Learn while having fun with our interactive educational games</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/aichat">
              <Button variant="secondary" className="flex items-center">
                <Brain className="h-4 w-4 mr-2" />
                Try AI Chat Learning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameHeader;
