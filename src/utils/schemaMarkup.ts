// Standard Schema.org markup for Cosmedocs
// Ensures compliance across all pages

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Cosmedocs",
  "url": "https://www.cosmedocs.co.uk",
  "telephone": "+44 20 3733 3227",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10 Harley Street",
    "addressLocality": "London",
    "addressRegion": "Greater London",
    "postalCode": "W1G 9PF",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.5074,
    "longitude": -0.1278
  },
  "priceRange": "££"
};

// Location-specific organization schemas
export const LOCATION_SCHEMAS = {
  london: {
    ...ORGANIZATION_SCHEMA,
    "name": "Cosmedocs London",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Harley Street",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "postalCode": "W1G 9PF",
      "addressCountry": "GB"
    }
  },
  birmingham: {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs Birmingham",
    "url": "https://www.cosmedocs.co.uk/birmingham",
    "telephone": "+44 121 318 4218",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "62-64 Corporation Street",
      "addressLocality": "Birmingham",
      "addressRegion": "West Midlands",
      "postalCode": "B2 4RR",
      "addressCountry": "GB"
    },
    "priceRange": "££"
  },
  manchester: {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs Manchester",
    "url": "https://www.cosmedocs.co.uk/manchester",
    "telephone": "+44 161 503 1350",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "79 Deansgate",
      "addressLocality": "Manchester",
      "addressRegion": "Greater Manchester",
      "postalCode": "M3 2BW",
      "addressCountry": "GB"
    },
    "priceRange": "££"
  },
  cardiff: {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs Cardiff",
    "url": "https://www.cosmedocs.co.uk/cardiff",
    "telephone": "+44 29 2009 0909",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "19 Park Place",
      "addressLocality": "Cardiff",
      "addressRegion": "South Glamorgan",
      "postalCode": "CF10 3DQ",
      "addressCountry": "GB"
    },
    "priceRange": "££"
  }
};

// Person schema for doctors - worksFor should reference full organization
export const createDoctorSchema = (doctorData: {
  name: string;
  jobTitle: string;
  url: string;
  image?: string;
  alumniOf?: string;
  memberOf?: string;
  skills?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": doctorData.name,
  "jobTitle": doctorData.jobTitle,
  "url": doctorData.url,
  ...(doctorData.image && { "image": doctorData.image }),
  "worksFor": {
    "@type": "MedicalClinic",
    "name": "Cosmedocs",
    "url": "https://www.cosmedocs.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Harley Street",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "postalCode": "W1G 9PF",
      "addressCountry": "GB"
    }
  },
  ...(doctorData.alumniOf && {
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": doctorData.alumniOf
    }
  }),
  ...(doctorData.memberOf && {
    "memberOf": {
      "@type": "Organization",
      "name": doctorData.memberOf
    }
  }),
  ...(doctorData.skills && {
    "hasOccupation": {
      "@type": "Occupation",
      "name": doctorData.jobTitle,
      "skills": doctorData.skills
    }
  })
});
