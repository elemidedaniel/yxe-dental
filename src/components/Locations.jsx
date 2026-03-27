import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const locations = [
  {
    id: 'eighth',
    name: '8th Street Location',
    short: '8th Street',
    badge: 'Mandarin & Cantonese',
    team: 'Dr. Donald Hui · Dr. Tijana Lazova · Dr. Shaelyn Standish',
    phone: '(306) 955-3838',
    tel: '3069553838',
    fax: '(306) 955-3833',
    email: 'yxedental@gmail.com',
    address: '#9 - 3110 8th St. E\nSaskatoon, SK S7H 0W2',
    bookLink: 'https://dental4.me/yxedental8th',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.0893151061427!2d-106.6108726842076!3d52.114503679739414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f15af04b1c45%3A0x214f2214038db22c!2s3110+8+St+E+%239%2C+Saskatoon%2C+SK+S7H+0W2!5e0!3m2!1sen!2sca!4v1560706994567!5m2!1sen!2sca',
    hours: [
      ['Monday',    '8:00 AM – 4:30 PM'],
      ['Tuesday',   '12:00 PM – 7:00 PM'],
      ['Wednesday', '8:00 AM – 4:30 PM'],
      ['Thursday',  '1:00 PM – 8:00 PM'],
      ['Friday',    '8:00 AM – 4:30 PM'],
      ['Saturday',  'Closed'],
      ['Sunday',    'Closed'],
    ],
    eveningDays: ['Tuesday', 'Thursday'],
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&q=80&auto=format&fit=crop',
    color: 'teal',
  },
  {
    id: 'aspen',
    name: 'Aspen Ridge Location',
    short: 'Aspen Ridge',
    badge: 'Vietnamese & Korean',
    team: 'Dr. Amanda Beaudry · Dr. Coca Blue · Dr. Tijana Lazova',
    phone: '(306) 986-6176',
    tel: '3069866176',
    fax: '(306) 986-6177',
    email: 'yxedental.aspenridge@gmail.com',
    address: '#125-1260 Baltzan Blvd\nSaskatoon, SK S7W 1E8',
    bookLink: 'https://dental4.me/yxedentalaspenridge',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.986325828448!2d-106.5591104840418!3d52.170942069790804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f4fbc9232a11%3A0x43feef162d95b571!2s1260%20Baltzan%20Blvd%2C%20Saskatoon%2C%20SK!5e0!3m2!1sen!2sca!4v1641324592435!5m2!1sen!2sca',
    hours: [
      ['Monday',    '12:00 PM – 8:00 PM'],
      ['Tuesday',   '12:00 PM – 8:00 PM'],
      ['Wednesday', '9:00 AM – 5:00 PM'],
      ['Thursday',  '9:00 AM – 5:00 PM'],
      ['Friday',    '9:00 AM – 4:00 PM'],
      ['Saturday',  'Closed'],
      ['Sunday',    'Closed'],
    ],
    eveningDays: ['Monday', 'Tuesday'],
    img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=700&q=80&auto=format&fit=crop',
    color: 'navy',
  },
]

export default function Locations() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [active, setActive] = useState(0)
  const loc = locations[active]

  return (
    <section id="locations" className="bg-sand py-24 px-5 md:px-10" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="text-teal font-body font-bold text-sm tracking-widest uppercase mb-3"
          >
            Visit Us
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="font-display font-800 text-navy"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Two Saskatoon Locations
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-muted font-body text-base mt-4 max-w-md mx-auto"
          >
            Convenient care across the city — evening hours at both locations.
          </motion.p>
        </div>

        {/* Tab switcher */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.25 }}
          className="flex justify-center gap-3 mb-10"
        >
          {locations.map((l, i) => (
            <button key={l.id} onClick={() => setActive(i)}
              className={`flex items-center gap-2.5 px-7 py-3 rounded-full font-display font-700 text-base transition-all duration-300 ${
                active === i
                  ? 'bg-teal text-white shadow-lg shadow-teal/30'
                  : 'bg-white border border-sand2 text-navy/60 hover:border-teal/50 hover:text-teal'
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {l.short}
            </button>
          ))}
        </motion.div>

        {/* Location card */}
        <motion.div key={active}
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-teal/8 border border-sand2"
        >
          <div className="grid lg:grid-cols-3">

            {/* Photo + quick info */}
            <div className="lg:col-span-1 relative">
              <div className="h-52 lg:h-full min-h-[220px] overflow-hidden">
                <img src={loc.img} alt={loc.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <div className="font-display font-800 text-white text-xl mb-1">{loc.name}</div>
                <div className="inline-flex items-center gap-1.5 bg-teal/90 text-white text-xs font-body font-bold px-3 py-1 rounded-full">
                  🌐 {loc.badge}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-2 p-7 md:p-10">
              {/* Team line */}
              <div className="flex items-start gap-2.5 mb-6 pb-6 border-b border-sand2">
                <span className="text-lg mt-0.5">👨‍⚕️</span>
                <div>
                  <div className="text-xs text-muted font-body uppercase tracking-wider mb-0.5">Our Dentists Here</div>
                  <div className="font-display font-600 text-navy text-sm">{loc.team}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact */}
                <div className="space-y-4">
                  <a href={`tel:${loc.tel}`} className="flex items-start gap-3 group">
                    <span className="w-9 h-9 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-teal" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                    </span>
                    <div>
                      <div className="text-xs text-muted font-body mb-0.5">Phone</div>
                      <div className="font-display font-600 text-navy text-sm group-hover:text-teal transition-colors">{loc.phone}</div>
                      <div className="text-xs text-muted font-body">Fax: {loc.fax}</div>
                    </div>
                  </a>
                  <a href={`mailto:${loc.email}`} className="flex items-start gap-3 group">
                    <span className="w-9 h-9 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-teal" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    </span>
                    <div>
                      <div className="text-xs text-muted font-body mb-0.5">Email</div>
                      <div className="font-display font-600 text-navy text-xs group-hover:text-teal transition-colors break-all">{loc.email}</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-teal" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    </span>
                    <div>
                      <div className="text-xs text-muted font-body mb-0.5">Address</div>
                      <div className="font-display font-600 text-navy text-sm whitespace-pre-line">{loc.address}</div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <div className="text-xs text-muted font-body uppercase tracking-wider mb-3">Office Hours</div>
                  <div className="space-y-2">
                    {loc.hours.map(([day, time]) => {
                      const isEvening = loc.eveningDays.includes(day)
                      const isClosed = time === 'Closed'
                      return (
                        <div key={day} className="flex items-center justify-between text-sm">
                          <span className="font-body text-muted w-28 shrink-0">{day}</span>
                          <span className={`font-display font-600 text-sm ${isClosed ? 'text-muted/60' : 'text-navy'}`}>
                            {time}
                            {isEvening && !isClosed && (
                              <span className="ml-2 bg-teal/10 text-teal text-[0.6rem] font-body font-bold px-1.5 py-0.5 rounded-full">EVE</span>
                            )}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-7 pt-6 border-t border-sand2 flex flex-wrap gap-3">
                <a href={loc.bookLink} target="_blank" rel="noreferrer"
                  className="bg-teal hover:bg-teal2 text-white font-display font-700 text-sm px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal/30"
                >
                  Book Online
                </a>
                <a href={`tel:${loc.tel}`}
                  className="border border-teal text-teal hover:bg-teal hover:text-white font-display font-700 text-sm px-6 py-3 rounded-full transition-all duration-300"
                >
                  Call Now
                </a>
                <a href={`https://www.google.com/maps/search/${encodeURIComponent(loc.address)}`} target="_blank" rel="noreferrer"
                  className="border border-sand2 text-muted hover:border-navy/30 hover:text-navy font-display font-600 text-sm px-6 py-3 rounded-full transition-all duration-300"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="border-t border-sand2 h-64 overflow-hidden">
            <iframe
              src={loc.mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title={`Map of ${loc.name}`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
