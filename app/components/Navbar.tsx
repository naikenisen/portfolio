"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "publications", label: "Publications" },
  { id: "repos", label: "Repos" },
  { id: "websites", label: "Sites" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 -mx-6 mb-8 flex gap-1 overflow-x-auto border-b border-zinc-200 bg-white/80 px-6 backdrop-blur dark:border-zinc-800 dark:bg-black/80 sm:-mx-16 sm:px-16">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`whitespace-nowrap border-b-2 px-3 py-3 text-sm font-medium transition-colors ${
            active === s.id
              ? "border-zinc-900 text-zinc-900 dark:border-zinc-100 dark:text-zinc-100"
              : "border-transparent text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
          }`}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
