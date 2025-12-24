"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-8 pt-4">
      <nav className="mx-auto max-w-5xl bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl">
        <div className="flex justify-between items-center h-16 px-6">
          {/* Logo - Clean Stripe style */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">betaforge</span>
          </div>

          {/* Desktop Navigation - Stripe style */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/"
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              Platform
            </a>
            <a
              href="/solutions"
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              Solutions
            </a>
            <a
              href="#partners"
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              Partners
            </a>
            <a
              href="#developers"
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              Developers
            </a>
            <a
              href="#docs"
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              Docs
            </a>
          </div>

          {/* CTA Buttons - Stripe style */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#signin"
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              Sign in →
            </a>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-2.5 text-sm font-semibold transition-all">
              Contact sales
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-8 py-6 space-y-4">
              <a href="/" className="block text-white text-base">
                Platform
              </a>
              <a href="/solutions" className="block text-white text-base">
                Solutions
              </a>
              <a href="#partners" className="block text-white text-base">
                Partners
              </a>
              <a href="#developers" className="block text-white text-base">
                Developers
              </a>
              <a href="#docs" className="block text-white text-base">
                Docs
              </a>
              <div className="pt-4 border-t border-white/10">
                <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-full">
                  Contact sales
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
