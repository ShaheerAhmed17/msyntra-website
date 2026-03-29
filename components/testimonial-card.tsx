"use client"

import { motion } from "framer-motion"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  delay?: number
}

export function TestimonialCard({ quote, author, role, delay = 0 }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="rounded-3xl border border-white/5 bg-[#111827]/40 p-10 shadow-xl backdrop-blur-3xl"
    >
      <p className="text-lg text-gray-300 mb-10 leading-relaxed font-normal font-sans">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-5">
        <div className="h-10 w-10 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-semibold text-base">
          {author[0]}
        </div>
        <div>
          <p className="font-semibold text-white tracking-tight text-base leading-tight">{author}</p>
          <p className="text-[13px] font-medium text-teal-500/80">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}
