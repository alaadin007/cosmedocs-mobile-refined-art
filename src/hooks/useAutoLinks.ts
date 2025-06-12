
import { useMemo } from 'react';
import { getAllTreatmentNames, getTreatmentRoute } from '@/utils/treatmentLinks';

export const useAutoLinks = () => {
  const treatmentNames = useMemo(() => getAllTreatmentNames(), []);
  
  const createAutoLinkedContent = useMemo(() => {
    return (text: string, linkClassName?: string) => {
      const elements: (string | { type: 'link'; text: string; route: string; key: string })[] = [];
      let remainingText = text;
      let elementKey = 0;

      const pattern = new RegExp(
        `\\b(${treatmentNames.map(name => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`,
        'gi'
      );

      let lastIndex = 0;
      let match;

      while ((match = pattern.exec(remainingText)) !== null) {
        const matchedText = match[0];
        const matchIndex = match.index;
        const route = getTreatmentRoute(matchedText);

        if (matchIndex > lastIndex) {
          elements.push(remainingText.slice(lastIndex, matchIndex));
        }

        if (route) {
          elements.push({
            type: 'link',
            text: matchedText,
            route,
            key: `link-${elementKey++}`
          });
        } else {
          elements.push(matchedText);
        }

        lastIndex = matchIndex + matchedText.length;
      }

      if (lastIndex < remainingText.length) {
        elements.push(remainingText.slice(lastIndex));
      }

      return elements.length > 0 ? elements : [text];
    };
  }, [treatmentNames]);

  return {
    createAutoLinkedContent,
    treatmentNames,
    getTreatmentRoute
  };
};
