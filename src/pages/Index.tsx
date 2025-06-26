
import { useState, useEffect } from 'react';
import { ChevronDown, Code, Terminal, User, Briefcase, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-green-400 min-h-screen font-mono">
      <Navigation currentSection={currentSection} />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="experience">
        <Experience />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
