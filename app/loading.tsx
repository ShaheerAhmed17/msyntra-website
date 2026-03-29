"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0F19]">
      <div className="relative">
        {/* Outer Ring */}
        <motion.div 
          className="h-16 w-16 rounded-full border-t-2 border-l-2 border-teal-500/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner Glowing Core */}
        <motion.div 
          className="absolute inset-0 h-16 w-16 rounded-full border-t-2 border-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.3)]"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Pulsing Center */}
        <motion.div 
          className="absolute inset-4 rounded-full bg-teal-500/10"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="absolute bottom-12 text-center">
        <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-teal-500/40 animate-pulse">Initializing System</p>
      </div>
    </div>
  )
}
