import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import TrustBar    from './components/TrustBar'
import Team        from './components/Team'
import Services    from './components/Services'
import CDCP        from './components/CDCP'
import Locations   from './components/Locations'
import NewPatients from './components/NewPatients'
import Careers     from './components/Careers'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Team />
        <Services />
        <CDCP />
        <Locations />
        <NewPatients />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
