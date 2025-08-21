"use client"
import { ModeToggle } from "@/components/navber/ModeToggle";

import NavbarAuth from "../navber/navberAuth";

import NavbarRoutes from "./navberRouts";
import NavbarMobileMenu from "./navMobileManu";

export default function Navbar() {
  return (
    <header className="border-b px-2 md:px-0 container mx-auto">
      <div className="flex h-16 justify-between gap-4">
        <div className="flex gap-2">
          <NavbarMobileMenu />
          <NavbarRoutes />
        </div>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <NavbarAuth />
        </div>
      </div>
    </header>
  );
}
