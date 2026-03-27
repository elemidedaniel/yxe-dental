import { motion } from 'framer-motion'
import team from '../assets/team.jpg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream min-h-screen flex items-center">

      {/* Background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal3/40 rounded-l-[80px] -z-0 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-teal/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-teal3/60 blur-[60px] pointer-events-none" />

      {/* Floating decorative circles */}
      <div className="absolute top-32 right-[45%] w-4 h-4 rounded-full bg-teal/30 animate-float pointer-events-none" />
      <div className="absolute top-64 right-[38%] w-2.5 h-2.5 rounded-full bg-teal/20 animate-float pointer-events-none" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-36 right-[42%] w-3 h-3 rounded-full bg-navy/15 animate-float pointer-events-none" style={{ animationDelay: '0.8s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div>
            {/* CDCP badge */}
            <motion.div {...fadeUp(0)}
              className="inline-flex items-center gap-2 bg-red/10 border border-red/25 text-red text-xs font-body font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red" />
              Canadian Dental Care Plan Accepted
            </motion.div>

            {/* Script headline */}
            <motion.p {...fadeUp(0.08)}
              className="font-script text-teal text-4xl md:text-5xl mb-2"
            >
              Your Dentists in Saskatoon
            </motion.p>

            {/* Main headline */}
            <motion.h1 {...fadeUp(0.14)}
              className="font-display font-800 text-navy leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)' }}
            >
              Putting Your{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-teal">Smile First</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-teal3 -z-0 rounded" />
              </span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)}
              className="text-muted font-body text-lg leading-relaxed mb-8 max-w-lg"
            >
              Two convenient Saskatoon locations 8th Street & Aspen Ridge. Gentle, modern care for the whole family. Evening & weekend appointments available.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.26)} className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://dental4.me/yxedentalaspenridge"
                target="_blank" rel="noreferrer"
                className="bg-teal hover:bg-teal2 text-white font-display font-700 text-base px-8 py-4 rounded-full shadow-lg shadow-teal/25 hover:shadow-xl hover:shadow-teal/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Appointment Online
              </a>
              <a
                href="#locations"
                className="border-2 border-navy/20 hover:border-teal text-navy hover:text-teal font-display font-600 text-base px-8 py-4 rounded-full transition-all duration-300"
              >
                Our Locations
              </a>
            </motion.div>

            {/* Quick contact pills */}
            <motion.div {...fadeUp(0.32)} className="flex flex-wrap gap-3">
              <a href="tel:3069553838" className="flex items-center gap-2.5 bg-white border border-teal3 hover:border-teal rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md transition-all duration-200 group">
                <div className="w-7 h-7 rounded-lg bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                  <PhoneIcon className="w-3.5 h-3.5 text-teal" />
                </div>
                <div>
                  <div className="text-[0.6rem] text-muted font-body uppercase tracking-wider">8th Street</div>
                  <div className="font-display font-600 text-navy text-sm">(306) 955-3838</div>
                </div>
              </a>
              <a href="tel:3069866176" className="flex items-center gap-2.5 bg-white border border-teal3 hover:border-teal rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md transition-all duration-200 group">
                <div className="w-7 h-7 rounded-lg bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                  <PhoneIcon className="w-3.5 h-3.5 text-teal" />
                </div>
                <div>
                  <div className="text-[0.6rem] text-muted font-body uppercase tracking-wider">Aspen Ridge</div>
                  <div className="font-display font-600 text-navy text-sm">(306) 986-6176</div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right — hero image + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal/20">
              <img
                src={team}
                alt="Happy dental patient"
                className="w-full h-[480px] lg:h-[540px] object-cover"
              />
              {/* Replace with: <img src="/team-photo.jpg" alt="YXE Dental Team" ... /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal/20 to-transparent" />
            </div>

            {/* Floating stat card — top left */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-5 top-10 bg-white rounded-2xl shadow-xl shadow-navy/12 p-4 min-w-[140px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal3 flex items-center justify-center text-xl">😊</div>
                <div>
                  <div className="font-display font-800 text-navy text-xl leading-none">2+</div>
                  <div className="text-muted font-body text-xs mt-0.5">Locations</div>
                </div>
              </div>
            </motion.div>

            {/* Floating evenings card — bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="absolute -right-4 bottom-16 bg-white rounded-2xl shadow-xl shadow-navy/12 p-4 min-w-[170px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal/15 flex items-center justify-center text-xl">🌙</div>
                <div>
                  <div className="font-display font-700 text-navy text-sm leading-snug">Evening Hours</div>
                  <div className="text-teal font-body text-xs mt-0.5">Open until 8PM</div>
                </div>
              </div>
            </motion.div>

            {/* Languages badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute -left-4 bottom-10 bg-teal text-white rounded-2xl shadow-lg px-4 py-3"
            >
              <div className="font-display font-700 text-sm">5 Languages</div>
              <div className="text-teal3 text-xs font-body mt-0.5">EN · 普通話 · 廣東話 · Vietnamese · 한국어</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
  )
}
