import { Button } from '@/components/ui/button'
import { Brain, Gamepad } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AIChatHeader = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2 flex items-center">
                  <Brain className="h-8 w-8 mr-2" />
                  AI Learning Assistant
                </h1>
                <p className="text-white/80">
                  Ask questions, get explanations, and enhance your learning with AI
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link href="/games">
                  <Button variant="secondary" className="flex items-center">
                    <Gamepad className="h-4 w-4 mr-2" />
                    Try Educational Games
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
  )
}

export default AIChatHeader