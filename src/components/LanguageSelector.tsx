import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { SUPPORTED_LANGUAGES, SLUG_MAP, resolveEnglishSlug } from '@/i18n/config';
import type { SupportedLanguage } from '@/i18n/types';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface LanguageSelectorProps {
  variant?: 'header' | 'footer';
}

export default function LanguageSelector({ variant = 'header' }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const switchLanguage = (targetLang: SupportedLanguage) => {
    if (targetLang === language) { setIsOpen(false); return; }

    // Parse current path to build equivalent in target language
    const pathname = location.pathname.replace(/\/$/, '') || '';
    const segments = pathname.split('/').filter(Boolean);

    // Remove current language prefix if present
    let pathSegments = [...segments];
    if (pathSegments[0] && pathSegments[0] in SUPPORTED_LANGUAGES && pathSegments[0] !== 'en') {
      pathSegments = pathSegments.slice(1);
    }

    // Resolve English slugs from current language
    const currentSlugMap = SLUG_MAP[language];
    const englishSegments = pathSegments.map(seg => {
      // Try to find the English equivalent
      for (const [enSlug, localSlug] of Object.entries(currentSlugMap)) {
        if (localSlug === seg) return enSlug;
      }
      return seg;
    });

    // Map to target language slugs
    const targetSlugMap = SLUG_MAP[targetLang];
    const targetSegments = englishSegments.map(seg => targetSlugMap[seg] || seg);

    // Build new path
    let newPath: string;
    if (targetLang === 'en') {
      newPath = targetSegments.length > 0 ? `/${targetSegments.join('/')}/` : '/';
    } else {
      newPath = targetSegments.length > 0 ? `/${targetLang}/${targetSegments.join('/')}/` : `/${targetLang}/`;
    }

    setLanguage(targetLang);
    setIsOpen(false);
    navigate(newPath);
  };

  const languages = Object.values(SUPPORTED_LANGUAGES);
  const currentLang = SUPPORTED_LANGUAGES[language];

  if (variant === 'footer') {
    return (
      <div className="flex flex-wrap gap-3 items-center">
        <Globe className="h-4 w-4 text-white/40" />
        {languages.map(lang => (
          <button
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={`text-sm transition-colors ${
              lang.code === language
                ? 'text-[#C9A050] font-medium'
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors px-2 py-1.5 rounded-lg hover:bg-white/10"
        title="Language"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm hidden md:inline">{currentLang.name}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden min-w-[160px] z-50 shadow-xl">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${
                lang.code === language
                  ? 'bg-white/10 text-[#C9A050]'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span>{lang.name}</span>
              <span className="text-xs text-white/30">{lang.nameEnglish}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
