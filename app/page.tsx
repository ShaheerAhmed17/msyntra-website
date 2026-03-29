"use client"

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { FeatureCard } from "@/components/feature-card";
import { CtaBlock } from "@/components/cta-block";
import { ProcessStep } from "@/components/process-step";
import { TestimonialCard } from "@/components/testimonial-card";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  Zap,
  Bot,
  AlertCircle,
  Cpu
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-teal-500/30 bg-[#0B0F19]">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        {/* Problem Statement Section */}
        <section className="py-28 relative">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:w-1/2"
              >
                <div className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 text-[10px] font-bold tracking-wider uppercase mb-6 rounded-full border border-teal-500/20">
                  The Problem
                </div>
                <h2 className="text-4xl md:text-[56px] font-bold tracking-tight mb-8 leading-[1.1] text-white">
                  Your team is busy. <br />
                  <span className="text-teal-500">Not productive.</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-lg mb-10">
                  Most businesses aren't slow because of bad people — they're slow because of manual processes that should have been automated yesterday. Every hour spent on repetitive work is an hour not spent on growth.
                </p>
                <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-teal-500/40">
                  <span>Msyntra Intelligence Report</span>
                  <div className="h-px flex-1 bg-teal-500/10" />
                </div>
              </motion.div>

              <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                <ProblemItem
                  icon={<AlertCircle className="h-5 w-5" />}
                  title="Slow, Manual Operations"
                  text="Your team is drowning in repetitive tasks — data entry, follow-ups, reporting — that kill momentum and burn out your best people."
                />
                <ProblemItem
                  icon={<AlertCircle className="h-5 w-5" />}
                  title="Decisions Made in the Dark"
                  text="Your data exists — it's just scattered, unstructured, and impossible to act on. You're making million-dollar calls without the full picture."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="services" className="py-28 border-y border-white/5 relative overflow-hidden bg-[#0B0F19]">
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-xl">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-[10px] font-bold tracking-[0.2em] uppercase text-teal-500 mb-4 block"
                >
                  What We Build
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                  AI Systems That <br /> Do the Heavy Lifting
                </h2>
              </div>
              <p className="text-gray-400 max-w-sm text-lg leading-relaxed mb-1">
                We build and deploy custom AI systems that handle your most time-consuming workflows — so your team can focus on what actually moves the needle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title="AI Lead Automation"
                description="Stop chasing cold leads manually. Our AI agents find, qualify, and follow up with prospects around the clock — so your sales team only talks to people ready to buy."
                icon={<Zap className="h-6 w-6" />}
                image="/images/services/service_lead_orchestration_1774729665168.png"
                delay={0.1}
              />
              <FeatureCard
                title="Business Knowledge Assistant"
                description="Turn your documents, SOPs, and internal data into an AI assistant your team can query instantly — no more digging through folders or waiting on colleagues."
                icon={<Bot className="h-6 w-6" />}
                image="/images/services/service_knowledge_engine_1774729827285.png"
                delay={0.2}
              />
            </div>
          </div>
        </section>

        {/* Blueprint Section */}
        <section className="py-28 overflow-hidden relative bg-[#0B0F19]">
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-[10px] font-bold tracking-[0.2em] uppercase text-teal-500 mb-4 block"
                >
                  How It Works
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 leading-[1.1] text-white">
                  From idea to <br /><span className="text-teal-500">running system</span> — fast.
                </h2>
                <div className="space-y-10">
                  <ProcessStep
                    number="01"
                    title="We Audit Your Operations"
                    description="We map out exactly where your team is losing time and money — and identify which workflows will deliver the highest ROI when automated."
                    delay={0.1}
                  />
                  <ProcessStep
                    number="02"
                    title="We Build on Your Data"
                    description="We train AI models on your actual business data, documents, and processes — so the system understands your business, not just generic text."
                    delay={0.2}
                  />
                  <ProcessStep
                    number="03"
                    title="We Deploy & You Scale"
                    description="We integrate the AI into your existing tools with zero disruption. Your team gets a system that works from day one — and gets smarter over time."
                    delay={0.3}
                  />
                </div>
              </div>
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-teal-500/5 blur-[120px] rounded-full" />
                <div className="relative border border-white/5 rounded-[3rem] h-full w-full bg-[#111827]/30 backdrop-blur-3xl flex items-center justify-center p-12 shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-30" />
                  <div className="text-center">
                    <Cpu className="h-24 w-24 text-teal-400 mb-8 mx-auto transition-transform group-hover:scale-110 duration-1000 opacity-80" />
                    <div className="space-y-4">
                      <div className="h-3 w-48 bg-teal-500/10 rounded-full mx-auto" />
                      <div className="h-3 w-32 bg-teal-500/10 rounded-full mx-auto" />
                    </div>
                    <p className="mt-12 font-mono text-[8px] tracking-[0.4em] text-teal-500/30 uppercase font-bold">Systems Active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />

        <CtaBlock />
      </main>
      <Footer />
    </div>
  );
}

function ProblemItem({ icon, title, text }: { icon: ReactNode, title: string, text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 border border-white/5 bg-[#111827]/30 backdrop-blur-3xl rounded-2xl group transition-all hover:bg-[#111827]/50 hover:border-teal-500/30 flex flex-col items-start text-left shadow-xl"
    >
      <div className="h-12 w-12 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center mb-6 border border-teal-500/20 group-hover:bg-teal-500 group-hover:text-white transition-all duration-700">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 tracking-tight text-white">{title}</h3>
      <p className="text-base text-gray-400 leading-relaxed font-normal">{text}</p>
    </motion.div>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-28 bg-[#0B0F19] border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.2em] uppercase text-teal-500 mb-4 block"
          >
            Client Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            Businesses already running faster
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-gray-400 mt-4 max-w-xl mx-auto text-base leading-relaxed"
          >
            Here's what our clients say after deploying Msyntra's AI systems into their operations.
          </motion.p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard
            quote="We cut our lead follow-up time from 3 days to under 10 minutes. The AI handles qualification so our sales team only talks to serious buyers."
            author="Sarah Jenkins"
            role=""
            delay={0.1}
          />
          <TestimonialCard
            quote="500+ hours saved every single month. Msyntra automated workflows we didn't even realize could be automated. It paid for itself in the first week."
            author="Michael Chen"
            role=""
            delay={0.2}
          />
          <TestimonialCard
            quote="Finally an AI partner that speaks our language. They understood our operations from day one and delivered a system that actually works in the real world."
            author="David Ross"
            role=""
            delay={0.3}
          />
        </div>

      </div>
    </section>
  )
}