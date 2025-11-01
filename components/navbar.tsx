"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold text-white">β</span>
            </div>
            <span
              className={`text-xl font-bold ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              BetaForge
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-white/90 hover:text-white"
              }`}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Testimonials
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className={
                isScrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-white hover:bg-white/10"
              }
            >
              Login
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#features"
              className="block text-gray-700 hover:text-black font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block text-gray-700 hover:text-black font-medium"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="block text-gray-700 hover:text-black font-medium"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="block text-gray-700 hover:text-black font-medium"
            >
              Testimonials
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">
                Login
              </Button>
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
