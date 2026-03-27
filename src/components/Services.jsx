import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    name: 'Preventive',
    icon: '🛡️',
    color: 'bg-teal/10 text-teal border-teal/20',
    services: [
      { name: 'Dental Exams & X-Rays',    desc: 'Comprehensive check-ups to catch issues early and keep your mouth healthy.' },
      { name: 'Professional Cleanings',   desc: 'Remove plaque, tartar and stains for a fresh, healthy smile.' },
      { name: 'Fluoride Treatments',      desc: 'Strengthen enamel and help prevent cavities at any age.' },
      { name: 'Dental Sealants',          desc: 'Protective coatings that seal out decay in back teeth.' },
      { name: 'Oral Cancer Screening',    desc: 'Early detection for the best possible outcomes.' },
      { name: 'Sports Mouthguards',       desc: 'Custom-fitted protection for athletes of all levels.' },
    ],
  },
  {
    name: 'Restorative',
    icon: '🔧',
    color: 'bg-navy/8 text-navy border-navy/15',
    services: [
      { name: 'Tooth-Coloured Fillings',  desc: 'Natural-looking composite restorations that blend seamlessly.' },
      { name: 'Dental Crowns',            desc: 'Cap and protect damaged or weakened teeth.' },
      { name: 'Dental Bridges',           desc: 'Replace missing teeth and restore your bite and smile.' },
      { name: 'Dental Implants',          desc: 'Permanent, natural-feeling tooth replacements.' },
      { name: 'Dentures & Partials',      desc: 'Comfortable, functional solutions for tooth loss.' },
      { name: 'Root Canal Therapy',       desc: 'Save your natural tooth and relieve pain.' },
    ],
  },
  {
    name: 'Cosmetic',
    icon: '✨',
    color: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    services: [
      { name: 'Teeth Whitening',          desc: 'Professional whitening for dramatically brighter results.' },
      { name: 'Dental Veneers',           desc: 'Thin porcelain shells that transform your smile in two visits.' },
      { name: 'Dental Bonding',           desc: 'Quick, affordable repairs to chips, gaps, and discolouration.' },
      { name: 'Smile Makeovers',          desc: 'Comprehensive cosmetic treatment planning just for you.' },
    ],
  },
  {
    name: 'Emergency',
    icon: '🚨',
    color: 'bg-red/10 text-red border-red/20',
    services: [
      { name: 'Emergency Exams',          desc: 'Same or next-day appointments for sudden dental pain.' },
      { name: 'Toothaches',              desc: 'Diagnosis and fast relief for tooth pain.' },
      { name: 'Broken Teeth',            desc: 'Repair chipped or fractured teeth promptly.' },
      { name: 'Knocked-Out Teeth',       desc: 'Act fast — we can often re-implant within an hour.' },
    ],
  },
  {
    name: 'Family',
    icon: '👨‍👩‍👧',
    color: 'bg-green-50 text-green-700 border-green-200',
    services: [
      { name: 'Children\'s Dentistry',   desc: 'Gentle, fun dental care that builds healthy habits early.' },
      { name: 'Orthodontics',            desc: 'Clear aligners and braces for teens and adults.' },
      { name: 'Senior Care',             desc: 'Sensitive care tailored to the needs of older patients.' },
    ],
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="bg-cream py-24 px-5 md:px-10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="text-teal font-body font-bold text-sm tracking-widest uppercase mb-3"
          >
            What We Offer
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="font-display font-800 text-navy"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Comprehensive Dental Services
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-muted font-body text-base mt-4 max-w-xl mx-auto"
          >
            From your first check-up to a complete smile transformation — we have everything covered at both locations.
          </motion.p>
        </div>

        {/* Category tabs */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border font-display font-600 text-sm transition-all duration-250 ${
                active === i
                  ? 'bg-teal text-white border-teal shadow-lg shadow-teal/25'
                  : 'bg-white text-navy/60 border-sand2 hover:border-teal/40 hover:text-teal'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Services grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {categories[active].services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="group bg-white hover:bg-teal3/20 border border-sand2 hover:border-teal/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-teal/10 cursor-default"
            >
              <h3 className="font-display font-700 text-navy text-base mb-2 group-hover:text-teal transition-colors duration-300">{s.name}</h3>
              <p className="text-muted font-body text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Book CTA */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted font-body text-sm mb-4">Not sure what you need? We'll help you figure it out.</p>
          <a
            href="https://dental4.me/yxedentalaspenridge"
            target="_blank" rel="noreferrer"
            className="inline-block bg-navy hover:bg-teal text-white font-display font-700 text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal/30"
          >
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
