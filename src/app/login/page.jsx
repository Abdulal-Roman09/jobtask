"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { FaGoogle, FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground py-6 px-4">
      <Card className="w-full max-w-md p-6 sm:p-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold">Sign In</CardTitle>
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
            <Input
              {...register("username")}
              placeholder="Enter your username"
            />
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

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                {...register("remember")}
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
              />
              <label htmlFor="remember-me" className="text-sm">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-primary hover:underline">
              Forgot password?
            </a>
          </div>

          <Button type="submit" className="w-full mt-4">
            Sign In
          </Button>

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-primary font-semibold hover:underline"
            >
              Register here
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
}
