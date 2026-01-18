import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export type FooterMode = 'treatment' | 'education' | 'returning' | 'professional' | 'default';

interface FooterContext {
  mode: FooterMode;
  isReturningVisitor: boolean;
  lastViewedPath: string | null;
  lastViewedTitle: string | null;
  relatedTopics: Array<{ title: string; path: string }>;
}

// Treatment patterns for Mode A
const TREATMENT_PATTERNS = [
  'filler', 'botox', 'treatment', 'nose-job', 'facelift', 'threads',
  'profhilo', 'hydrafacial', 'prp', 'polynucleotide', 'peel',
  'microneedling', 'bleaching', 'skin-care', 'nefertiti', 'gummy-smile',
  'marionette', 'nasolabial', 'dissolve', 'rejuvenation', 'temple-filler',
  'tear-trough', 'chin-botox', 'chin-filler', 'cheek-filler', 'jawline-filler',
  'neck-fillers', 'forehead-fillers', 'ear-lobe', 'calf-reduction',
  'trigger-point', 'upper-face', 'lower-face', 'fat-dissolve', 'oily-skin',
  'migraine-botox', 'excessive-sweat', 'bunny-lines', 'scar-reduction',
  'eczema', 'psoriasis', 'acne', 'rosacea', 'liposuction', 'rhinoplasty'
];

// Education patterns for Mode B
const EDUCATION_PATTERNS = [
  'blog', 'cosmetalk', 'guide', 'faqs', 'journal', 'smart-aesthetics',
  'aesthetic-treatments-made-easy', 'long-term-aesthetic', 'maintenance-cost'
];

// Professional patterns for Mode D
const PROFESSIONAL_PATTERNS = [
  'training', 'fellowship', 'admin', 'medical-student', 'work-experience',
  'cpd', 'professional'
];

// Related topics mapping
const RELATED_TOPICS_MAP: Record<string, Array<{ title: string; path: string }>> = {
  'lip-filler': [
    { title: 'Lip Filler Dissolve', path: '/lip-filler-dissolve' },
    { title: 'Nasolabial Folds', path: '/nasolabial-folds' },
    { title: 'Marionette Lines', path: '/marionette-lines' }
  ],
  'botox': [
    { title: 'Masseter Botox', path: '/masseter-botox' },
    { title: 'Migraine Botox', path: '/migraine-botox' },
    { title: 'Nefertiti Lift', path: '/nefertiti-botox-facelift' }
  ],
  'facelift': [
    { title: 'PDO Threads', path: '/pdo-threads' },
    { title: 'Cheek Filler', path: '/cheek-filler' },
    { title: '8-Point Facelift', path: '/8-point-facelift' }
  ],
  'skin': [
    { title: 'Profhilo', path: '/profhilo' },
    { title: 'HydraFacial', path: '/hydrafacial' },
    { title: 'Microneedling', path: '/microneedling' }
  ],
  'default': [
    { title: 'All Treatments', path: '/treatments' },
    { title: 'Smart Aesthetics', path: '/aesthetic-treatments-made-easy' },
    { title: 'Book Consultation', path: '/booking' }
  ]
};

function getPathTitle(path: string): string {
  // Convert path to readable title
  const cleaned = path.replace(/^\//, '').replace(/-/g, ' ');
  return cleaned
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getRelatedTopics(path: string): Array<{ title: string; path: string }> {
  for (const [key, topics] of Object.entries(RELATED_TOPICS_MAP)) {
    if (path.includes(key)) {
      return topics.filter(t => t.path !== path);
    }
  }
  return RELATED_TOPICS_MAP.default;
}

export function useFooterContext(): FooterContext {
  const location = useLocation();
  const path = location.pathname;
  
  const [lastViewedPath, setLastViewedPath] = useState<string | null>(null);
  const [lastViewedTitle, setLastViewedTitle] = useState<string | null>(null);
  const [isReturningVisitor, setIsReturningVisitor] = useState(false);
  
  // Check for returning visitor on mount
  useEffect(() => {
    const stored = localStorage.getItem('cosmedocs_last_viewed');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        if (data.path && data.path !== path) {
          setLastViewedPath(data.path);
          setLastViewedTitle(data.title || getPathTitle(data.path));
          setIsReturningVisitor(true);
        }
      } catch {
        // Invalid stored data, ignore
      }
    }
  }, [path]);
  
  // Store current page for future visits (only treatment/education pages)
  useEffect(() => {
    const isTreatment = TREATMENT_PATTERNS.some(p => path.includes(p));
    const isEducation = EDUCATION_PATTERNS.some(p => path.includes(p));
    
    if (isTreatment || isEducation) {
      const data = {
        path,
        title: getPathTitle(path),
        timestamp: Date.now()
      };
      localStorage.setItem('cosmedocs_last_viewed', JSON.stringify(data));
    }
  }, [path]);
  
  // Determine footer mode
  let mode: FooterMode = 'default';
  
  if (PROFESSIONAL_PATTERNS.some(p => path.includes(p))) {
    mode = 'professional';
  } else if (EDUCATION_PATTERNS.some(p => path.includes(p))) {
    mode = 'education';
  } else if (TREATMENT_PATTERNS.some(p => path.includes(p))) {
    mode = 'treatment';
  } else if (isReturningVisitor && path === '/') {
    mode = 'returning';
  }
  
  return {
    mode,
    isReturningVisitor,
    lastViewedPath,
    lastViewedTitle,
    relatedTopics: getRelatedTopics(path)
  };
}
