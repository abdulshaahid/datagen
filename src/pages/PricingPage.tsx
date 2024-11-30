import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for testing and small projects',
    features: [
      'Up to 1,000 requests per month',
      'Basic data types',
      'JSON & CSV export',
      'Community support'
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline'
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For professional developers and teams',
    features: [
      'Up to 100,000 requests per month',
      'All data types',
      'API access',
      'Priority support',
      'Team collaboration',
      'Custom formats'
    ],
    buttonText: 'Start Free Trial',
    buttonVariant: 'solid',
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'per month',
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited requests',
      'Custom data types',
      'Dedicated support',
      'SLA guarantee',
      'On-premise deployment',
      'Custom integration'
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outline'
  }
];

export function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Choose the plan that's right for you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
              plan.featured ? 'ring-2 ring-blue-600 dark:ring-blue-400' : ''
            }`}
          >
            {plan.featured && (
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm">
                Popular
              </div>
            )}
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  /{plan.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {plan.description}
              </p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                    <Check className="text-green-500 mr-2" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-2 px-4 rounded-lg ${
                  plan.buttonVariant === 'solid'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900'
                } transition-colors`}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}