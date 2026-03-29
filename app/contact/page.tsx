'use client'

import { useEffect, useState } from "react"
import Script from "next/script"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, ArrowRight, Clock, Zap, BarChart3, Code2 } from "lucide-react"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] },
  }),
}

const reasons = [
  {
    icon: Zap,
    title: "Live Demo",
    desc: "See our lead automation system working in real time, tailored to your industry.",
  },
  {
    icon: BarChart3,
    title: "Free ROI Estimate",
    desc: "Walk away with a concrete projection of returns specific to your use case.",
  },
  {
    icon: Code2,
    title: "Technical Deep-Dive",
    desc: "Discuss integration with your existing stack — APIs, CRMs, workflows.",
  },
  {
    icon: Clock,
    title: "Only 30 Minutes",
    desc: "Focused, no fluff. Respect for your time is built into how we operate.",
  },
]

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"calendly" | "form">("calendly")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || activeTab !== "calendly") return

    const init = () => {
      if ((window as any).Calendly) {
        (window as any).Calendly.initInlineWidget({
          url: 'https://calendly.com/msyntra-systems/30min?background_color=0b0f19&text_color=ffffff&primary_color=14b8a6',
          parentElement: document.querySelector('.calendly-inline-widget'),
          prefill: {},
          utm: {}
        })
      } else {
        setTimeout(init, 200)
      }
    }

    const timer = setTimeout(init, 300)
    return () => clearTimeout(timer)
  }, [mounted, activeTab])

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <Navbar />
      <main className="bg-[#0B0F19] min-h-screen">

        {/* ── Hero ── */}
        <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-teal-500/[0.04] rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-400/[0.03] rounded-full blur-[100px]" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-teal-500">We respond within 24 hours</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-white mb-6 max-w-4xl"
            >
              Let's build something
              <br />
              <span className="text-teal-500">remarkable</span> together.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-lg text-gray-400 max-w-xl leading-relaxed font-normal"
            >
              Whether you're ready to automate or just exploring — we'll meet you where you are.
            </motion.p>
          </div>
        </section>

        {/* ── Contact channels strip ── */}
        <section className="border-b border-white/5 bg-[#0d1117]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
              <a
                href="mailto:msyntra.systems@outlook.com"
                className="group flex items-center gap-5 py-7 px-2 transition-colors hover:bg-white/[0.02]"
              >
                <div className="h-11 w-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 transition-colors">
                  <Mail className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">Email</p>
                  <p className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">msyntra.systems@outlook.com</p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-600 group-hover:text-teal-500 ml-auto transition-all group-hover:translate-x-1" />
              </a>

              <a
                href="tel:+923111283440"
                className="group flex items-center gap-5 py-7 px-2 sm:px-8 transition-colors hover:bg-white/[0.02]"
              >
                <div className="h-11 w-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 transition-colors">
                  <Phone className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">Phone</p>
                  <p className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">+92 311 1283440</p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-600 group-hover:text-teal-500 ml-auto transition-all group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* ── Why book a call ── */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-14"
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-teal-500 mb-4">Before you book</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Why a call beats a cold email</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i * 0.5}
                  className="group p-6 rounded-2xl border border-white/5 bg-[#111827]/30 hover:bg-[#111827]/60 hover:border-teal-500/20 transition-all duration-300"
                >
                  <div className="h-10 w-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                    <r.icon className="h-5 w-5 text-teal-500" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm">{r.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-normal">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tabbed: Book a Call / Send a Message ── */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

            {/* Tab switcher */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-[#111827]/60 border border-white/5 w-fit mb-14">
              {[
                { key: "calendly", label: "Book a Call" },
                { key: "form", label: "Send a Message" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as "calendly" | "form")}
                  className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === tab.key
                      ? "bg-teal-500 text-white shadow-lg shadow-teal-500/20"
                      : "text-gray-400 hover:text-white"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Calendly panel */}
            {activeTab === "calendly" && (
              <motion.div
                key="calendly"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">Schedule a Free 30-min Strategy Call</h2>
                  <p className="text-gray-400 font-normal">Pick a time that works for you — no commitment required.</p>
                </div>
                {mounted && (
                  <div
                    className="calendly-inline-widget w-full rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
                    data-url="https://calendly.com/msyntra-systems/30min?background_color=0b0f19&text_color=ffffff&primary_color=14b8a6"
                    style={{ minWidth: "320px", height: "700px" }}
                  />
                )}
              </motion.div>
            )}

            {/* Contact form panel */}
            {activeTab === "form" && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="max-w-2xl"
              >
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">Send Us a Message</h2>
                  <p className="text-gray-400 font-normal">We'll get back to you within 24 hours.</p>
                </div>
                <ContactForm />
              </motion.div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}