"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaBlock() {
  return (
    <section className="py-28 bg-[#0B0F19]">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-gradient-to-br from-teal-500/10 to-[#111827] p-12 md:p-20 text-center border border-teal-500/10 shadow-2xl overflow-hidden relative"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white leading-[1.1]">
              Ready to <span className="text-teal-500">Automate</span>?
            </h2>
            <p className="text-lg font-normal text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Join the enterprises scaling their operations with our high-performance AI agents.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-teal-500 px-8 text-sm font-semibold text-white shadow-xl shadow-teal-500/20 transition-all hover:bg-teal-400 active:scale-95"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 text-sm font-semibold transition-all hover:bg-white/10 text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
