
import React from 'react';
import { Link } from 'react-router-dom';
import { getAllTreatmentNames, getTreatmentRoute } from '@/utils/treatmentLinks';

interface AutoLinkedTextProps {
  children: string;
  className?: string;
  linkClassName?: string;
}

export const AutoLinkedText: React.FC<AutoLinkedTextProps> = ({ 
  children, 
  className = "",
  linkClassName = "text-yellow-400 hover:text-yellow-300 underline transition-colors"
}) => {
  const processText = (text: string): (string | JSX.Element)[] => {
    const treatmentNames = getAllTreatmentNames();
    const elements: (string | JSX.Element)[] = [];
    let remainingText = text;
    let elementKey = 0;

    // Create a pattern that matches treatment names (case insensitive)
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

      // Add text before the match
      if (matchIndex > lastIndex) {
        elements.push(remainingText.slice(lastIndex, matchIndex));
      }

      // Add the linked treatment name
      if (route) {
        elements.push(
          <Link
            key={`link-${elementKey++}`}
            to={route}
            className={linkClassName}
            title={`Learn more about ${matchedText}`}
          >
            {matchedText}
          </Link>
        );
      } else {
        // If no route found, just add the text without linking
        elements.push(matchedText);
      }

      lastIndex = matchIndex + matchedText.length;
    }

    // Add remaining text after the last match
    if (lastIndex < remainingText.length) {
      elements.push(remainingText.slice(lastIndex));
    }

    return elements.length > 0 ? elements : [text];
  };

  const processedContent = processText(children);

  return (
    <span className={className}>
      {processedContent.map((element, index) => 
        typeof element === 'string' ? element : React.cloneElement(element, { key: `${element.key}-${index}` })
      )}
    </span>
  );
};

export default AutoLinkedText;
