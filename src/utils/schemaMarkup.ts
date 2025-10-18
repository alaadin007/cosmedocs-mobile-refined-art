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
  "priceRange": "££",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "17:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "120"
  }
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
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.4862,
      "longitude": -1.8904
    },
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "85"
    }
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
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.4808,
      "longitude": -2.2426
    },
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "95"
    }
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
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.4816,
      "longitude": -3.1791
    },
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "75"
    }
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
