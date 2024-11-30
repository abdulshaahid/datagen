import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-dark-900/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-purple-300 hover:via-blue-300 hover:to-purple-300 transition-all">
              DataGen
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-200 hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/history" className="text-gray-200 hover:text-blue-400 transition-colors">History</Link>
            <Link to="/features" className="text-gray-200 hover:text-blue-400 transition-colors">Features</Link>
            <Link to="/api" className="text-gray-200 hover:text-blue-400 transition-colors">API</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-blue-400 transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-200 hover:text-blue-400 transition-colors hover:bg-white/5 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/history" 
              className="block px-3 py-2 text-gray-200 hover:text-blue-400 transition-colors hover:bg-white/5 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              History
            </Link>
            <Link 
              to="/features" 
              className="block px-3 py-2 text-gray-200 hover:text-blue-400 transition-colors hover:bg-white/5 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/api" 
              className="block px-3 py-2 text-gray-200 hover:text-blue-400 transition-colors hover:bg-white/5 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              API
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}