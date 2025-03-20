import { useState } from 'react';
import { Menu, X, LogOut, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  handleLogout: () => void;
}

const MobileNav = ({ isMenuOpen, setIsMenuOpen, handleLogout }: MobileNavProps) => {
  const isAuthenticated = false;
  const navigate = useRouter();

  return (
    <>
      <div className="md:hidden flex items-center">
        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b animate-fade-in fixed top-16 left-0 right-0 z-50">
          <div className="container px-4 py-4 space-y-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search courses..." className="w-full pl-10 rounded-full bg-secondary" />
            </div>

            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className={(({ isActive }: { isActive: boolean }) =>
                  `px-3 py-2 text-sm font-medium rounded-md ${
                    isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary'
                  }`)({ isActive: true })}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/courses"
                className={(({ isActive }: { isActive: boolean }) =>
                  `px-3 py-2 text-sm font-medium rounded-md ${
                    isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary'
                  }`)({ isActive: true })}
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>

              {isAuthenticated && (
                <Link
                  href="/dashboard"
                  className={(({ isActive }: { isActive: boolean }) =>
                    `px-3 py-2 text-sm font-medium rounded-md ${
                      isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary'
                    }`)({ isActive: true })}
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Learning
                </Link>
              )}
            </div>

            <div className="pt-4 border-t flex space-x-2">
              {isAuthenticated ? (
                <>
                  <Button variant="outline" className="flex-1 gap-2" onClick={handleLogout}>
                    <LogOut className="h-4 w-4" />
                    Log out
                  </Button>
                  <Button
                    className="flex-1"
                    onClick={() => {
                      navigate.push('/dashboard');
                      setIsMenuOpen(false);
                    }}
                  >
                    Dashboard
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    className="flex-1"
                    variant="outline"
                    onClick={() => {
                      navigate.push('/login');
                      setIsMenuOpen(false);
                    }}
                  >
                    Log in
                  </Button>
                  <Button
                    className="flex-1"
                    onClick={() => {
                      navigate.push('/signup');
                      setIsMenuOpen(false);
                    }}
                  >
                    Sign up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
