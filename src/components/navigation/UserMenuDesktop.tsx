

import { User, Bell, ShoppingCart, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface UserMenuDesktopProps {
  handleLogout: () => void;
}

const UserMenuDesktop = ({ handleLogout }: UserMenuDesktopProps) => {
  const  isAuthenticated  = false;
  const user = { name: "John Doe", role:"Admin" };
  const navigate = useRouter();

  if (!isAuthenticated) {
    return (
      <>
        <Button size="sm" variant="outline" className="ml-2" asChild>
          <Link href="/login">Log in</Link>
        </Button>
        
        <Button size="sm" asChild>
          <Link href="/signup">Sign up</Link>
        </Button>
      </>
    );
  }

  return (
    <>
      <Button size="sm" variant="ghost" className="relative">
        <Bell className="h-5 w-5" />
        <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></span>
      </Button>
      
      <Button size="sm" variant="ghost">
        <ShoppingCart className="h-5 w-5" />
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <User className="h-4 w-4" />
            {user?.name}
            {user?.role && (
              <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">
                {user.role}
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem onClick={() => navigate.push('/dashboard')}>
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate.push('/profile')}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout} className="text-destructive">
            <LogOut className="h-4 w-4 mr-2" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserMenuDesktop;