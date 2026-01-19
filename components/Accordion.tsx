'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-beige transition-colors"
          >
            <span className="font-semibold text-gray-800">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-600 transition-transform ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-white text-gray-600 border-t border-gray-200">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
