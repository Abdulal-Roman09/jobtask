"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavRight({ user, onLogin, onLogout }) {
  // Guest view
  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Button
          onClick={async () => {
            const result = await signIn("github", { redirect: false });
            if (result?.ok)
              onLogin({ name: "GitHub User", email: "git@user.com", image: "" });
          }}
        >
          GitHub Login
        </Button>
        <Button
          onClick={async () => {
            const result = await signIn("google", { redirect: false });
            if (result?.ok)
              onLogin({ name: "Google User", email: "google@user.com", image: "" });
          }}
        >
          Google Login
        </Button>
      </div>
    );
  }

  // Logged-in view
  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img
            src={user.image || "/default-avatar.png"}
            alt="Avatar"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <div className="px-4 py-2 border-b">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <DropdownMenuItem asChild>
            <a href="/dashboard">Dashboard</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/profile">Profile</a>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              signOut({ redirect: false });
              onLogout();
            }}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
