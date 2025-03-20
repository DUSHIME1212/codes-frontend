"use client"

import React, { useEffect, useRef, useState } from 'react'
import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardFooter, 
    CardHeader, 
    CardTitle 
  } from "@/components/ui/card";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
  import { Brain, ChevronRight, Sparkles, Send, Bot, BookOpen, User, Gamepad } from "lucide-react";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Message {
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
  }

const Chatinterface = () => {
    const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI learning assistant. How can I help you with your studies today?",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [subject, setSubject] = useState("general");
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Simulate AI response based on subject
    setTimeout(() => {
      let response = "";
      
      switch (subject) {
        case "math":
          response = "I'd be happy to help with your math problem! Let's break this down step by step...";
          break;
        case "science":
          response = "Great science question! Here's what you need to know about this scientific concept...";
          break;
        case "language":
          response = "That's an interesting language question. Let me explain the grammar and usage...";
          break;
        case "history":
          response = "This historical event is fascinating! Here are the key facts and context you should know...";
          break;
        default:
          response = "I understand your question. Let me provide you with the information you're looking for...";
      }
      
      const aiMessage: Message = {
        role: "assistant",
        content: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const subjectExamples = {
    math: [
      "Can you explain how to solve quadratic equations?",
      "What's the difference between permutations and combinations?",
      "Help me understand the concept of calculus derivatives."
    ],
    science: [
      "How does photosynthesis work?",
      "Explain the theory of relativity in simple terms.",
      "What are the different states of matter?"
    ],
    language: [
      "What's the difference between 'affect' and 'effect'?",
      "Can you explain how to structure a persuasive essay?",
      "Help me understand passive voice vs. active voice."
    ],
    history: [
      "What were the main causes of World War II?",
      "Explain the significance of the Industrial Revolution.",
      "Who was Alexander the Great and why was he important?"
    ],
    general: [
      "How can I improve my study habits?",
      "What are some tips for memorizing information better?",
      "Can you recommend learning resources for advanced physics?"
    ]
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="h-[70vh] flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="flex items-center">
                        <Bot className="h-5 w-5 mr-2 text-primary" />
                        AI Learning Assistant
                      </CardTitle>
                      <CardDescription>
                        Ask questions about any subject
                      </CardDescription>
                    </div>
                    <div className="flex items-center">
                      <Select value={subject} onValueChange={setSubject}>
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General</SelectItem>
                          <SelectItem value="math">Mathematics</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="language">Language Arts</SelectItem>
                          <SelectItem value="history">History</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div 
                      key={index} 
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.role === "user" 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-muted"
                        }`}
                      >
                        <div className="flex items-start mb-1">
                          {message.role === "assistant" && (
                            <Bot className="h-4 w-4 mr-1 mt-1" />
                          )}
                          {message.role === "user" && (
                            <User className="h-4 w-4 mr-1 mt-1" />
                          )}
                          <span className="font-medium">
                            {message.role === "user" ? "You" : "AI Assistant"}
                          </span>
                        </div>
                        <p className="whitespace-pre-wrap">{message.content}</p>
                        <div className="text-xs mt-1 opacity-70 text-right">
                          {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.6s]"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </CardContent>
                <CardFooter className="p-4 border-t">
                  <div className="flex w-full space-x-2">
                    <Input
                      placeholder="Type your question here..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="flex-1"
                      disabled={isLoading}
                    />
                    <Button
                      onClick={handleSendMessage} 
                      disabled={!input.trim() || isLoading}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
            
            <div className="hidden lg:block">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-primary" />
                    Try asking about...
                  </CardTitle>
                  <CardDescription>
                    Example questions for {subject === "general" ? "general learning" : subject}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue={subject} value={subject} onValueChange={setSubject}>
                    <TabsList className="grid grid-cols-5 mb-4">
                      <TabsTrigger value="general">General</TabsTrigger>
                      <TabsTrigger value="math">Math</TabsTrigger>
                      <TabsTrigger value="science">Science</TabsTrigger>
                      <TabsTrigger value="language">Language</TabsTrigger>
                      <TabsTrigger value="history">History</TabsTrigger>
                    </TabsList>
                    
                    {Object.entries(subjectExamples).map(([key, examples]) => (
                      <TabsContent key={key} value={key} className="m-0">
                        <ul className="space-y-2">
                          {examples.map((example, index) => (
                            <li key={index}>
                              <Button 
                                variant="ghost" 
                                className="w-full justify-start text-left" 
                                onClick={() => {
                                  setInput(example);
                                }}
                              >
                                <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />
                                <span className="line-clamp-1">{example}</span>
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <span className="text-sm text-muted-foreground">
                    Your learning journey, powered by AI
                  </span>
                </CardFooter>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    Learning Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex gap-2 text-sm">
                      <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center text-primary flex-shrink-0">1</div>
                      <span>Ask the AI to explain concepts in simpler terms if needed</span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center text-primary flex-shrink-0">2</div>
                      <span>Request examples to better understand abstract concepts</span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center text-primary flex-shrink-0">3</div>
                      <span>Use the AI to practice problems and check your work</span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center text-primary flex-shrink-0">4</div>
                      <span>Ask for step-by-step solutions to complex problems</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
  )
}

export default Chatinterface