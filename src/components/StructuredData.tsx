export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shubham Nakashe",
    "url": "https://www.shubham-nakashe.dev",
    "image": "https://res.cloudinary.com/dc3o4l7rx/image/upload/v1768034310/Untitled_design_1_uiisqp.png",
    "sameAs": [
      "https://www.linkedin.com/in/shubham-nakashe-01b497219/",
      "https://github.com/Shubs2002",
      "https://www.instagram.com/shubh.s28"
    ],
    "jobTitle": "Full Stack Web Developer & AI Specialist",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Vishwakarma Institute of Technology"
    },
    "knowsAbout": [
      "Full Stack Development",
      "MERN Stack",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Python",
      "Flask",
      "FastAPI",
      "Machine Learning",
      "AI Development",
      "E-commerce Development",
      "Web Development",
      "UI/UX Design",
      "SEO Optimization",
      "Bun",
      "ElysiaJS",
      "Electron.js",
      "Tailwind CSS",
      "Framer Motion",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "description": "Shubham Nakashe — Full Stack Web Developer & AI Specialist from Mumbai, India. Expert in MERN Stack, Next.js, Python, AI/ML. Built production-grade platforms for financial advisory firms, content creators & startups.",
    "email": "mailto:shubhamnakashe2002@gmail.com",
    "telephone": "+919270291116",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "nationality": {
      "@type": "Country",
      "name": "India"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Shubham Nakashe — Full Stack Developer Portfolio",
    "url": "https://www.shubham-nakashe.dev",
    "description": "Full Stack Web Developer & AI Specialist Portfolio — MERN, Next.js, Python, AI/ML, e-commerce. 10+ production projects delivered.",
    "author": {
      "@type": "Person",
      "name": "Shubham Nakashe"
    },
    "inLanguage": "en",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.shubham-nakashe.dev/#projects?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Shubham Nakashe — Web Development & AI Services",
    "image": "https://res.cloudinary.com/dc3o4l7rx/image/upload/v1768034310/Untitled_design_1_uiisqp.png",
    "url": "https://www.shubham-nakashe.dev",
    "telephone": "+919270291116",
    "email": "shubhamnakashe2002@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.0760",
      "longitude": "72.8777"
    },
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Pune" },
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "19.0760",
          "longitude": "72.8777"
        },
        "geoRadius": "50000"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Stack Web Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI/ML Application Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Platform Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO & Performance Optimization" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Financial Advisory Website Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API & Backend Development" } }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.linkedin.com/in/shubham-nakashe-01b497219/",
      "https://github.com/Shubs2002"
    ]
  };

  // Portfolio ItemList for rich snippets
  const portfolioList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Portfolio Projects by Shubham Nakashe",
    "description": "Featured web development and AI projects",
    "numberOfItems": 10,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "CreativeWork",
          "name": "Forever Consultants",
          "description": "Full-service financial advisory website for an award-winning Mumbai-based firm with booking system, vCards, and SEO optimization.",
          "url": "https://www.shubham-nakashe.dev/project/forever-consultants",
          "author": { "@type": "Person", "name": "Shubham Nakashe" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "CreativeWork",
          "name": "SmartShelf",
          "description": "AI-powered inventory management platform with real-time tracking and demand prediction.",
          "url": "https://www.shubham-nakashe.dev/project/smartshelf",
          "author": { "@type": "Person", "name": "Shubham Nakashe" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "CreativeWork",
          "name": "SUKTA",
          "description": "AI-powered chatbot that analyzes any website with semantic search and background processing.",
          "url": "https://www.shubham-nakashe.dev/project/sukta",
          "author": { "@type": "Person", "name": "Shubham Nakashe" }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "CreativeWork",
          "name": "AVPE",
          "description": "AI-powered video production ecosystem automating scriptwriting, character design, and video creation.",
          "url": "https://www.shubham-nakashe.dev/project/avpe",
          "author": { "@type": "Person", "name": "Shubham Nakashe" }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "CreativeWork",
          "name": "Aadya Creation",
          "description": "Full-stack e-commerce platform with payment integration and inventory management.",
          "url": "https://www.shubham-nakashe.dev/project/aadya-creation",
          "author": { "@type": "Person", "name": "Shubham Nakashe" }
        }
      }
    ]
  };

  // BreadcrumbList for navigation structure
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.shubham-nakashe.dev"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://www.shubham-nakashe.dev/#projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Services",
        "item": "https://www.shubham-nakashe.dev/#services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://www.shubham-nakashe.dev/#contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
    </>
  );
}
