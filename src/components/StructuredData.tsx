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
    "jobTitle": "Full Stack Web Developer",
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
      "Python",
      "Flask",
      "FastAPI",
      "Machine Learning",
      "AI Development",
      "E-commerce Development",
      "Web Development",
      "UI/UX Design"
    ],
    "description": "Passionate Full Stack Web Developer specializing in MERN, Flask, AI-driven applications, and e-commerce platforms.",
    "email": "mailto:shubhamnakashe2002@gmail.com",
    "telephone": "+919270291116",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Shubham Nakashe Portfolio",
    "url": "https://www.shubham-nakashe.dev",
    "description": "Full Stack Web Developer Portfolio showcasing projects in MERN, AI, and e-commerce development",
    "author": {
      "@type": "Person",
      "name": "Shubham Nakashe"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.shubham-nakashe.dev/#projects?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Shubham Nakashe - Web Development Services",
    "image": "https://res.cloudinary.com/dc3o4l7rx/image/upload/v1768034310/Untitled_design_1_uiisqp.png",
    "url": "https://www.shubham-nakashe.dev",
    "telephone": "+919270291116",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.5204",
      "longitude": "73.8567"
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
    </>
  );
}
