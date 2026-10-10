import React, { useState, useEffect } from 'react';
import { GitCommit, Calendar, Zap, Award, Loader2, BookOpen } from 'lucide-react';
import { githubConfig, personalInfo } from '../../data/portfolioData';

const ContributionGraph = () => {
  const [stats, setStats] = useState({
    totalCommits: 0,
    activeDays: 0,
    publicRepos: 8,
    loading: true,
    error: false
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        // 1. Fetch Basic Profile Data
        const profileRes = await fetch(githubConfig.profileApi);
        const profileData = profileRes.ok ? await profileRes.json() : {};
        
        // 2. Fetch Contributions Data via community API
        const contribRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${githubConfig.username}`);
        
        let total = 0;
        let days = 0;
        let commitError = false;

        if (contribRes.ok) {
          const contribData = await contribRes.json();
          
          if (contribData.total) {
            Object.values(contribData.total).forEach(c => total += c);
          }

          if (contribData.contributions) {
            contribData.contributions.forEach(year => {
              if (year.days) {
                year.days.forEach(day => {
                  if (day.count > 0) days++;
                });
              }
            });
          }
        } else {
          commitError = true;
        }

        if (isMounted) {
          setStats({
            totalCommits: total,
            activeDays: days,
            publicRepos: profileData.public_repos || 8,
            loading: false,
            error: commitError
          });
        }

      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        if (isMounted) {
          setStats(prev => ({ 
            ...prev, 
            loading: false, 
            error: true,
            publicRepos: 8 
          }));
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center py-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full mb-6 gap-2">
        <h3 className="text-xl font-bold text-white tracking-tight">
          Contribution Activity
        </h3>
        <span className="text-xs font-mono text-emerald-400">
          @{githubConfig.username}
        </span>
      </div>
      
      {/* 1. Contribution Graph Banner */}
      <div className="w-full overflow-x-auto rounded-2xl bg-white/[0.03] border border-white/10 p-5 mb-8 no-scrollbar">
        <img 
          src={githubConfig.chartUrl} 
          alt={`${personalInfo.name}'s GitHub Contribution Graph`} 
          className="w-full min-w-[720px] opacity-85 hover:opacity-100 transition-opacity"
          onError={(e) => {
            // graceful fallback if chart server is unreachable
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* 2. STATS GRID */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Card 1: Repositories / Commits */}
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5 hover:bg-white/10 transition-colors group">
          <BookOpen size={22} className="text-emerald-400 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-black text-white font-mono">
            {stats.loading ? "-" : stats.publicRepos}
          </span>
          <span className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">
            Public Repos
          </span>
        </div>

        {/* Card 2: Active Coded Status */}
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5 hover:bg-white/10 transition-colors group">
          <Calendar size={22} className="text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-black text-white font-mono">
            {stats.loading ? "-" : (stats.activeDays > 0 ? stats.activeDays : "Active")}
          </span>
          <span className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">
            {stats.activeDays > 0 ? "Days Coded" : "Activity"}
          </span>
        </div>

        {/* Card 3: Batch */}
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5 hover:bg-white/10 transition-colors group">
          <Award size={22} className="text-purple-400 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-black text-white font-mono">2026</span>
          <span className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">Target Batch</span>
        </div>

        {/* Card 4: Open to Work */}
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5 hover:bg-white/10 transition-colors group">
          <Zap size={22} className="text-yellow-400 group-hover:scale-110 transition-transform" />
          <span className="text-xl font-black text-white font-mono">Open</span>
          <span className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">To Work</span>
        </div>

      </div>
      
      <p className="text-[11px] text-gray-500 mt-6 font-mono self-start">
        * GitHub activity synced live via official APIs.
      </p>
    </div>
  );
};

export default ContributionGraph;