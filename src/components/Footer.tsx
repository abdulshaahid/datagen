import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">DataGen</h3>
            <p className="text-gray-400">
              Generate realistic test data for your development and testing needs.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-400 hover:text-blue-400">Features</Link></li>
              <li><Link to="/generator" className="text-gray-400 hover:text-blue-400">Generator</Link></li>
              <li><Link to="/api" className="text-gray-400 hover:text-blue-400">API</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-700">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} DataGen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}