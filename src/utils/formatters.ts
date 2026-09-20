export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatDomainLabel(domain: string): string {
  const map: Record<string, string> = {
    analytics: 'Data Analytics',
    'data-science': 'Data Science',
    'machine-learning': 'Machine Learning',
    statistics: 'Statistics',
    software: 'Software Dev',
    gis: 'GIS & Spatial',
  };
  return map[domain] || domain;
}

export function getDomainBadgeClasses(domain: string): string {
  const map: Record<string, string> = {
    analytics: 'bg-sky-50 text-sky-800 border-sky-200',
    'data-science': 'bg-indigo-50 text-indigo-800 border-indigo-200',
    'machine-learning': 'bg-purple-50 text-purple-800 border-purple-200',
    statistics: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    software: 'bg-amber-50 text-amber-800 border-amber-200',
    gis: 'bg-teal-50 text-teal-800 border-teal-200',
  };
  return map[domain] || 'bg-slate-100 text-slate-800 border-slate-200';
}
