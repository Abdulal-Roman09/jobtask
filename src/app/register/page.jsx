"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { FaGoogle, FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(data) {
    // Example: send registration data to backend API
    console.log(data)
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground py-6 px-4">
      <Card className="w-full max-w-md p-6 sm:p-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold">Register</CardTitle>
        </CardHeader>

        {/* Social Login */}
        <div className="mt-6 flex flex-col gap-3">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <FaGoogle className="w-4 h-4" /> Continue with Google
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => signIn("github", { callbackUrl: "/" })}
          >
            <FaGithub className="w-4 h-4" /> Continue with GitHub
          </Button>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">or</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Username</label>
            <Input {...register("username")} placeholder="Enter your username" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input {...register("email")} type="email" placeholder="Enter your email" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <Input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full mt-4">
            Register
          </Button>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <a href="/signin" className="text-primary font-semibold hover:underline">
              Sign In
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
}
