import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0B0F19] py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block group mb-8">
              <span className="font-bold text-2xl tracking-tight group-hover:text-teal-500 transition-colors uppercase">Msyntra</span>
            </Link>
            <p className="max-w-xs text-base text-gray-400 leading-relaxed font-normal mb-10">
              High-performance AI automation systems for the modern enterprise.
            </p>
            <div className="space-y-4 text-sm font-medium tracking-tight text-teal-500/80">
              <p>Email: <a href="mailto:msyntra.systems@outlook.com" className="hover:text-teal-400 transition-colors">msyntra.systems@outlook.com</a></p>
              <p>Phone: <a href="tel:+923111283440" className="hover:text-teal-400 transition-colors">+92 311 1283440</a></p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white">Company</h3>
            <ul className="mt-6 flex flex-col space-y-3">
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white">Legal</h3>
            <ul className="mt-6 flex flex-col space-y-3">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-24 border-t border-white/5 pt-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Msyntra. Global AI Infrastructure.
          </p>
        </div>
      </div>
    </footer>
  )
}
