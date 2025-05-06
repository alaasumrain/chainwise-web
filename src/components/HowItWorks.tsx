
import React from "react";
import { motion } from "framer-motion";
import { Star, Calendar, Search } from "lucide-react";

const steps = [
  {
    title: "Sign Up",
    description: "Create your account and set your investment preferences",
    icon: <Star className="w-6 h-6 text-primary" />,
    delay: 0,
  },
  {
    title: "Connect Portfolio",
    description: "Link your existing investments or start from scratch",
    icon: <Calendar className="w-6 h-6 text-primary" />,
    delay: 0.1,
  },
  {
    title: "Get AI Insights",
    description: "Receive personalized recommendations and alerts",
    icon: <Search className="w-6 h-6 text-primary" />,
    delay: 0.2,
  },
];

export default function HowItWorks() {
  return (
    <section className="container px-4 py-24">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          How It <span className="text-gradient font-medium">Works</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Get started with ChainWise in three simple steps
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: step.delay, duration: 0.5 }}
            className="glass p-8 rounded-xl text-center flex flex-col items-center"
          >
            <div className="mb-6 glass rounded-full p-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-medium mb-2">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
            
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
