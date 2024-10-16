import React, { useRef } from 'react'
import { Menu } from './components/Menu'
import { Mainapp } from './components/Mainapp';
import { Section } from './components/Section';
import { B2BExperience } from './components/B2BExperience';
import { InternationalComp } from './components/InternationalComp';
import { ContactUs } from './components/ContactUs';

function App() {
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToContactUs = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Menu onContactClick={scrollToContactUs} />
      <Mainapp />
      <Section />
      <B2BExperience />
      <InternationalComp />
      <div ref={contactRef}>
        <ContactUs />
      </div>
    </div>
  )
}
export default App;
