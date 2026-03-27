import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { icon: '🦷', value: '2', label: 'Saskatoon Locations' },
  { icon: '👨‍⚕️', value: '6+', label: 'Experienced Dentists' },
  { icon: '🌙', value: '5×', label: 'Days with Evenings' },
  { icon: '🌐', value: '5', label: 'Languages Spoken' },
  { icon: '💳', value: '✓', label: 'CDCP Accepted' },
  { icon: '⚡', value: 'Same', label: 'Day Appointments' },
]

export default function TrustBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section className="bg-navy py-12 px-5 md:px-10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="flex flex-col items-center text-center gap-1.5"
            >
              <div className="text-3xl">{s.icon}</div>
              <div className="font-display font-800 text-white text-2xl leading-none">{s.value}</div>
              <div className="text-teal3 font-body text-xs leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
