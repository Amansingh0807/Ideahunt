'use client'

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/hero";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export const dynamic = "force-dynamic";

// Carousel image array
const images = [
  '/impact1.png',
  '/impact2.png',
  '/impact3.png',
  // Add more image paths
];

export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    drag: false,
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="min-h-screen bg-black">
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-green-500 dark:bg-green-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-black dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-black dark:text-black">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auto Carousel Section */}
      <section className="py-12 bg-green-100">
        <div className="container mx-auto px-4">
          <div ref={sliderRef} className="keen-slider rounded-2xl overflow-hidden shadow-lg">
            {images.map((src, idx) => (
             <div key={idx} className="keen-slider__slide relative h-[300px] w-full">
             <Image
               src={src}
               alt={`Slide ${idx + 1}`}
               fill
               className="object-cover rounded-2xl"
             />
           </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 mt-0">
          <h2 className="text-3xl text-white text-shadow-white font-bold text-center mb-12">
          Built for today, What's Ready for tomorrow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card className="p-6 bg-green-100 dark:bg-gray-800 shadow-md dark:shadow-lg" key={index}>
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-blue-50 dark:bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-white font-bold text-center mb-16">
            What are the Thoughts of World Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white dark:bg-gray-800 shadow-md dark:shadow-lg">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-400 dark:bg-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-black dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Join top teams using Fin CiVista to simplify expenses, payroll, and financial planning with Automation.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-[#f4f8ef] dark:bg-gray-700 text-black dark:text-white hover:bg-blue-50 dark:hover:bg-gray-600 animate-bounce"
            >
              Join Revolution
            </Button>
          </Link>
        </div>
      </section>

      {/* Final Banner */}
      <div className="py-20 bg-black">
        <h2 className="text-center font-bold text-[10px] md:text-[18vw] text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-900">
          Impact Creaters
        </h2>
      </div>
    </div>
  );
}
