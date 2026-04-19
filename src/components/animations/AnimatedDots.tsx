"use client";

import { useEffect, useRef } from "react";

export default function AnimatedDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    
    // Store individual "droplets"
    const ripples: { x: number; y: number; birthTime: number; power: number }[] = [];
    
    let lastDropTime = 0;
    let lastDropX = -1000;
    let lastDropY = -1000;
    
    const addRipple = (x: number, y: number, power = 1) => {
      ripples.push({ x, y, birthTime: time, power });
      // Keep only recent ripples so it doesn't freeze the browser
      if (ripples.length > 20) {
        ripples.shift();
      }
    };

    // Add an initial drop at the center of the screen
    // We delay it slightly so the canvas has time to render properly
    setTimeout(() => {
      if (canvasRef.current) {
        addRipple(window.innerWidth / 2, window.innerHeight / 2, 2.5); // Big initial splash
      }
    }, 100);

    // Add a random drop every 7 seconds, BUT only if the page is visible to avoid 
    // ripples accumulating when the user is on another tab.
    const randomDropInterval = setInterval(() => {
      if (canvasRef.current && !document.hidden) {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        addRipple(randomX, randomY, 2.5); // Big splash at random position
      }
    }, 7000);
    
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastDropX;
      const dy = e.clientY - lastDropY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Drop a droplet every 60px of movement, or if we haven't dropped one in a long time (but only if moving)
      if (distance > 60) {
        addRipple(e.clientX, e.clientY, 0.6); // Smaller wave for movement
        lastDropX = e.clientX;
        lastDropY = e.clientY;
        lastDropTime = time;
      }
    };
    
    const handleClick = (e: MouseEvent) => {
      addRipple(e.clientX, e.clientY, 1.5); // Big splash on click
      lastDropX = e.clientX;
      lastDropY = e.clientY;
      lastDropTime = time;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    const resize = () => {
      // Use devicePixelRatio for sharp rendering on retina displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      time += 0.02;
      
      // We use the inner window sizes because we scaled the context
      const width = window.innerWidth;
      const height = window.innerHeight;
            // Clean up old ripples that faded out
      for (let k = ripples.length - 1; k >= 0; k--) {
        const age = time - ripples[k].birthTime;
        if (age > 2.5) { // Fade entirely over 2.5s
          ripples.splice(k, 1);
        }
      }
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(129, 140, 248, 0.35)"; // soft indigo-400 tint

      const spacing = 24; // Space between dots
      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          
          // Very gentle background wave so it never disappears (between 0.8px and 1.2px)
          const baseWave = Math.sin(x * 0.01 + time) * 0.15 + Math.cos(y * 0.01 - time * 0.8) * 0.15;
          let radius = 1 + baseWave; // Fix minimum solid base point
          
          // Interactions: expanding water drop ripples
          const speed = 400; // pixels per second
          const thickness = 50; // Gaussian width around expanding ring
          
          for (const rip of ripples) {
            const dx = rip.x - x;
            const dy = rip.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            const age = time - rip.birthTime;
            const currentWaveRadius = age * speed;
            
            // Check if point is inside the ring logic
            const distFromWave = Math.abs(distance - currentWaveRadius);
            if (distFromWave < thickness) {
              const normalizedDist = 1 - (distFromWave / thickness);
              
              // Wave bump
              const bump = Math.sin(normalizedDist * Math.PI - Math.PI / 2) * 0.5 + 0.5;
              
              // Ripple fades as it gets older
              const ageFade = Math.max(0, 1 - (age / 2.5));
              
              // Apply ripple intensity and power (reduced for a more subtle effect)
              radius += bump * ageFade * 1.5 * rip.power;
            }
          }

          ctx.beginPath();
          ctx.arc(x, y, Math.max(0.5, radius), 0, Math.PI * 2);
          ctx.fill();
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resize);
      clearInterval(randomDropInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 bg-white"
    />
  );
}
