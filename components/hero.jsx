"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = ({ userId }) => {
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
    <div className="bg-black min-h-screen flex items-center justify-center px-4 pt-24 mb-5">
      {/* Container with white background */}
      <section
        ref={imageRef}
        className="w-full max-w-7xl bg-[#f4f8ef] rounded-[20px] py-20 px-6 md:px-16 text-black relative overflow-hidden"
      >
        <div className="text-center">
          <p className="text-green-600 font-medium mb-4">
          ONE PLATFORM, TOTAL FINANCIAL CLEARITY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
          All-in-1 Financial Automation for the{" "}
            <span className="bg-lime-400 px-2 rounded-md">Gig Workforce</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10">
          Built for remote teams, freelancers, and modern businesses — say goodbye to delays, manual errors, and tool overload.
          </p>

          {/* Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#064e3b] text-white p-6 rounded-xl">
              <p className="text-lg font-semibold mb-2">💸 Auto Reimbursements</p>
              <p className="text-sm">Fast approvals,no manual tracking</p>
            </div>
            <div className="bg-[#064e3b] text-white p-6 rounded-xl">
              <p className="text-lg font-semibold mb-2">🌍 Unified Dashboard</p>
              <p className="text-sm">Submit, manage, and track expenses in one place</p>
            </div>
            <div className="bg-[#064e3b] text-white p-6 rounded-xl">
              <p className="text-lg font-semibold mb-2">🛠️ Tool Tracking</p>
              <p className="text-sm">Remove duplicates, streamline SaaS usage</p>
            </div>
            <div className="bg-[#064e3b] text-white p-6 rounded-xl">
              <p className="text-lg font-semibold mb-2">🧾 AI Tax Insights</p>
              <p className="text-sm">Smart,automated tax & salary breakdowns</p>
            </div>
          </div>

          <div className="mt-10 flex justify-center space-x-4">
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
      </section>
    </div>
  );
};

export default HeroSection;
