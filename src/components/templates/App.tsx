
import About from '../organisms/About'
import { Contact } from '../organisms/Contact'
import Footer from '../organisms/Footer'
import { Hero } from '../organisms/Hero'
import Navbar from '../organisms/Navbar'
import Projects from '../organisms/Projects'
import { Service } from '../organisms/Service'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App