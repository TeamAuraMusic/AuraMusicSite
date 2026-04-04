"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={faq.q}
          faq={faq}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full p-6 text-left"
      >
        <h3 className="font-semibold pr-4">{faq.q}</h3>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-zinc-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        style={{ height }}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
      >
        <div ref={contentRef} className="px-6 pb-6">
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}
