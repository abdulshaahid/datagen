import React from 'react';
import { Generator } from '../components/Generator';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Random Data Generator
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Generate Fake Yet Realistic Data for Testing and Development
          </p>
        </div>
        
        <Generator />
      </div>
    </div>
  );
}