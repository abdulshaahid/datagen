import React from 'react';
import { 
  Database, 
  Download, 
  Globe2, 
  Shield, 
  Zap,
  Users
} from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Multiple Data Types',
    description: 'Generate a wide variety of data types including names, addresses, phone numbers, credit cards, and more.'
  },
  {
    icon: Download,
    title: 'Bulk Generation',
    description: 'Generate thousands of records in seconds and export them in CSV or JSON format.'
  },
  {
    icon: Globe2,
    title: 'International Formats',
    description: 'Support for multiple countries and regions with appropriate formatting.'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'All generated data is random and not derived from real people or information.'
  },
  {
    icon: Zap,
    title: 'REST API Access',
    description: 'Integrate data generation directly into your applications with our REST API.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Share datasets and API keys with your team members.'
  }
];

export function FeaturesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Powerful Features for Developers
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Everything you need to generate realistic test data for your applications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}