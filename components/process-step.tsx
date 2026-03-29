"use client"

import { motion } from "framer-motion"

interface ProcessStepProps {
  number: string
  title: string
  description: string
  delay?: number
}

export function ProcessStep({ number, title, description, delay = 0 }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex gap-10 items-start"
    >
      <div className="h-12 w-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center text-lg font-semibold shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-3 tracking-tight text-white">{title}</h3>
        <p className="text-base text-gray-400 leading-relaxed font-normal">{description}</p>
      </div>
    </motion.div>
  )
}
