"use server"
import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard, ShieldCheck } from "lucide-react";
import {  Wrench } from 'lucide-react';
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";

const Header = async () => {
  try {
    await checkUser();
  } catch (error) {
    console.error("Error in Header:", error.message);
    // Optionally, redirect to login or show an error message
  }

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b dark:border-gray-700">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="OptEx Logo"
            width={300}
            height={200}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links - Different for signed in/out users */}
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Testimonials
            </a>
          </SignedOut>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <SignedIn>
          <Link
  href="/tools"
  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2"
>
  <Button className="flex items-center gap-2">
  <Wrench />{/* Savings Icon */}
    <span className="hidden md:inline">Tools</span>
  </Button>
</Link>
<Link
  href="/claim"
  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2"
>
  <Button className="flex items-center gap-2">
  <ShieldCheck/>{/* Savings Icon */}
    <span className="hidden md:inline">Claim</span>
  </Button>
</Link>

            <Link
              href="/dashboard"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2"
            >
              <Button>
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <a href="/transaction/create">
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </a>
         
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;