
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show CTA after scrolling down 500px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Function to scroll to registration form
  const scrollToRegister = () => {
    const registerSection = document.getElementById("register");
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 md:hidden z-40 p-4 bg-[#0A0A0A]/90 backdrop-blur-lg border-t border-white/10"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1 mr-4">
              <p className="text-sm font-medium">Join ChainWise — Your AI Investing Assistant</p>
            </div>
            <Button onClick={scrollToRegister} className="button-gradient whitespace-nowrap">
              Join Now
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
