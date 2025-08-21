"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { ModeToggle } from "@/components/navber/ModeToggle";
import NavbarAuth from "../navber/navberAuth";
import NavbarRoutes from "./navberRouts";
import NavbarMobileMenu from "./navMobileManu";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    // Animate all children of navRef
    if (navRef.current) {
      const items = navRef.current.querySelectorAll(".nav-item");
      gsap.from(items, {
        opacity: 0,
        y: -20,
        stagger: 0.1, // stagger animation
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <header className="border-b px-2 md:px-0 container mx-auto">
      <div className="flex h-16 justify-between gap-4 items-center" ref={navRef}>
        <div className="flex gap-2">
          <div className="nav-item">
            <NavbarMobileMenu />
          </div>
          <div className="nav-item">
            <NavbarRoutes />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="nav-item">
            <ModeToggle />
          </div>
          <div className="nav-item">
            <NavbarAuth />
          </div>
        </div>
      </div>
    </header>
  );
}
