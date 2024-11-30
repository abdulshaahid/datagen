import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Zap, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Random Data Generator for Developers & Testers
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Generate Fake Yet Realistic Data for Testing and Development
          </p>
          <Link
            to="/generator"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-dark-700 rounded-lg p-6 text-white border border-dark-600">
            <Database className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Bulk Generation</h3>
            <p className="text-gray-400">Generate thousands of records in seconds with our powerful bulk generation tool.</p>
          </div>

          <div className="bg-dark-700 rounded-lg p-6 text-white border border-dark-600">
            <Zap className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">API Access</h3>
            <p className="text-gray-400">Integrate random data generation directly into your applications with our REST API.</p>
          </div>

          <div className="bg-dark-700 rounded-lg p-6 text-white border border-dark-600">
            <Users className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Multiple Data Types</h3>
            <p className="text-gray-400">Generate names, addresses, phone numbers, and more with realistic formatting.</p>
          </div>
        </div>
      </div>
    </div>
  );
}