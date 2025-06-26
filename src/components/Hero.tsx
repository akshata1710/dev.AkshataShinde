
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hello, I'm Akshata Shinde";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Terminal-like background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-xs text-green-400">
          {'> npm install creativity'}
        </div>
        <div className="absolute top-40 right-20 text-xs text-cyan-400">
          {'// Building amazing experiences'}
        </div>
        <div className="absolute bottom-40 left-20 text-xs text-yellow-400">
          {'def solve_problems():'}
        </div>
        <div className="absolute bottom-20 right-10 text-xs text-purple-400">
          {'console.log("Hello World!");'}
        </div>
      </div>

      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <div className="inline-block bg-gray-800 border border-green-400/30 rounded-lg p-6 mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-400 text-sm ml-4">portfolio.py</span>
            </div>
            <div className="text-left">
              <div className="text-purple-400 text-sm mb-2"># Full Stack Python Developer</div>
              <div className="text-white">
                <span className="text-cyan-400 text-sm">print</span>
                <span className="text-white">(</span>
                <span className="text-yellow-400">"</span>
                <span className="text-yellow-400 text-xl">{text}</span>
                {showCursor && <span className="text-yellow-400">|</span>}
                <span className="text-yellow-400">"</span>
                <span className="text-white">)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-xl text-gray-300 animate-fade-in">
            <span className="text-cyan-400">&gt;</span> Crafting digital solutions with Python, JavaScript & creativity
          </p>
          <p className="text-lg text-gray-400 animate-fade-in">
            <span className="text-green-400">#</span> A Software developer, passionate about clean code & user experience
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/akshata1710"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 border border-green-400/30 rounded-lg hover:border-green-400 hover:bg-gray-700 transition-all duration-300 hover:scale-105"
          >
            <Github className="h-6 w-6 text-green-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/akshata-shinde1718/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 border border-cyan-400/30 rounded-lg hover:border-cyan-400 hover:bg-gray-700 transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="h-6 w-6 text-cyan-400" />
          </a>
          <a
            href="mailto:akshatashinde1710@email.com"
            className="p-3 bg-gray-800 border border-purple-400/30 rounded-lg hover:border-purple-400 hover:bg-gray-700 transition-all duration-300 hover:scale-105"
          >
            <Mail className="h-6 w-6 text-purple-400" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce flex items-center justify-center mx-auto text-green-400 hover:text-cyan-400 transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
