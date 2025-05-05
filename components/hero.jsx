"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

// type Props = {
//   userId: string | undefined;
// };

const HeroSection = ({ userId }) => {
  const router = useRouter();
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (imageElement) {
        if (scrollPosition > scrollThreshold) {
          imageElement.classList.add("scrolled");
        } else {
          imageElement.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <section
      ref={imageRef}
      className="pt-40 pb-20 px-4 bg-white dark:bg-gray-800 text-black dark:text-white"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-[105px] pb-6 gradient-title">
          Optimize Your Financial Decisions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="/">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
      </div>

      {/* Centered Pricing Section */}
      <div className="flex flex-col items-center mt-10">
        <h1 className="font-extrabold text-3xl">Explore Our Plans and Pricing Options</h1>
        <p className="text-gray-500 text-center">
          Maximize Your Savings with Early Payments and Unlimited Credits
        </p>

      </div>
    </section>
  );
};

export default HeroSection;