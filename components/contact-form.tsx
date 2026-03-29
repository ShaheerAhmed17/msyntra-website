"use client"

import { useState } from "react"
import { Send, Loader2 } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorStatus, setErrorStatus] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorStatus(null)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
      
      setSubmitted(true)
    } catch (err: any) {
      console.error('Form error:', err);
      setErrorStatus(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  }

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-white/5 bg-[#111827]/40 p-10 text-center backdrop-blur-3xl">
        <div className="h-14 w-14 rounded-2xl bg-teal-500/10 text-teal-500 flex items-center justify-center mx-auto mb-8 border border-teal-500/20 shadow-xl">
          <Send className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-semibold mb-3 tracking-tight text-white">Message Sent successfully</h3>
        <p className="text-base text-gray-400 font-normal leading-relaxed">Thank you for reaching out. Our team will contact you within 24 hours.</p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
          }}
          className="mt-8 text-xs font-bold uppercase tracking-widest text-teal-500 hover:text-teal-400 transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errorStatus && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm mb-4">
          {errorStatus}
        </div>
      )}
      
      <div className="space-y-2">
        <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1 block">Full Name</label>
        <input
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full h-12 rounded-xl border border-white/5 bg-[#111827]/60 px-5 text-base text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-500/50 transition-all shadow-lg"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1 block">Work Email</label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="john@company.com"
          className="w-full h-12 rounded-xl border border-white/5 bg-[#111827]/60 px-5 text-base text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-500/50 transition-all shadow-lg"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1 block">How can we help?</label>
        <textarea
          id="message"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="I'm interested in AI Lead Automation..."
          className="min-h-[140px] w-full rounded-xl border border-white/5 bg-[#111827]/60 px-5 py-3 text-base text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-500/50 transition-all shadow-lg"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex h-12 items-center justify-center rounded-xl bg-teal-500 px-8 text-sm font-semibold text-white shadow-xl shadow-teal-500/20 transition-all hover:bg-teal-400 active:scale-95 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : "Send Message"}
      </button>
    </form>
  )
}
