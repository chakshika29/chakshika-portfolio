import React, { useState, useEffect } from 'react';
import { Book, Star, GitFork, ExternalLink, Loader2 } from 'lucide-react';
import { githubConfig } from '../../data/portfolioData';

// Fallback repositories if GitHub API rate limit is reached
const defaultRepos = [
  {
    id: 1,
    name: "agro-aid",
    description: "Responsive, mobile-first smart agriculture platform with ML-driven crop yield prediction and weather forecasting.",
    language: "JavaScript",
    stargazers_count: 1,
    forks_count: 0,
    html_url: "https://github.com/chakshika29/agro-aid"
  },
  {
    id: 2,
    name: "GIT-DOCS",
    description: "AI-powered documentation generator converting GitHub repositories into technical docs using NLP and AST parsing.",
    language: "TypeScript",
    stargazers_count: 1,
    forks_count: 0,
    html_url: "https://github.com/chakshika29/GIT-DOCS"
  },
  {
    id: 3,
    name: "Foodolio",
    description: "Full-stack food ordering platform built with React.js, Node.js, Express.js, MongoDB, JWT auth, and Stripe.",
    language: "JavaScript",
    stargazers_count: 1,
    forks_count: 0,
    html_url: "https://github.com/chakshika29/Foodolio"
  },
  {
    id: 4,
    name: "Cozy-cup",
    description: "Modern, responsive cafe web application with digital ordering experience and interactive menu displays.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/chakshika29/Cozy-cup"
  },
  {
    id: 5,
    name: "product-engineer-ps",
    description: "Product engineering challenges, architectural prototyping, and algorithmic problem resolutions.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/chakshika29/product-engineer-ps"
  },
  {
    id: 6,
    name: "GTA-VI",
    description: "Interactive gaming landing page concept showcasing modern UI animations and responsive layout design.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/chakshika29/GTA-VI"
  }
];

const PinnedRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchRepos = async () => {
      try {
        const response = await fetch(githubConfig.reposApi);
        if (response.ok) {
          const allRepos = await response.json();
          // Filter out forks or take top 6
          const selected = allRepos.slice(0, 6);
          if (isMounted) {
            setRepos(selected.length > 0 ? selected : defaultRepos);
          }
        } else {
          if (isMounted) {
            setRepos(defaultRepos);
          }
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
        if (isMounted) {
          setRepos(defaultRepos);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchRepos();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <Loader2 className="animate-spin text-emerald-400" size={32} />
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <h3 className="text-xl font-bold text-white mb-6 tracking-tight">
        Featured Repositories
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <a 
            key={repo.id} 
            href={repo.html_url} 
            target="_blank" 
            rel="noreferrer"
            className="group flex flex-col p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.08] transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-white font-bold group-hover:text-emerald-400 transition-colors">
                <Book size={16} className="text-gray-400 group-hover:text-emerald-400 transition-colors" />
                <span className="font-mono">{repo.name}</span>
              </div>
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 text-emerald-400 transition-opacity" />
            </div>

            <p className="text-sm text-gray-400 flex-1 mb-4 line-clamp-2 font-light">
              {repo.description || "Interactive web application and code repository by Chakshika."}
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
              {repo.language && (
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {repo.language}
                </span>
              )}
              <span className="flex items-center gap-1 group-hover:text-yellow-400 transition-colors">
                <Star size={12} /> {repo.stargazers_count ?? 0}
              </span>
              <span className="flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                <GitFork size={12} /> {repo.forks_count ?? 0}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PinnedRepos;