
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input 
        type="search" 
        placeholder="Search courses..." 
        className="w-64 pl-10 h-9 bg-secondary"
      />
    </div>
  );
};

export default SearchBar;