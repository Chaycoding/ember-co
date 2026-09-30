"use client";

import { useState } from "react";

type Link = { label: string; href: string };

export default function MobileMenu({ links }: { links: Link[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle menu"
        className="rounded-full border border-cream/40 px-4 py-2 text-xs uppercase tracking-[0.2em]"
      >
        {open ? "Close" : "Explore"}
      </button>
      {open && (
        <ul className="absolute inset-x-0 top-full space-y-5 bg-charcoal/95 px-6 py-8 text-sm uppercase tracking-[0.2em]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}