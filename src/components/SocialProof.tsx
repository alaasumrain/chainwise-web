
import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function SocialProof() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center justify-center gap-8 glass p-6 rounded-xl"
    >
      <div className="flex flex-col items-center text-center">
        <span className="text-3xl font-bold text-primary mb-1">3,500+</span>
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-1" />
          <span className="text-sm text-gray-300">Investors already joined</span>
        </div>
      </div>
      
      <div className="h-10 hidden md:block border-r border-white/10" />
      
      <div className="flex flex-col items-center text-center">
        <span className="text-3xl font-bold text-primary mb-1">12</span>
        <span className="text-sm text-gray-300">Countries — 1 Vision</span>
      </div>
    </motion.div>
  );
}
