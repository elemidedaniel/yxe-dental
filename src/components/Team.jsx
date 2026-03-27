import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const team = [
  {
    name: 'Dr. Donald Hui',
    location: '8th Street',
    languages: 'English · Mandarin · Cantonese',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80&auto=format&fit=crop&face',
    color: 'bg-teal',
  },
  {
    name: 'Dr. Tijana Lazova',
    location: '8th Street & Aspen Ridge',
    languages: 'English',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop',
    color: 'bg-navy',
  },
  {
    name: 'Dr. Shaelyn Standish',
    location: '8th Street',
    languages: 'English',
    img: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80&auto=format&fit=crop',
    color: 'bg-teal2',
  },
  {
    name: 'Dr. Amanda Beaudry',
    location: 'Aspen Ridge',
    languages: 'English',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80&auto=format&fit=crop',
    color: 'bg-teal',
  },
  {
    name: 'Dr. Coca Blue',
    location: 'Aspen Ridge',
    languages: 'English · Vietnamese · Korean',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&auto=format&fit=crop',
    color: 'bg-navy',
  },
]

export default function Team() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="team" className="bg-sand py-24 px-5 md:px-10" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="text-teal font-body font-bold text-sm tracking-widest uppercase mb-3"
            >
              Our Dentists
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
              className="font-display font-800 text-navy leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              A Team That Truly{' '}
              <span className="font-script text-teal" style={{ fontSize: '1.2em' }}>Cares</span>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-muted font-body leading-relaxed"
          >
            Our dentists and support team bring warmth, skill, and genuine care to every appointment. We speak <strong className="text-navy">5 languages</strong> — English, Mandarin, Cantonese, Vietnamese, and Korean — so every patient feels at home.
          </motion.p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {team.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.6 }}
              className="group bg-white rounded-2xl overflow-hidden border border-sand2 hover:border-teal/30 hover:shadow-xl hover:shadow-teal/10 transition-all duration-400"
            >
              {/* Photo */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Location badge */}
                <div className={`absolute top-3 right-3 ${doc.color} text-white text-[0.6rem] font-display font-700 tracking-wide px-2.5 py-1 rounded-full`}>
                  {doc.location.includes('&') ? 'Both' : doc.location.split(' ')[0]}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display font-700 text-navy text-base leading-snug mb-1">{doc.name}</h3>
                <p className="text-teal font-body text-xs font-bold mb-2">{doc.location}</p>
                <div className="flex items-start gap-1.5">
                  <span className="text-xs mt-0.5">🌐</span>
                  <p className="text-muted font-body text-xs leading-relaxed">{doc.languages}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team photo note */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
          className="mt-10 bg-teal3/40 border border-teal3 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5"
        >
          <div className="text-4xl">👥</div>
          <div>
            <div className="font-display font-700 text-navy text-lg mb-1">Meet the Whole Team</div>
            <p className="text-muted font-body text-sm leading-relaxed">
              Beyond our dentists, our entire support team — hygienists, assistants, and admin — is dedicated to making every visit smooth, comfortable, and worth smiling about.
            </p>
          </div>
          <a href="#contact" className="shrink-0 bg-teal hover:bg-teal2 text-white font-display font-700 text-sm px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal/30">
            Say Hello →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
