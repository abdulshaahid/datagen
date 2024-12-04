import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { AnimatedContainer } from './AnimatedContainer';
import { fadeInDown, slideInLeft } from '../utils/animations';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const linkClasses = (path: string) =>
    `text-gray-200 hover:text-blue-400 transition-all duration-300 relative ${
      isActive(path)
        ? "text-blue-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400 after:rounded-full"
        : ""
    }`;

  return (
    <AnimatedContainer animation={fadeInDown} className="fixed w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-purple-300 hover:via-blue-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105"
            >
              DataGen
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/history', label: 'History' },
              { path: '/features', label: 'Features' },
              { path: '/api', label: 'API' }
            ].map((link, index) => (
              <AnimatedContainer
                key={link.path}
                animation={slideInLeft}
                delay={index * 100}
              >
                <Link
                  to={link.path}
                  className={linkClasses(link.path)}
                >
                  {link.label}
                </Link>
              </AnimatedContainer>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-blue-400 transition-colors duration-300"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <AnimatedContainer
          animation={fadeInDown}
          className="md:hidden bg-black/90 backdrop-blur-md border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { path: '/', label: 'Home' },
              { path: '/history', label: 'History' },
              { path: '/features', label: 'Features' },
              { path: '/api', label: 'API' }
            ].map((link, index) => (
              <AnimatedContainer
                key={link.path}
                animation={slideInLeft}
                delay={index * 100}
              >
                <Link 
                  to={link.path} 
                  className="block px-3 py-2 text-gray-200 hover:text-blue-400 transition-colors duration-300 hover:bg-white/5 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </AnimatedContainer>
            ))}
          </div>
        </AnimatedContainer>
      )}
    </AnimatedContainer>
  );
}