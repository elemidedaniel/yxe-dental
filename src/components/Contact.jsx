import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [submitted, setSubmitted] = useState(false)

  const inputCls = "w-full bg-sand border border-sand2 focus:border-teal text-navy font-body text-sm px-4 py-3 rounded-xl outline-none transition-colors duration-300 placeholder:text-muted/50"

  return (
    <section id="contact" className="bg-sand py-24 px-5 md:px-10" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="text-teal font-body font-bold text-sm tracking-widest uppercase mb-3"
          >
            Get in Touch
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="font-display font-800 text-navy"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            We'd Love to Hear From You
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left — info */}
          <div>
            {/* Quick options */}
            <div className="space-y-4 mb-10">
              {[
                { icon: '📞', label: '8th Street', val: '(306) 955-3838', href: 'tel:3069553838', sub: '#9 - 3110 8th St. E, Saskatoon' },
                { icon: '📞', label: 'Aspen Ridge', val: '(306) 986-6176', href: 'tel:3069866176', sub: '#125-1260 Baltzan Blvd, Saskatoon' },
                { icon: '📧', label: '8th Street Email', val: 'yxedental@gmail.com', href: 'mailto:yxedental@gmail.com', sub: '' },
                { icon: '📧', label: 'Aspen Ridge Email', val: 'yxedental.aspenridge@gmail.com', href: 'mailto:yxedental.aspenridge@gmail.com', sub: '' },
              ].map(item => (
                <motion.a key={item.val} href={item.href}
                  initial={{ opacity: 0, x: -12 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  className="flex items-start gap-4 bg-white border border-sand2 hover:border-teal/40 rounded-xl p-4 hover:shadow-md hover:shadow-teal/8 transition-all duration-200 group"
                >
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div className="min-w-0">
                    <div className="text-xs text-muted font-body uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="font-display font-700 text-navy text-sm group-hover:text-teal transition-colors truncate">{item.val}</div>
                    {item.sub && <div className="text-xs text-muted font-body mt-0.5">{item.sub}</div>}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social */}
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
              className="flex gap-3"
            >
              <a href="https://www.facebook.com/YXEDental/" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-[#1877F2] text-white font-display font-700 text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                Facebook
              </a>
              <a href="https://www.instagram.com/yxedental/" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-display font-700 text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path fill="white" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2"/></svg>
                Instagram
              </a>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-7 border border-sand2 shadow-sm"
          >
            {!submitted ? (
              <form className="space-y-4" onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
                <div>
                  <p className="font-display font-700 text-navy text-lg mb-5">Send Us a Message</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-teal text-xs font-body font-bold uppercase tracking-wider mb-1.5 block">First Name</label>
                    <input className={inputCls} placeholder="Jane" />
                  </div>
                  <div>
                    <label className="text-teal text-xs font-body font-bold uppercase tracking-wider mb-1.5 block">Last Name</label>
                    <input className={inputCls} placeholder="Smith" />
                  </div>
                </div>
                <div>
                  <label className="text-teal text-xs font-body font-bold uppercase tracking-wider mb-1.5 block">Email</label>
                  <input type="email" className={inputCls} placeholder="jane@email.com" />
                </div>
                <div>
                  <label className="text-teal text-xs font-body font-bold uppercase tracking-wider mb-1.5 block">Phone (optional)</label>
                  <input type="tel" className={inputCls} placeholder="(306) 000-0000" />
                </div>
                <div>
                  <label className="text-teal text-xs font-body font-bold uppercase tracking-wider mb-1.5 block">Preferred Location</label>
                  <select className={inputCls} style={{ appearance: 'none' }}>
                    <option value="">Select a location</option>
                    <option>8th Street</option>
                    <option>Aspen Ridge</option>
                    <option>No preference</option>
                  </select>
                </div>
                <div>
                  <label className="text-teal text-xs font-body font-bold uppercase tracking-wider mb-1.5 block">Message</label>
                  <textarea className={`${inputCls} resize-none h-24`} placeholder="How can we help you?" />
                </div>
                <button type="submit"
                  className="w-full bg-teal hover:bg-teal2 text-white font-display font-700 text-base py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal/30"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-14 gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center text-3xl">😊</div>
                <h3 className="font-display font-800 text-navy text-2xl">Message Sent!</h3>
                <p className="text-muted font-body text-sm max-w-xs">
                  Thank you for reaching out. We'll get back to you shortly — or call us directly to book faster.
                </p>
                <button onClick={() => setSubmitted(false)} className="text-teal font-body text-sm hover:underline mt-2">
                  Send another message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
