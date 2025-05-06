
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

// Default avatar placeholder for fallback
const DEFAULT_AVATAR = "/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Investment Advisor",
    image: DEFAULT_AVATAR,
    content: "The AI-powered market analysis has significantly improved our investment decisions. My clients are seeing better returns with less risk thanks to ChainWise's predictive algorithms."
  },
  {
    name: "Sarah Johnson",
    role: "Wealth Management Director",
    image: DEFAULT_AVATAR,
    content: "ChainWise's enterprise tools have transformed our investment strategy. The AI-driven portfolio optimization and risk assessment features have saved us countless hours of analysis."
  },
  {
    name: "David Wilson",
    role: "Angel Investor",
    image: DEFAULT_AVATAR,
    content: "The customer support is exceptional, and the platform's intuitive design made adopting AI for my investment decisions seamless. A game-changer for both novice and experienced investors."
  },
  {
    name: "Emily Zhang",
    role: "FinTech Developer",
    image: DEFAULT_AVATAR,
    content: "We've seen remarkable improvements in our investment performance since integrating with ChainWise. The AI predictions and smart allocation suggestions are particularly impressive."
  },
  {
    name: "James Rodriguez",
    role: "Financial Security Expert",
    image: DEFAULT_AVATAR,
    content: "The security features are robust and the regular AI updates keep us ahead of market trends. It's exactly what the investment industry needed in the age of data-driven decisions."
  },
  {
    name: "Lisa Thompson",
    role: "Portfolio Manager",
    image: DEFAULT_AVATAR,
    content: "The platform's ability to handle complex investment strategies while maintaining simplicity in its interface is remarkable. The AI insights have been invaluable for our portfolio management."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Trusted by Investors</h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of satisfied investors using ChainWise
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
