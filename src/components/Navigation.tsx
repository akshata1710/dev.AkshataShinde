
import { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
}

const Navigation = ({ currentSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'home' },
    { id: 'about', label: 'about' },
    { id: 'projects', label: 'projects' },
    { id: 'experience', label: 'experience' },
    { id: 'contact', label: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-green-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-green-400" />
            <span className="text-green-400 font-bold">dev@portfolio:~$</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm transition-colors ${
                  currentSection === item.id
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-green-400 hover:text-cyan-400'
                }`}
              >
                ./{item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-400 hover:text-cyan-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 border-t border-green-400/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                    currentSection === item.id
                      ? 'text-cyan-400 bg-gray-700'
                      : 'text-green-400 hover:text-cyan-400 hover:bg-gray-700'
                  }`}
                >
                  ./{item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
