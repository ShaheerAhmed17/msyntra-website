"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function InteractiveLighting() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      mouseX.set(clientX)
      mouseY.set(clientY)
    }

    const handleResize = () => {
      // Re-center or handle layout changes if needed
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [mouseX, mouseY])

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Primary Follower Glow */}
      <motion.div
        className="absolute h-[600px] w-[600px] rounded-full bg-teal-500/5 blur-[80px] will-change-transform"
        style={{
          x: x,
          y: y,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "screen",
        }}
      />
      
      {/* Secondary Distant Glow */}
      <motion.div
        className="absolute h-[400px] w-[400px] rounded-full bg-teal-400/[0.03] blur-[60px] will-change-transform"
        style={{
          x: x,
          y: y,
          translateX: "-30%",
          translateY: "-30%",
          mixBlendMode: "plus-lighter",
        }}
      />

      {/* Subtle Scanline Overlay - Static for performance */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px]" />
    </div>
  )
}
