import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import yxelogo from '../assets/yxelogo.png'

const navLinks = [
  { label: 'Home',           href: '#home' },
  { label: 'Our Team',       href: '#team' },
  { label: 'Services',       href: '#services' },
  { label: 'Locations',      href: '#locations' },
  { label: 'New Patients',   href: '#new-patients' },
  { label: 'Dental Plan',    href: '#cdcp' },
  { label: 'Join Our Team',  href: '#careers' },
  { label: 'Contact',        href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [locOpen, setLocOpen]   = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-red text-white text-center text-xs font-body font-bold py-2 px-4 tracking-wide">
        ★ Canadian Dental Care Plan (CDCP) Accepted at Both Locations — Evening & Weekend Appointments Available ★
      </div>

      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`sticky top-0 z-50 w-full transition-all duration-400 ${
          scrolled
            ? 'bg-white/97 backdrop-blur-md shadow-md shadow-teal/10 border-b border-teal3/60'
            : 'bg-white border-b border-teal3/40'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-3.5">

          {/* Logo */}
<a href="#home" className="flex items-center gap-3 group">
  <img src={yxelogo} alt="YXE Dental" className="h-12 w-auto" />
</a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Locations dropdown */}
            <div className="relative" onMouseEnter={() => setLocOpen(true)} onMouseLeave={() => setLocOpen(false)}>
              <button className="flex items-center gap-1 text-navy/65 hover:text-teal text-[0.78rem] font-display font-600 tracking-wide px-3 py-2 rounded-lg hover:bg-teal3/30 transition-all duration-200">
                Locations & Hours
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${locOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <AnimatePresence>
                {locOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-1 bg-white border border-teal3/60 rounded-xl shadow-xl shadow-teal/10 min-w-[200px] overflow-hidden"
                  >
                    <a href="#locations" className="flex items-center gap-3 px-5 py-3.5 hover:bg-teal3/30 text-navy font-display font-600 text-sm transition-colors group">
                      <span className="w-2 h-2 rounded-full bg-teal group-hover:scale-125 transition-transform" />
                      8th Street
                    </a>
                    <a href="#locations" className="flex items-center gap-3 px-5 py-3.5 hover:bg-teal3/30 text-navy font-display font-600 text-sm transition-colors group border-t border-teal3/30">
                      <span className="w-2 h-2 rounded-full bg-teal group-hover:scale-125 transition-transform" />
                      Aspen Ridge
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-navy/65 hover:text-teal text-[0.78rem] font-display font-600 tracking-wide px-3 py-2 rounded-lg hover:bg-teal3/30 transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Book CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://dental4.me/yxedentalaspenridge"
              target="_blank"
              rel="noreferrer"
              className="bg-teal hover:bg-teal2 text-white font-display font-700 text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal/30 hover:-translate-y-0.5"
            >
              Book Online
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(o => !o)}
            className="lg:hidden flex flex-col gap-[5px] p-1.5 rounded-lg hover:bg-teal3/40 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-5 h-0.5 bg-navy origin-center" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-0.5 bg-navy" />
            <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-5 h-0.5 bg-navy origin-center" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 bg-white flex flex-col pt-24 px-7 pb-10 overflow-y-auto"
          >
            <div className="flex flex-col gap-1 mt-4">
              {[{ label: 'Locations & Hours', href: '#locations' }, ...navLinks.slice(1)].map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-display font-700 text-navy text-xl py-3.5 border-b border-teal3/40 hover:text-teal transition-colors flex items-center justify-between"
                >
                  {link.label}
                  <svg className="w-4 h-4 text-teal/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </motion.a>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <a href="https://dental4.me/yxedental8th" target="_blank" rel="noreferrer" className="bg-teal text-white font-display font-700 text-center py-4 rounded-full text-base">
                Book at 8th Street
              </a>
              <a href="https://dental4.me/yxedentalaspenridge" target="_blank" rel="noreferrer" className="bg-navy text-white font-display font-700 text-center py-4 rounded-full text-base">
                Book at Aspen Ridge
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
