
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass p-5 md:p-6 rounded-xl flex flex-col items-center shadow-xl border border-white/10 h-full"
    >
      <div className="flex items-center mb-3 text-primary">
        <Clock className="w-5 h-5 mr-2" />
        <h3 className="font-medium text-lg">Early Access Closes In:</h3>
      </div>
      
      <div className="grid grid-cols-4 gap-2 md:gap-4 w-full">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Mins", value: timeLeft.minutes },
          { label: "Secs", value: timeLeft.seconds },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="bg-black/50 rounded-lg w-full py-3 md:py-4 text-center font-bold text-xl md:text-3xl text-white">
              {String(item.value).padStart(2, "0")}
            </div>
            <span className="text-xs mt-1 text-gray-400">{item.label}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center text-sm text-white/80 pt-2 border-t border-white/10 w-full">
        <span className="font-medium">Limited spots available!</span>
      </div>
    </motion.div>
  );
}
