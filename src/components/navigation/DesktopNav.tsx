
import { ChevronDown } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { categories } from "@/lib/data";
import Link from "next/link";

const DesktopNav = () => {
  const  isAuthenticated  = false;

  return (
    <nav className="hidden md:flex space-x-1">
      <Link 
        href="/" 
        className={(({ isActive }: { isActive: boolean }) =>
          `px-3 py-2 text-sm font-medium rounded-md ${
            isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary'
          }`)({ isActive: true })}
      >
        Home
      </Link>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="px-3 py-2 text-sm font-medium transition-colors rounded-md text-foreground/80 hover:text-foreground flex items-center">
            Courses <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56 grid grid-cols-2 p-2">
          {categories.slice(0, 10).map((category) => (
            <DropdownMenuItem key={category} asChild>
              <Link 
                href={`/courses?category=${category}`}
                className="px-2 py-1.5 text-sm"
              >
                {category}
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem asChild className="col-span-2 mt-2 border-t pt-2">
            <Link href="/courses" className="px-2 py-1.5 text-sm font-medium text-primary">
              View All Categories
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      {isAuthenticated && (
        <Link 
          href="/dashboard" 
          className={(({ isActive }: { isActive: boolean }) =>
            `px-3 py-2 text-sm font-medium rounded-md ${
              isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary'
            }`)({ isActive: true })}
        >
          My Learning
        </Link>
      )}
    </nav>
  );
};

export default DesktopNav;