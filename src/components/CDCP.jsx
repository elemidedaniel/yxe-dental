import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CDCP() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="cdcp" className="bg-red py-16 px-5 md:px-10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
            >
              🇨🇦 Government Program
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
              className="font-display font-800 text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Canadian Dental Care Plan (CDCP) Accepted
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
              className="text-white/80 font-body leading-relaxed mb-6"
            >
              YXE Dental proudly participates in the Canadian Dental Care Plan — a federal program that provides dental coverage for eligible Canadians. If you qualify, we can help you understand and use your benefits at both our locations.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <a href="#contact"
                className="bg-white text-red font-display font-700 text-sm px-7 py-3.5 rounded-full hover:bg-red/90 hover:text-white transition-all duration-300 shadow-lg"
              >
                Ask Us About CDCP
              </a>
              <a href="https://dental4.me/yxedentalaspenridge" target="_blank" rel="noreferrer"
                className="border-2 border-white text-white font-display font-700 text-sm px-7 py-3.5 rounded-full hover:bg-white hover:text-red transition-all duration-300"
              >
                Book Appointment
              </a>
            </motion.div>
          </div>

          {/* Right — eligibility checklist */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.25 }}
            className="bg-white/15 backdrop-blur-sm rounded-2xl p-7 border border-white/20"
          >
            <h3 className="font-display font-700 text-white text-lg mb-5">You May Be Eligible If You:</h3>
            <div className="space-y-3.5">
              {[
                'Are a Canadian resident',
                'Filed taxes in Canada',
                'Have a family income under $90,000',
                "Don't have private dental insurance",
                'Have a valid SIN number',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12l5 5L19 7"/>
                    </svg>
                  </div>
                  <span className="text-white font-body text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-white/20 text-white/70 font-body text-xs">
              Contact us to verify your eligibility — we'll walk you through the process at no extra charge.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
