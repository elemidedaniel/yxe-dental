import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const perks = [
  { icon: '🌱', title: 'Growth Opportunities',    body: 'Continuing education support and clear pathways to advance your career.' },
  { icon: '🤝', title: 'Collaborative Culture',   body: 'Work alongside a warm, supportive team that genuinely enjoys coming to work.' },
  { icon: '⚖️', title: 'Work-Life Balance',       body: 'Predictable schedules and flexibility — we respect your time outside the clinic.' },
  { icon: '🏙️', title: 'Two Great Locations',     body: 'Modern, well-equipped clinics in convenient Saskatoon neighbourhoods.' },
  { icon: '🌍', title: 'Diverse Community',        body: 'Serve patients from all backgrounds — multilingual team & inclusive environment.' },
  { icon: '💰', title: 'Competitive Compensation', body: 'Fair wages, benefits, and recognition for your skills and dedication.' },
]

export default function Careers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="careers" className="bg-navy py-24 px-5 md:px-10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — copy */}
          <div>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="text-teal2 font-body font-bold text-sm tracking-widest uppercase mb-4"
            >
              We're Hiring
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
              className="font-display font-800 text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}
            >
              Join Our{' '}
              <span className="font-script text-teal2" style={{ fontSize: '1.15em' }}>Growing Team</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
              className="text-white/60 font-body leading-relaxed mb-7"
            >
              We're always looking for passionate, skilled dental professionals who share our commitment to exceptional patient care. If you love what you do and want to work somewhere that values you, we'd love to hear from you.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
              className="space-y-3 mb-8"
            >
              <div className="text-teal3 font-display font-600 text-sm">Current Openings at Both Locations:</div>
              {['Dental Hygienist', 'Dental Assistant', 'Receptionist / Patient Coordinator', 'Associate Dentist'].map(role => (
                <div key={role} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                  <span className="text-white font-body text-sm">{role}</span>
                </div>
              ))}
            </motion.div>
            <motion.a initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
              href="mailto:yxedental@gmail.com?subject=Job Application — YXE Dental"
              className="inline-block bg-teal hover:bg-teal2 text-white font-display font-700 text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-teal/30"
            >
              Send Your Résumé →
            </motion.a>
          </div>

          {/* Right — perks grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="bg-navy2 border border-white/8 hover:border-teal/30 rounded-xl p-5 transition-all duration-300 hover:bg-navy3"
              >
                <div className="text-2xl mb-3">{p.icon}</div>
                <h4 className="font-display font-700 text-white text-sm mb-1.5">{p.title}</h4>
                <p className="text-white/45 font-body text-xs leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
