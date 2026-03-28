"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "ventures", label: "Ventures" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
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
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-1 px-6 sm:gap-2">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`relative px-3 py-4 text-sm font-medium transition-colors ${
              active === s.id
                ? "text-white"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {s.label}
            {active === s.id && (
              <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}
