import React from 'react';
import { Download, RefreshCw, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { CountrySelect } from './CountrySelect';
import { AnimatedContainer } from './AnimatedContainer';
import { fadeInUp, staggerChildren } from '../utils/animations';

type DataType = 'phone' | 'address' | 'creditCard' | 'name' | 'email';

export function Generator() {
  const [dataType, setDataType] = React.useState<DataType>('name');
  const [count, setCount] = React.useState(1);
  const [country, setCountry] = React.useState('US');
  const [cardType, setCardType] = React.useState('visa');
  const [loading, setLoading] = React.useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const selectWrapperClasses = "relative";
  const selectClasses = "w-full bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg pl-4 pr-10 py-2.5 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none mobile:text-base transition-colors duration-200";
  const inputClasses = "w-full bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 mobile:text-base transition-colors duration-200";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-1.5";

  return (
    <AnimatedContainer animation={fadeInUp} className="w-full max-w-4xl mx-auto backdrop-blur-md bg-black/30 rounded-xl border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl transition-all duration-300 hover:shadow-blue-500/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {[
          {
            label: "Data Type",
            content: (
              <div className={selectWrapperClasses}>
                <select
                  value={dataType}
                  onChange={(e) => setDataType(e.target.value as DataType)}
                  className={selectClasses}
                >
                  <option value="phone" className="bg-black/90 backdrop-blur-sm text-gray-200 py-2">Phone Numbers</option>
                  <option value="address" className="bg-black/90 backdrop-blur-sm text-gray-200 py-2">Addresses</option>
                  <option value="creditCard" className="bg-black/90 backdrop-blur-sm text-gray-200 py-2">Credit Card Numbers</option>
                  <option value="name" className="bg-black/90 backdrop-blur-sm text-gray-200 py-2">Names</option>
                  <option value="email" className="bg-black/90 backdrop-blur-sm text-gray-200 py-2">Email Addresses</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-transform duration-200" size={16} />
              </div>
            )
          },
          {
            label: "Country Format",
            content: <CountrySelect value={country} onChange={setCountry} />
          },
          {
            label: "Number of Entries (1-1000)",
            content: (
              <input
                type="number"
                min="1"
                max="1000"
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value))}
                className={inputClasses}
              />
            )
          },
          ...(dataType === 'creditCard' ? [{
            label: "Card Type",
            content: (
              <div className={selectWrapperClasses}>
                <select
                  value={cardType}
                  onChange={(e) => setCardType(e.target.value)}
                  className={selectClasses}
                >
                  <option value="visa" className="bg-black/90 backdrop-blur-sm text-gray-200 py-2">Visa</option>
                  <option value="mastercard" className="bg-black/90 backdrop-blur-sm text-gray-200 py-2">MasterCard</option>
                  <option value="amex" className="bg-black/90 backdrop-blur-sm text-gray-200 py-2">American Express</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-transform duration-200" size={16} />
              </div>
            )
          }] : [])
        ].map((field, index) => (
          <AnimatedContainer
            key={field.label}
            className="col-span-1"
            animation={fadeInUp}
            delay={index * 100}
          >
            <label className={labelClasses}>{field.label}</label>
            {field.content}
          </AnimatedContainer>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
        <button
          onClick={handleGenerate}
          disabled={loading}
          className={clsx(
            "bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3",
            "rounded-lg flex-1 sm:flex-none min-w-[140px]",
            "hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center space-x-2",
            "disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl",
            "border border-white/10 backdrop-blur-sm",
            "transform transition-transform duration-200 hover:scale-105"
          )}
        >
          {loading ? (
            <RefreshCw className="animate-spin" size={20} />
          ) : (
            <>
              <RefreshCw size={20} />
              <span>Generate</span>
            </>
          )}
        </button>

        <button 
          className={clsx(
            "bg-gradient-to-r from-gray-800 to-gray-900 text-blue-400 px-6 py-3",
            "rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all",
            "flex items-center justify-center space-x-2 border border-white/10",
            "shadow-lg hover:shadow-xl backdrop-blur-sm flex-1 sm:flex-none min-w-[140px]",
            "transform transition-transform duration-200 hover:scale-105"
          )}
        >
          <Download size={20} />
          <span>Download</span>
        </button>
      </div>

      <AnimatedContainer 
        animation={fadeInUp} 
        delay={400}
        className="mt-6 sm:mt-8 overflow-x-auto rounded-lg border border-white/10 backdrop-blur-sm"
      >
        <table className="min-w-full divide-y divide-white/10">
          <thead className="bg-black/50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">#</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Generated Data</th>
            </tr>
          </thead>
          <tbody className="bg-black/50 divide-y divide-white/10">
            <tr className="transition-colors duration-200 hover:bg-white/5">
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-400">1</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-white">Generated data will appear here</td>
            </tr>
          </tbody>
        </table>
      </AnimatedContainer>
    </AnimatedContainer>
  );
}