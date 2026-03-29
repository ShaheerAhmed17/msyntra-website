"use client"

import { Navbar } from "@/components/navbar"
import { Variants } from "framer-motion";
import { Footer } from "@/components/footer"
import { CtaBlock } from "@/components/cta-block"
import { motion } from "framer-motion"
import { Target, Shield, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
}

const stats = [
  { value: "95%", label: "Accuracy rate across all deployments" },
  { value: "40h+", label: "Saved per client every week" },
  { value: "4x", label: "Average ROI within 6 months" },
]

const values = [
  {
    icon: Target,
    title: "Results First, Always",
    desc: "We don't bill for hours or deliverables — we measure success by the time and revenue our clients gain. If you're not winning, we haven't done our job.",
  },
  {
    icon: Shield,
    title: "No Black Boxes",
    desc: "You own your data, your models, and your systems. We build with full transparency so you understand exactly what's running inside your business.",
  },
  {
    icon: Users,
    title: "AI That Works With People",
    desc: "We design systems to remove the work people hate — not the people themselves. AI handles the repetitive; your team handles the irreplaceable.",
  },
]

const timeline = [
  {
    year: "2023",
    title: "The Problem Became Personal",
    desc: "Watching talented teams burn out on repetitive manual work that should have been automated, our founder set out to build something better.",
  },
  {
    year: "2024",
    title: "Msyntra Is Founded",
    desc: "With a focused mission to make enterprise-grade AI accessible to growing businesses, Msyntra shipped its first AI lead automation system.",
  },
  {
    year: "2025",
    title: "Scaling Across Industries",
    desc: "Msyntra expanded into workflow automation and custom AI systems, serving clients across e-commerce, consulting, and professional services.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#0B0F19]">

        {/* ── Hero ── */}
        <section className="pt-40 pb-24 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-400/[0.03] blur-[100px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-teal-500">Our Story</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-5xl md:text-[64px] font-bold mb-8 tracking-tight leading-[1.05] text-white max-w-4xl"
            >
              We exist to give businesses
              <br />
              <span className="text-teal-500">an unfair advantage.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-lg md:text-xl text-gray-400 max-w-2xl font-normal leading-relaxed"
            >
              Msyntra was built for one reason: too many great businesses are losing time, money, and momentum to work that AI should already be doing. We're here to fix that.
            </motion.p>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="border-b border-white/5 bg-[#0d1117]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="py-12 px-8 text-center"
                >
                  <p className="text-4xl font-bold text-teal-500 mb-2">{stat.value}</p>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider leading-relaxed">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Founding Story + Timeline ── */}
        <section className="py-28 border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

              {/* Left: story */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <p className="text-[11px] font-bold uppercase tracking-widest text-teal-500 mb-4">How We Started</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15] mb-8">
                  Built out of frustration <br /> with the status quo.
                </h2>
                <div className="space-y-5 text-gray-400 text-base leading-relaxed font-normal">
                  <p>
                    Most businesses we spoke to had the same problem: smart people stuck doing work that wasn't smart. Data entry, manual follow-ups, copy-pasting between tools — hours of every day gone to tasks that a well-built system could handle in seconds.
                  </p>
                  <p>
                    The enterprise tools existed, but they came with enterprise price tags and six-month implementation timelines. Smaller, faster-moving businesses were being left behind — not because they didn't deserve AI, but because nobody built it for them.
                  </p>
                  <p>
                    Msyntra was founded to change that. We build custom AI systems that are fast to deploy, built on your data, and priced for growing businesses — not Fortune 500 IT budgets.
                  </p>
                </div>
              </motion.div>

              {/* Right: timeline */}
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-white/5" />
                <div className="space-y-10">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={item.year}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="relative pl-14"
                    >
                      <div className="absolute left-0 top-1 h-10 w-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-teal-500">{item.year}</span>
                      </div>
                      <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed font-normal">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section className="py-28 border-b border-white/5 bg-[#0d1117]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-teal-500 mb-4">What We Stand For</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                The principles we build by
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="group p-8 rounded-2xl border border-white/5 bg-[#111827]/30 hover:bg-[#111827]/60 hover:border-teal-500/20 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
                    <v.icon className="h-5 w-5 text-teal-500" />
                  </div>
                  <h3 className="font-semibold text-white mb-3 text-base">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-normal">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Founder ── */}
        <section className="py-28 border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-teal-500 mb-4">The Team</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                The person behind Msyntra
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-12 p-12 rounded-3xl border border-white/5 bg-[#111827]/30 max-w-2xl"
            >
              {/* Photo */}
              <div className="shrink-0">
                <div className="w-40 aspect-square rounded-2xl border border-white/10 overflow-hidden bg-[#111827]">
                  <img
                    src="/profile.jpg"
                    alt="Muhammad Shaheer"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div>
                <p className="text-xl font-bold text-white mb-1">Muhammad Shaheer</p>
                <p className="text-[11px] font-bold uppercase tracking-widest text-teal-500 mb-4">Chief Executive Officer</p>
                <p className="text-gray-400 text-sm leading-relaxed font-normal mb-6">
                  Shaheer founded Msyntra with a clear conviction: the gap between AI's potential and what most businesses actually use is a solvable problem. He leads product, client strategy, and system architecture — obsessing over solutions that are fast to ship and built to last.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal-500 hover:text-teal-400 transition-colors"
                >
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <CtaBlock />
      </main>
      <Footer />
    </>
  )
}