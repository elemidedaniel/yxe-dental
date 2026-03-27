import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  { num: '01', icon: '📞', title: 'Call or Book Online', body: 'Contact us by phone or use our online booking system — available 24/7. Choose the location and time that works best for you.' },
  { num: '02', icon: '📋', title: 'Complete Your Forms', body: 'Fill out your new patient forms before your visit — we\'ll send them to you ahead of time so you\'re ready on arrival.' },
  { num: '03', icon: '🦷', title: 'Your First Visit', body: 'We\'ll take X-rays, complete a thorough exam, and talk through your dental health goals. No pressure, no rush.' },
  { num: '04', icon: '📅', title: 'Your Ongoing Care', body: 'We\'ll build a personalized treatment plan and schedule follow-ups that fit your life. Your smile is in great hands.' },
]

const insurances = ['Canadian Dental Care Plan (CDCP)', 'Saskatchewan Blue Cross', 'Sun Life', 'Great-West Life', 'Manulife', 'Green Shield', 'Desjardins', 'Chamber of Commerce', 'NIHB (First Nations)']

export default function NewPatients() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="new-patients" className="bg-cream py-24 px-5 md:px-10" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="text-teal font-body font-bold text-sm tracking-widest uppercase mb-3"
          >
            New Patients
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="font-display font-800 text-navy"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Welcome to the YXE Family
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-muted font-body text-base mt-4 max-w-xl mx-auto"
          >
            We make it easy to switch dentists or start fresh. Here's what to expect from your very first visit.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px border-t-2 border-dashed border-teal3 z-0" />
              )}
              <div className="relative z-10 bg-white border border-sand2 hover:border-teal/30 rounded-2xl p-6 hover:shadow-lg hover:shadow-teal/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{step.icon}</div>
                  <span className="font-display font-800 text-teal/30 text-3xl leading-none">{step.num}</span>
                </div>
                <h3 className="font-display font-700 text-navy text-base mb-2">{step.title}</h3>
                <p className="text-muted font-body text-sm leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Insurance */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
          className="bg-teal3/40 border border-teal3 rounded-3xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <h3 className="font-display font-800 text-navy text-2xl mb-1">Insurance & Payment</h3>
              <p className="text-muted font-body text-sm">We work with most major insurance providers and offer flexible payment options.</p>
            </div>
            <a href="#contact"
              className="shrink-0 bg-teal hover:bg-teal2 text-white font-display font-700 text-sm px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal/30"
            >
              Verify Your Benefits
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {insurances.map(ins => (
              <span key={ins} className="bg-white border border-teal3 text-navy font-body text-xs px-3 py-1.5 rounded-full">
                {ins}
              </span>
            ))}
          </div>
          <p className="text-muted font-body text-xs mt-4">Don't see your plan? We likely still accept it — just give us a call to confirm.</p>
        </motion.div>
      </div>
    </section>
  )
}
