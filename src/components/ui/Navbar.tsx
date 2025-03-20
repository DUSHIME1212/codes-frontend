"use client"

import { useState, useEffect } from "react";
import DesktopNav from "@/components/navigation/DesktopNav";
import MobileNav from "@/components/navigation/MobileNav";
import Logo from "@/components/navigation/Logo";
import SearchBar from "@/components/navigation/SearchBar";
import UserMenuDesktop from "@/components/navigation/UserMenuDesktop";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const navigate = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate.push('/');
  };

  return (
    <header
      className={`right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchBar />
            <UserMenuDesktop handleLogout={handleLogout} />
          </div>

          {/* Mobile menu button */}
          <MobileNav 
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen} 
            handleLogout={handleLogout}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;