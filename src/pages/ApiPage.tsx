import React from 'react';
import { Code, Copy } from 'lucide-react';

const codeExamples = {
  curl: `curl -X POST "https://api.datagen.dev/v1/generate" \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "type": "name",
  "count": 5
}'`,
  javascript: `fetch('https://api.datagen.dev/v1/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    type: 'name',
    count: 5
  })
})
.then(response => response.json())
.then(data => console.log(data));`,
  python: `import requests

response = requests.post(
    'https://api.datagen.dev/v1/generate',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'type': 'name',
        'count': 5
    }
)

data = response.json()
print(data)`
};

export function ApiPage() {
  const [activeTab, setActiveTab] = React.useState<keyof typeof codeExamples>('curl');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          API Documentation
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Integrate random data generation directly into your applications
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Quick Start
        </h2>
        
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            To get started with the API, you'll need an API key. Sign up for an account to get your API key.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Example Request
          </h3>
          
          <div className="flex space-x-4 mb-4">
            {(Object.keys(codeExamples) as Array<keyof typeof codeExamples>).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveTab(lang)}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === lang
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="relative">
            <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <code className="text-white text-sm">
                {codeExamples[activeTab]}
              </code>
            </pre>
            <button
              className="absolute top-2 right-2 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white"
              onClick={() => navigator.clipboard.writeText(codeExamples[activeTab])}
            >
              <Copy size={20} />
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Available Endpoints
          </h3>
          
          <div className="space-y-4">
            <div className="border dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Generate Data
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                POST /v1/generate
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Generate random data based on the specified type and parameters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}