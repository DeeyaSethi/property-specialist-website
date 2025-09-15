"use client";

import { useState } from "react";

export type AccordionItem = { id: string; question: string; answer: string };

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div className="divide-y rounded-lg border bg-white">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="p-4">
            <button
              className="w-full text-left flex items-center justify-between gap-2"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span className="font-medium text-[--color-navy]">{item.question}</span>
              <span className="ml-2 select-none text-[--color-brand]">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen ? (
              <div className="mt-2 text-sm text-[--color-foreground]">{item.answer}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}


