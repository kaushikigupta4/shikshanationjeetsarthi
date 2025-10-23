"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Ruchir Bansal",
      text: `I'm so grateful to my JEET SARTHI mentors. 
They didn't just guide me academically — they treated my success as their own. 
My senior mentor gave me the right strategy, while my junior mentor checked on me daily and kept me disciplined. 
It felt like having a support system that truly cared, and my preparation level has improved tremendously.`,
    },
    {
      name: "Amaiya Singhal",
      text: `The one-on-one mentorship at JEET SARTHI helped me balance school with NEET prep. 
My mentor taught me how to study smarter, attempt tests strategically, and stay consistent. 
With constant check-ins and motivation, I could see my scores improve. 
Every aspirant should have this kind of personalized mentorship.`,
    },
    {
      name: "Namrata Jha",
      text: `JEET SARTHI mentors helped me solve problems faster and manage my time better. 
I loved how my junior mentor kept me on track with regular tasks, while my senior mentor showed me exam strategies that really worked. 
Their constant guidance and motivation made me feel confident and stress-free about my preparation.`,
    },
    {
      name: "Aarav Mehta",
      text: `Before joining JEET SARTHI, I struggled with consistency. 
The daily check-ins and goal tracking from my mentors helped me build a routine I could stick to. 
Now I’m much more focused and efficient, and my mock test performance has improved significantly.`,
    },
    {
      name: "Riya Sharma",
      text: `My JEET SARTHI mentors completely changed how I studied. 
They helped me prioritize chapters based on my weak areas and taught me how to analyze mistakes in mock tests. 
The guidance made me feel more confident and calm even under exam pressure.`,
    },
    {
      name: "Aditya Patel",
      text: `The mentorship program kept me accountable and motivated. 
My mentors would discuss test results with me and help plan weekly targets. 
Their encouragement kept me consistent, and I could finally overcome procrastination.`,
    },
    {
      name: "Sneha Verma",
      text: `I used to feel anxious before tests, but my mentors at JEET SARTHI helped me manage stress and stay positive. 
They guided me through revision strategies and helped me find a study rhythm that actually worked for me.`,
    },
    {
      name: "Karan Singh",
      text: `The structured mentorship at JEET SARTHI gave me clarity. 
My mentors not only helped me academically but also emotionally supported me when I felt low. 
Their feedback sessions were the highlight of my preparation journey.`,
    },
    {
      name: "Pooja Das",
      text: `What stood out to me was the personal attention. 
Both my senior and junior mentors took time to understand my preparation style. 
Their constant feedback and weekly discussions made me feel confident and fully prepared.`,
    },
    {
      name: "Tanishka Raj",
      text: `JEET SARTHI felt like a family. 
Whenever I felt lost or overwhelmed, my mentors stepped in with solutions. 
They showed me how to study strategically and believe in myself. It completely changed my approach to preparation.`,
    },
  ];

  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  // group testimonials 3 per slide
  const testimonialChunks = chunkArray(testimonials, 3);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-[#0268b6] font-extrabold text-[clamp(36px,5vw,56px)] mb-12 [font-family:'Poppins',sans-serif]">
        Success <span className="text-[#67ba4b]">Stories</span>
      </h2>

      <Carousel
        className="max-w-7xl mx-auto"
        onValueChange={(index) => setActiveIndex(index)}
      >
        <CarouselContent>
          {testimonialChunks.map((chunk, index) => (
            <CarouselItem key={index}>
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {chunk.map((story, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="bg-[rgb(235,246,237)] rounded-2xl shadow-md flex flex-col items-center text-center px-6 md:px-8 py-20 min-h-[220px]">
                      <Quote className="text-[#0268b6] w-10 h-10 mb-4" />
                      <p className="text-gray-700 text-base md:text-lg">
                        {story.text}
                      </p>
                    </div>
                    <h3 className="mt-4 text-[#0268b6] font-semibold text-lg md:text-xl text-center">
                      {story.name}
                    </h3>
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 sm:left-4" />
        <CarouselNext className="right-2 sm:right-4" />
      </Carousel>

      
      <div className="flex justify-center space-x-3 mt-8 overflow-x-auto">
        {testimonialChunks.map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`inline-block w-4 h-4 rounded-full cursor-pointer transition-all ${
              index === activeIndex ? "bg-[#67ba4b]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
