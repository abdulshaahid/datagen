import React from 'react';
import { Download, Trash2, Clock } from 'lucide-react';
import { clsx } from 'clsx';

interface HistoryEntry {
  id: string;
  timestamp: Date;
  dataType: string;
  count: number;
  data: string[];
}

export function HistoryPage() {
  const [history] = React.useState<HistoryEntry[]>([
    {
      id: '1',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      dataType: 'name',
      count: 5,
      data: ['John Doe', 'Jane Smith', 'Robert Johnson', 'Emily Brown', 'Michael Wilson']
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      dataType: 'email',
      count: 3,
      data: ['john@example.com', 'jane@example.com', 'robert@example.com']
    },
    {
      id: '3',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      dataType: 'phone',
      count: 4,
      data: ['+1-555-0123', '+1-555-0124', '+1-555-0125', '+1-555-0126']
    }
  ]);

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    
    if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (minutes < 1440) {
      const hours = Math.floor(minutes / 60);
      return `${hours} hours ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
      <div className="backdrop-blur-md bg-black/30 rounded-xl border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Clock size={24} className="text-blue-400" />
            Generation History
          </h1>
          <button className="w-full sm:w-auto bg-red-500/10 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/20 transition-all flex items-center justify-center space-x-2 border border-red-500/20">
            <Trash2 size={20} />
            <span>Clear History</span>
          </button>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {history.map((entry) => (
            <div
              key={entry.id}
              className="backdrop-blur-sm bg-black/20 rounded-lg border border-white/10 p-4 sm:p-6 hover:bg-white/5 transition-colors"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white capitalize mb-1">
                    {entry.dataType} Generation
                  </h3>
                  <p className="text-sm text-gray-400 flex items-center gap-2">
                    <Clock size={16} />
                    {formatTimestamp(entry.timestamp)}
                  </p>
                </div>
                <button className="w-full sm:w-auto bg-gradient-to-r from-gray-800 to-gray-900 text-blue-400 px-4 py-2 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all flex items-center justify-center space-x-2 border border-white/10">
                  <Download size={18} />
                  <span>Export</span>
                </button>
              </div>

              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="inline-block min-w-full align-middle">
                  <table className="min-w-full divide-y divide-white/10">
                    <thead className="bg-black/30">
                      <tr>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">#</th>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Generated Data</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {entry.data.map((item, index) => (
                        <tr key={index} className="hover:bg-white/5">
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-400">{index + 1}</td>
                          <td className="px-4 py-2 text-sm text-white break-all sm:break-normal">{item}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}