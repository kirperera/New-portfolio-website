import React, { useState, useEffect, useMemo } from 'react';

interface ProjectItem {
  slug: string;
  title: string;
  summary: string;
  outcome: string;
  domain: string[];
  tools: string[];
  role: string;
  featured: boolean;
  readMinutes?: number;
  repoUrl?: string;
}

interface ProjectFilterProps {
  projects: ProjectItem[];
}

const DOMAIN_OPTIONS = [
  { id: 'all', label: 'All Domains' },
  { id: 'analytics', label: 'Data Analytics' },
  { id: 'data-science', label: 'Data Science' },
  { id: 'machine-learning', label: 'Machine Learning' },
  { id: 'statistics', label: 'Statistics' },
  { id: 'software', label: 'Software Dev' },
  { id: 'gis', label: 'GIS & Spatial' },
];

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [selectedDomain, setSelectedDomain] = useState('all');

  // Read domain from URL query params on mount (FR-PROJ-03)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const domainParam = params.get('domain');
      if (domainParam && DOMAIN_OPTIONS.some((d) => d.id === domainParam)) {
        setSelectedDomain(domainParam);
      }
    }
  }, []);

  // Update URL query param when filter changes without page reload (FR-PROJ-03)
  const handleSelectDomain = (domainId: string) => {
    setSelectedDomain(domainId);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (domainId === 'all') {
        url.searchParams.delete('domain');
      } else {
        url.searchParams.set('domain', domainId);
      }
      window.history.replaceState({}, '', url.toString());
    }
  };

  const filteredProjects = useMemo(() => {
    if (selectedDomain === 'all') {
      return projects;
    }
    return projects.filter((p) => p.domain.includes(selectedDomain));
  }, [projects, selectedDomain]);

  return (
    <div className="space-y-8">
      {/* Domain Filter Pills (FR-PROJ-02) */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-200">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-2">
          Filter:
        </span>
        {DOMAIN_OPTIONS.map((option) => {
          const isActive = selectedDomain === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelectDomain(option.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid (FR-PROJ-01, FR-PROJ-04) */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center bg-slate-50 rounded-lg border border-slate-200 text-slate-500 text-sm">
          No case studies found for the selected filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-teal-600 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.domain.map((d) => (
                      <span
                        key={d}
                        className="text-[11px] font-semibold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                  {project.readMinutes && (
                    <span className="text-xs text-slate-400 font-mono">
                      {project.readMinutes}m read
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold font-serif text-slate-900 leading-snug hover:text-teal-700 transition-colors">
                  <a href={`/projects/${project.slug}`}>
                    {project.title}
                  </a>
                </h3>

                <div className="p-3 bg-slate-50 rounded border-l-2 border-teal-600 text-xs text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 block mb-0.5">Measurable Outcome:</strong>
                  {project.outcome}
                </div>

                <div className="pt-1">
                  <div className="flex flex-wrap gap-1">
                    {project.tools.slice(0, 4).map((tool) => (
                      <span key={tool} className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                <a
                  href={`/projects/${project.slug}`}
                  className="font-semibold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1"
                >
                  <span>Read Case Study</span>
                  <span>→</span>
                </a>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-700"
                  >
                    Repo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
