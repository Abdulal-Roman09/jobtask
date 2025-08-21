"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/theme-provider";
import Navber from "./Navber";

export default function NavClients({ children }) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navber />
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
