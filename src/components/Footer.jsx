import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import yxelogo from '../assets/logo.png'

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <footer className="bg-navy3" ref={ref}>

      {/* Book banner */}
      <div className="bg-teal px-5 md:px-10 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-script text-white text-3xl mb-1">Putting your smile first!</p>
            <p className="text-white/70 font-body text-sm">Evening hours at both locations. New patients always welcome.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://dental4.me/yxedental8th" target="_blank" rel="noreferrer"
              className="bg-white text-teal font-display font-700 text-sm px-6 py-3 rounded-full hover:bg-teal3 transition-colors"
            >
              Book at 8th Street
            </a>
            <a href="https://dental4.me/yxedentalaspenridge" target="_blank" rel="noreferrer"
              className="bg-navy text-white font-display font-700 text-sm px-6 py-3 rounded-full hover:bg-navy2 transition-colors"
            >
              Book at Aspen Ridge
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="px-5 md:px-10 py-14">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
          >
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                  <img src={yxelogo} alt="YXE Dental" className="h-8 w-auto" />
                {/* Replace with: <img src="/logo.png" alt="YXE Dental" className="h-8 w-auto" /> */}



              </div>
              <p className="text-white/40 font-body text-sm leading-relaxed mb-5">
                Two convenient Saskatoon locations. Gentle, modern dental care for the whole family.
              </p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/YXEDental/" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/8 hover:bg-teal flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="https://www.instagram.com/yxedental/" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/8 hover:bg-teal flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
                </a>
              </div>
            </div>

            {/* 8th Street */}
            <div>
              <div className="font-display font-700 text-white text-sm mb-4 border-b border-white/10 pb-3">8th Street</div>
              <div className="space-y-2 text-white/45 font-body text-xs leading-relaxed">
                <p>#9 - 3110 8th St. E</p>
                <p>Saskatoon, SK S7H 0W2</p>
                <a href="tel:3069553838" className="block hover:text-teal2 transition-colors font-medium">(306) 955-3838</a>
                <a href="mailto:yxedental@gmail.com" className="block hover:text-teal2 transition-colors">yxedental@gmail.com</a>
                <a href="https://dental4.me/yxedental8th" target="_blank" rel="noreferrer" className="inline-block mt-2 bg-teal text-white px-4 py-1.5 rounded-full text-xs font-display font-700 hover:bg-teal2 transition-colors">Book Online</a>
              </div>
            </div>

            {/* Aspen Ridge */}
            <div>
              <div className="font-display font-700 text-white text-sm mb-4 border-b border-white/10 pb-3">Aspen Ridge</div>
              <div className="space-y-2 text-white/45 font-body text-xs leading-relaxed">
                <p>#125-1260 Baltzan Blvd</p>
                <p>Saskatoon, SK S7W 1E8</p>
                <a href="tel:3069866176" className="block hover:text-teal2 transition-colors font-medium">(306) 986-6176</a>
                <a href="mailto:yxedental.aspenridge@gmail.com" className="block hover:text-teal2 transition-colors">yxedental.aspenridge@gmail.com</a>
                <a href="https://dental4.me/yxedentalaspenridge" target="_blank" rel="noreferrer" className="inline-block mt-2 bg-teal text-white px-4 py-1.5 rounded-full text-xs font-display font-700 hover:bg-teal2 transition-colors">Book Online</a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <div className="font-display font-700 text-white text-sm mb-4 border-b border-white/10 pb-3">Quick Links</div>
              <div className="space-y-2">
                {['Home', 'Our Team', 'Services', 'Locations', 'New Patients', 'CDCP Program', 'Join Our Team', 'Contact'].map(l => (
                  <a key={l} href="#" className="block text-white/40 hover:text-teal2 text-xs font-body transition-colors">{l}</a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-white/25 font-body text-xs">© 2026 YXE Dental — Saskatoon, SK. All rights reserved.</span>
            <div className="flex gap-5">
              {['Privacy Policy', 'Accessibility'].map(l => (
                <a key={l} href="#" className="text-white/25 hover:text-white font-body text-xs transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
