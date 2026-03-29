"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CtaBlock } from "@/components/cta-block"
import { CheckCircle2, Zap, Bot, Workflow, Cpu, X, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] },
  }),
}

const stats = [
  { value: "500+", label: "Hours saved per client monthly" },
  { value: "90%", label: "Reduction in response latency" },
  { value: "70%", label: "Support cost reduction" },
  { value: "3x", label: "Average lead conversion lift" },
]

const services = [
  {
    id: "lead-automation",
    title: "AI Lead Automation",
    icon: Zap,
    badge: "Most Popular",
    problem: "Your sales team is spending more time chasing cold leads than closing deals.",
    solution: "We deploy AI agents that engage prospects the moment they show interest, qualify them based on your criteria, and book meetings directly into your calendar — without a human lifting a finger.",
    benefits: [
      "Instant response, 24/7 — no lead goes cold",
      "Consistent qualification using your exact criteria",
      "Meetings booked automatically into your calendar",
      "Plugs into your existing CRM in days, not months",
    ],
    image: "/images/services/service_lead_orchestration_1774729665168.png",
  },
  {
    id: "chatbots",
    title: "Custom AI Chatbots",
    icon: Bot,
    badge: null,
    problem: "Your customers are getting generic, unhelpful answers from off-the-shelf bots — and leaving.",
    solution: "We build AI chatbots trained on your actual business data: your docs, your FAQs, your tone. The result is a support assistant that knows your business as well as your best employee does.",
    benefits: [
      "Answers grounded in your real data, not guesswork",
      "Natural, human-like conversations that don't frustrate",
      "Handles up to 70% of support volume automatically",
      "Supports multiple languages out of the box",
    ],
    image: "/images/services/service_knowledge_engine_1774729827285.png",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    icon: Workflow,
    badge: null,
    problem: "Your team manually moves data between tools all day — and every handoff is a chance for error.",
    solution: "We map your most time-consuming processes and automate them end-to-end using AI and integration tools. Data flows automatically. Your team focuses on work that actually requires a human.",
    benefits: [
      "Eliminates manual data entry and human error",
      "Saves hundreds of hours of repetitive work monthly",
      "Real-time sync across all your business tools",
      "Scales with your business without adding headcount",
    ],
    image: "/images/services/service_neural_workflows_1774729892322.png",
  },
  {
    id: "custom-ai",
    title: "Custom AI Systems",
    icon: Cpu,
    badge: null,
    problem: "Generic AI tools were built for everyone — which means they're perfect for no one, especially not you.",
    solution: "We design and build AI systems from scratch around your specific business logic, industry constraints, and data. You get full ownership, full privacy, and a solution your competitors can't buy off a shelf.",
    benefits: [
      "Built around your exact business logic and data",
      "Private deployment — your data never leaves your control",
      "Full IP ownership of everything we build",
      "Ongoing support and iteration as your needs evolve",
    ],
    image: "/images/services/service_forecasting_1774729996584.png",
  },
]

const offShelfComparisons = [
  {
    offShelf: "Trained on generic internet data",
    msyntra: "Trained on your specific business data",
  },
  {
    offShelf: "One-size-fits-all logic",
    msyntra: "Built around your exact workflows",
  },
  {
    offShelf: "Your data sent to third-party servers",
    msyntra: "Private deployment — you control your data",
  },
  {
    offShelf: "You adapt to the tool",
    msyntra: "The tool adapts to you",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#0B0F19]">

        {/* ── Hero ── */}
        <section className="pt-40 pb-24 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-teal-500">What We Build</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-5xl md:text-[64px] font-bold mb-8 tracking-tight leading-[1.05] text-white max-w-3xl"
            >
              AI that works for <br />
              <span className="text-teal-500">your business.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-lg md:text-xl text-gray-400 max-w-2xl font-normal leading-relaxed"
            >
              We don't sell subscriptions to generic tools. We build custom AI systems around your workflows, your data, and your goals — then deploy them so your team can hit the ground running.
            </motion.p>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="border-b border-white/5 bg-[#0d1117]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i * 0.5}
                  className="py-10 px-6 text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-teal-500 mb-2">{stat.value}</p>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider leading-relaxed">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-28">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="space-y-32">
              {services.map((service, index) => (
                <div key={service.id}>
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={`flex flex-col lg:items-center gap-12 lg:gap-20 ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                      }`}
                  >
                    {/* Text side */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-500 border border-teal-500/20">
                          <service.icon className="h-6 w-6" />
                        </div>
                        {service.badge && (
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-500/10 text-teal-400 border border-teal-500/20">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight leading-[1.2] text-white">
                        {service.title}
                      </h2>

                      <div className="mb-6 p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">The Problem</p>
                        <p className="text-base text-white font-normal leading-relaxed">{service.problem}</p>
                      </div>

                      <div className="mb-8">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-500 mb-3">How We Solve It</p>
                        <p className="text-base text-gray-400 font-normal leading-relaxed">{service.solution}</p>
                      </div>

                      <ul className="grid grid-cols-1 gap-3">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3 text-sm font-normal text-gray-400">
                            <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image side */}
                    <div className="flex-1">
                      <div className="aspect-square rounded-[2.5rem] bg-[#111827]/30 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 h-full w-full object-cover opacity-15 group-hover:opacity-35 transition-opacity duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/50 to-transparent" />
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />
                        <div className="relative z-10 p-12 text-center">
                          <service.icon className="h-20 w-20 text-teal-500/40 group-hover:text-teal-500/60 transition-all group-hover:scale-110 duration-1000 mb-4 mx-auto" />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Mini CTA between services (not after last one) */}
                  {index < services.length - 1 && (
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="mt-16 flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-[#111827]/20"
                    >
                      <p className="text-sm text-gray-400 font-normal">
                        Interested in <span className="text-white font-medium">{service.title}</span>? Let's talk about your setup.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold hover:bg-teal-500 hover:text-white transition-all duration-200 shrink-0 ml-6"
                      >
                        Get Started <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Not Off-the-Shelf ── */}
        <section className="py-28 border-t border-white/5 bg-[#0d1117]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

              {/* Left: copy */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <p className="text-[11px] font-bold uppercase tracking-widest text-teal-500 mb-4">The Honest Truth</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15] mb-6">
                  Why not just use <br />
                  <span className="text-teal-500">ChatGPT or Zapier?</span>
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  Off-the-shelf tools are great for individuals. But when your business has specific data, specific workflows, and specific compliance requirements — generic tools create more problems than they solve. Here's the difference:
                </p>
              </motion.div>

              {/* Right: comparison table */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={1}
                className="rounded-2xl border border-white/5 overflow-hidden"
              >
                {/* Table header */}
                <div className="grid grid-cols-2 bg-[#111827]/60">
                  <div className="px-6 py-4 border-r border-white/5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Off-the-Shelf Tools</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-teal-500">Msyntra Custom AI</p>
                  </div>
                </div>

                {/* Rows */}
                {offShelfComparisons.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-2 border-t border-white/5"
                  >
                    <div className="px-6 py-5 border-r border-white/5 flex items-start gap-3">
                      <X className="h-4 w-4 text-red-500/60 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-500 leading-relaxed">{row.offShelf}</p>
                    </div>
                    <div className="px-6 py-5 flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-300 leading-relaxed">{row.msyntra}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        <CtaBlock />
      </main>
      <Footer />
    </>
  )
}