"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Neural network nodes
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      pulsePhase: number;
    }[] = [];
    const nodeCount = 80;
    const maxDistance = 150;
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Mouse movement tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation
    let animationFrame: number;
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // React to mouse
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 200) {
          node.x -= dx * 0.001;
          node.y -= dy * 0.001;
        }

        // Pulse animation
        node.pulsePhase += 0.02;
        const pulse = Math.sin(node.pulsePhase) * 0.3 + 0.7;

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i < j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              const opacity = (1 - distance / maxDistance) * 0.3 * pulse;
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.stroke();
            }
          }
        });

        // Draw node with glow
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 3
        );
        gradient.addColorStop(
          0,
          `rgba(255, 255, 255, ${node.opacity * pulse})`
        );
        gradient.addColorStop(
          0.5,
          `rgba(255, 255, 255, ${node.opacity * pulse * 0.5})`
        );
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core node
        ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity * pulse})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen rounded-br-4xl flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40 w-full h-full"
        style={{ pointerEvents: "none" }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto py-20 w-full">
        <div className="mb-6 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2 max-w-full">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0" />
          <span className="text-xs sm:text-sm truncate">
            Join 50,000+ students already learning smarter
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-2">
          Transform Ideas Into
          <span className="block text-white mt-2">Digital Success</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
          We're your partner in product design, website creation, and branding
          for every stage of your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 w-full max-w-md sm:max-w-none mx-auto">
          <Button className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base md:text-lg rounded-full font-semibold group">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base md:text-lg rounded-full bg-transparent backdrop-blur-sm group"
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
