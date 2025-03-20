"use client"

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      window.location.href = `/courses?search=${encodeURIComponent(searchTerm)}`;
    };
  return (
    <form onSubmit={handleSubmit} className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input 
        type="search" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search courses..." 
        className="w-64 pl-10 h-9 bg-secondary"
      />
    </form>
  );
};

export default SearchBar;