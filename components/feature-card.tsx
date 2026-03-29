"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ReactNode, useRef } from "react"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
  image?: string
  delay?: number
}

export function FeatureCard({ title, description, icon, image, delay = 0 }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 500, damping: 50 })
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 })

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    x.set(px - 0.5)
    y.set(py - 0.5)
    cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
      style={{ 
        perspective: "1000px",
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d"
      }}
      className="group spotlight-card bg-[#111827]/40 border border-white/5 rounded-[2rem] p-10 shadow-xl transition-all duration-500 hover:border-teal-500/30 overflow-hidden"
    >
      {image && (
        <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-25 transition-opacity duration-1000">
          <img src={image} alt={title} className="h-full w-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent" />
        </div>
      )}

      <div className="relative z-10">
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500/10 text-teal-500 ring-1 ring-teal-500/20 transition-all duration-700 group-hover:bg-teal-500 group-hover:text-white"
        >
          {icon}
        </div>
        
        <div style={{ transform: "translateZ(30px)" }}>
          <h3 className="mb-4 text-[22px] font-semibold tracking-tight text-white">{title}</h3>
          <p className="text-base leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-500 font-normal">{description}</p>
        </div>
      </div>

      <div className="absolute bottom-6 right-10 h-1 w-0 bg-teal-500 transition-all duration-700 group-hover:w-16 rounded-full" />
    </motion.div>
  )
}
