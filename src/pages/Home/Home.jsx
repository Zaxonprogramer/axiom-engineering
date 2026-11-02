import Hero from '../../sections/Hero/Hero'
import Projects from '../../sections/Projects/Projects'
import Capabilities from '../../sections/Capabilities/Capabilities'
import EngineeringRing from '../../components/EngineeringRing/EngineeringRing'
import Process from '../../sections/Process/Process'
import Manufacturing from '../../sections/Manufacturing/Manufacturing'
import About from '../../sections/About/About'
import Contact from '../../sections/Contact/Contact'

function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Capabilities />
      <EngineeringRing />
      <Process />
      <Manufacturing />
      <About />
      <Contact />
    </main>
  )
}

export default Home