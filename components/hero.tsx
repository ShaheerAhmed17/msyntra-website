"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Zap, Bot, Cpu, ChevronRight } from "lucide-react"
import { useRef } from "react"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const titleWords = "THE FUTURE OF INTELLIGENT WORK".split(" ")

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden py-32">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 mesh-gradient opacity-40" />

      <div className="absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-flow" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Content Column */}
          <motion.div
            style={{ opacity }}
            className="lg:w-3/5 text-left max-w-[640px]"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400 text-[10px] font-bold uppercase tracking-wider mb-8"
            >
              <span className="flex h-1 w-1 rounded-full bg-teal-500 animate-pulse" />
              Revolutionizing Enterprise Workflows
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight mb-8 leading-[1.1] text-white">
              Automate your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
                enterprise with AI
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg text-gray-400 mb-10 leading-relaxed font-normal"
            >
              Architecting autonomous layers that scale your operations, minimize latency, and drive exponential growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-teal-500 px-8 text-sm font-semibold text-white transition-all hover:bg-teal-400 active:scale-95 shadow-xl shadow-teal-500/25"
              >
                Get Started
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 text-sm font-semibold transition-all hover:bg-white/10 text-white"
              >
                View Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual Column (Abstract Tech Core) */}
          <motion.div
            style={{ y: y1, opacity }}
            className="lg:w-2/5 relative hidden lg:block"
          >
            <div className="relative aspect-square w-full">
              {/* Spinning Orbital Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-teal-500/10 rounded-full scale-110 border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-teal-500/5 rounded-full scale-105"
              />

              {/* Central Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-[3rem] bg-teal-500/5 backdrop-blur-3xl border border-teal-500/20 shadow-2xl flex items-center justify-center group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-50" />
                  <Cpu className="h-32 w-32 text-teal-500/80 animate-pulse transition-transform group-hover:scale-110 duration-1000" />

                  {/* Floating Digital Bits */}
                  <div className="absolute top-6 left-6 font-mono text-[9px] text-teal-500/30 font-bold uppercase tracking-widest">Protocol-14</div>
                  <div className="absolute bottom-6 right-6 font-mono text-[9px] text-teal-500/30 font-bold uppercase tracking-widest">Auth: Secured</div>
                </div>
              </div>

              {/* Orbital Nodes */}
              <OrbitalNode icon={<Zap size={20} />} top="10%" left="80%" delay={0} />
              <OrbitalNode icon={<Bot size={20} />} top="80%" left="15%" delay={1} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Extreme Depth Lighting */}
      <div className="absolute -bottom-1/2 -left-1/4 w-[1000px] h-[1000px] bg-teal-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-0 -right-1/4 w-[800px] h-[800px] bg-orange-500/5 blur-[160px] rounded-full pointer-events-none" />
    </section>
  )
}

function OrbitalNode({ icon, top, left, delay }: { icon: React.ReactNode, top: string, left: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 + delay }}
      style={{ top, left }}
      className="absolute h-12 w-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-2xl flex items-center justify-center text-teal-500/50 shadow-xl"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {icon}
      </motion.div>
    </motion.div>
  )
}
