import { siteConfig } from '../content/site';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalURL?: string;
  image?: string;
  type?: 'website' | 'article';
}

export function generateSEO({
  title,
  description,
  canonicalURL,
  image = '/og/og-default.png',
  type = 'website',
}: SEOProps) {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const metaDescription = description || siteConfig.valueProposition;
  const canonical = canonicalURL || 'https://imanperera.github.io';
  const ogImage = image.startsWith('http') ? image : `https://imanperera.github.io${image}`;

  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: 'Information Systems Undergraduate',
    description: siteConfig.valueProposition,
    url: 'https://imanperera.github.io',
    sameAs: [
      siteConfig.contact.linkedin,
      siteConfig.contact.github,
    ],
    knowsAbout: [
      'Data Analytics',
      'Data Science',
      'Machine Learning',
      'Geographic Information Systems (GIS)',
      'SQL',
      'Python',
    ],
  };

  return {
    metaTitle,
    metaDescription,
    canonical,
    ogImage,
    type,
    jsonLdPerson: JSON.stringify(jsonLdPerson),
  };
}
