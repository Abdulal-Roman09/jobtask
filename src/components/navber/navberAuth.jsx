"use client"

import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useSession, signIn, signOut } from "next-auth/react"

export default function NavbarAuth() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p className="text-sm text-muted-foreground">Loading...</p>
  }

  if (session) {
    return (
      <div className="flex items-center gap-3">
        <Avatar className="w-9 h-9">
          <AvatarImage src={session.user?.image} alt={session.user?.name || "User"} />
          <AvatarFallback>{session.user?.name?.charAt(0) || "U"}</AvatarFallback>
        </Avatar>
        <Button size="sm" variant="outline" onClick={() => signOut()}>
          Logout
        </Button>
      </div>
    )
  }

  return (
    <>
      <Button size="sm" variant="ghost" onClick={() => signIn()}>
        Sign In
      </Button>
      <Button asChild size="sm">
        <a href="/register">Register</a>
      </Button>
    </>
  )
}
