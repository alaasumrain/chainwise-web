
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is ChainWise?",
    answer: "ChainWise is an AI-powered investment assistant that helps you track market trends, manage risk, and receive smart alerts — all in real time. It's designed for crypto and stock investors who want to invest smarter."
  },
  {
    question: "How does ChainWise work?",
    answer: "You sign up, connect your portfolio (or enter your interests), and our AI analyzes data from multiple sources to send you personalized alerts, insights, and recommendations."
  },
  {
    question: "Is ChainWise safe to use?",
    answer: "Yes — we take privacy and data security seriously. Your personal information is encrypted, and we never share your data with third parties."
  },
  {
    question: "What will I get with Early Access?",
    answer: "As an Early Access user, you'll be among the first to test the platform, receive exclusive features, special discounts, and help shape the future of ChainWise."
  },
  {
    question: "What makes ChainWise different from other tools?",
    answer: "We combine AI, social sentiment analysis, risk tracking, and investment strategy — in one powerful and user-friendly dashboard. ChainWise isn't just data — it's smart action."
  },
  {
    question: "When does the full platform launch?",
    answer: "We're currently building the beta version. Early users will get access soon, and the full launch is scheduled for Q3 2025."
  },
  {
    question: "Is there a free plan?",
    answer: "Yes! ChainWise will offer a Free Plan with limited features, and paid Pro & Elite plans for users who want full access to all AI insights and tools."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="container px-4 py-24 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-normal mb-6">
            Frequently Asked <span className="text-gradient font-medium">Questions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get answers to common questions about ChainWise and how our platform can help you invest smarter.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass rounded-xl p-6 md:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
