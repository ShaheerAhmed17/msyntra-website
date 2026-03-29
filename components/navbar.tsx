"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="pointer-events-auto flex items-center h-12 max-w-2xl w-full border border-white/5 bg-black/60 backdrop-blur-2xl rounded-2xl px-6 shadow-xl"
      >
        <Link href="/" className="flex items-center space-x-2 mr-6 shrink-0 group">
          <span className="font-bold text-xl tracking-tight uppercase group-hover:text-teal-500 transition-colors">Msyntra</span>
        </Link>
        
        <nav className="flex flex-1 items-center justify-center gap-1">
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/contact">Support</NavLink>
        </nav>
 
        <div className="flex items-center gap-3 ml-4 shrink-0">
          <Link
            href="/contact"
            className="hidden sm:inline-flex h-8 items-center justify-center rounded-lg bg-teal-500 px-4 text-[11px] font-bold uppercase tracking-wider text-white transition-all hover:bg-teal-400 active:scale-95 shadow-lg shadow-teal-500/20"
          >
            Get Started
          </Link>
        </div>
      </motion.header>
    </div>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-1 rounded-full text-xs font-medium text-gray-400 hover:text-white transition-all"
    >
      {children}
    </Link>
  )
}
