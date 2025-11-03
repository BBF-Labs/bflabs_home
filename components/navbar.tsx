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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-3 px-4">
      <nav
        className={`transition-all duration-300 w-full max-w-6xl rounded-2xl md:rounded-full ${
          isScrolled
            ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/10"
            : "bg-white/5 backdrop-blur-md border border-white/10"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isScrolled
                    ? "bg-white/20 backdrop-blur-sm border border-white/30"
                    : "bg-white/10 backdrop-blur-sm border border-white/20"
                }`}
              >
                <span className="text-xl font-bold text-white">β</span>
              </div>
              <span className="text-xl font-bold text-white">BetaForge</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="font-medium text-white/90 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="font-medium text-white/90 hover:text-white transition-colors"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="font-medium text-white/90 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="font-medium text-white/90 hover:text-white transition-colors"
              >
                Testimonials
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                Login
              </Button>
              <Button className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30 rounded-full px-6">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 rounded-b-3xl overflow-hidden">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#features"
                className="block text-white/90 hover:text-white font-medium"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block text-white/90 hover:text-white font-medium"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="block text-white/90 hover:text-white font-medium"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="block text-white/90 hover:text-white font-medium"
              >
                Testimonials
              </a>
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full bg-black backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                >
                  Login
                </Button>
                <Button className="w-full bg-black backdrop-blur-sm text-white hover:bg-white/30 border border-white/30">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
