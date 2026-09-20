export interface SiteConfig {
  name: string;
  shortName: string;
  monogram: string;
  title: string;
  positioningLine: string;
  valueProposition: string;
  availability: {
    status: string;
    window: string;
    duration: string;
    mode: string;
    location: string;
  };
  targetRoles: string[];
  coreStack: string[];
  domains: {
    id: string;
    label: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    expectedGraduation: string;
    relevantCoursework: string[];
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
  cv: {
    pdfPath: string;
    fileName: string;
    lastUpdated: string;
  };
  navLinks: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Iman Perera",
  shortName: "Iman",
  monogram: "IP",
  title: "Iman Perera — Information Systems Undergraduate & Analytics Specialist",
  positioningLine: "Information Systems Undergraduate · Data Analytics · Data Science · ML · GIS",
  valueProposition: "Transforming messy transactional, operational, and spatial data into high-conviction decision intelligence through reproducible statistical modeling, automated pipelines, and interactive visual interfaces.",
  availability: {
    status: "Available for Internship",
    window: "Summer 2027 / Immediate Availability",
    duration: "3 to 6 Months",
    mode: "Hybrid / On-site / Remote",
    location: "Colombo / Relocation open",
  },
  targetRoles: [
    "Data Analyst Intern",
    "Business Intelligence Intern",
    "Data Science Intern",
    "Machine Learning Intern",
    "GIS / Geospatial Analyst Intern",
  ],
  coreStack: [
    "SQL (PostgreSQL, BigQuery)",
    "Python (Pandas, Scikit-Learn)",
    "Power BI & Tableau",
    "GIS (MapLibre, QGIS, PostGIS)",
    "TypeScript & Modern Web",
    "Git & CI/CD Pipelines",
  ],
  domains: [
    { id: "analytics", label: "Data Analytics", description: "SQL-driven business problem solving, cohort retention, and BI dashboards." },
    { id: "data-science", label: "Data Science", description: "Exploratory modeling, feature engineering, and reproducible statistical inference." },
    { id: "machine-learning", label: "Machine Learning", description: "Predictive pipelines, model evaluation cards, and deployed interactive inference." },
    { id: "statistics", label: "Statistics", description: "Hypothesis testing, A/B testing design, confidence intervals, and effect size calculation." },
    { id: "software", label: "Software Dev", description: "Robust data utilities, TypeScript/Node tooling, and maintainable software systems." },
    { id: "gis", label: "GIS & Spatial", description: "Geospatial indexing, interactive web maps, route accessibility, and spatial joins." },
  ],
  education: {
    degree: "BSc (Hons) in Information Systems",
    institution: "Faculty of Computing & Information Technology",
    expectedGraduation: "December 2027",
    relevantCoursework: [
      "Database Systems & Advanced SQL",
      "Applied Statistics & Probability",
      "Data Mining & Machine Learning",
      "Geographic Information Systems (GIS)",
      "Software Engineering & Architecture",
      "Enterprise Information Systems",
    ],
  },
  contact: {
    email: "imanperera.dev@gmail.com",
    linkedin: "https://linkedin.com/in/imanperera",
    github: "https://github.com/imanperera",
  },
  cv: {
    pdfPath: "/cv/FirstName_LastName_CV.pdf",
    fileName: "Iman_Perera_CV.pdf",
    lastUpdated: "September 2026",
  },
  navLinks: [
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
};
