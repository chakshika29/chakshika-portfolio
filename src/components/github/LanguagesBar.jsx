import React from 'react';
import { githubConfig } from '../../data/portfolioData';

const LanguagesBar = () => {
  const languages = githubConfig.languages || [
    { name: 'JavaScript', percent: 42.0, count: 45 },
    { name: 'Python', percent: 28.5, count: 32 },
    { name: 'TypeScript', percent: 14.5, count: 18 },
    { name: 'HTML/CSS', percent: 10.0, count: 12 },
    { name: 'C++ / SQL', percent: 5.0, count: 6 }
  ];

  const colors = {
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    TypeScript: "#2b7489",
    "HTML/CSS": "#e34c26",
    "C++ / SQL": "#f34b7d",
    default: "#10b981"
  };

  return (
    <div className="w-full py-6 border-b border-white/5">
      <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
        Primary Languages
      </h3>
       
      {/* The Bar */}
      <div className="flex w-full h-3 rounded-full overflow-hidden mb-4 bg-white/5 p-0.5">
        {languages.map((lang) => (
          <div 
            key={lang.name}
            style={{ width: `${lang.percent}%`, backgroundColor: colors[lang.name] || colors.default }}
            className="h-full rounded-full transition-all duration-500"
            title={`${lang.name}: ${lang.percent}%`}
          />
        ))}
      </div>

      {/* The Legend */}
      <div className="flex flex-wrap gap-4">
        {languages.map((lang) => (
          <div key={lang.name} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: colors[lang.name] || colors.default }} 
            />
            <span className="text-sm font-bold text-gray-300">{lang.name}</span>
            <span className="text-xs font-mono text-gray-500">{lang.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesBar;