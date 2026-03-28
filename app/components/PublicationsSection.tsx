"use client";

import { useState } from "react";
import type { Publication } from "../data/cv";

export default function PublicationsSection({
  publications,
}: {
  publications: Publication[];
}) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="publications" className="space-y-8">
      <h2 className="text-center text-3xl font-bold tracking-tight text-white">
        <span className="relative inline-block">
          Publications
          <span className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        </span>
      </h2>

      <div className="space-y-4">
        {publications.map((pub, i) => (
          <div
            key={i}
            className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-zinc-600"
          >
            <button
              className="w-full text-left"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <h3 className="text-lg font-semibold leading-snug text-white">
                {pub.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-500">{pub.authors}</p>
              <p className="mt-1 text-sm text-zinc-500">
                <em>{pub.venue}</em>, {pub.year}
              </p>
            </button>

            {expanded === i && (
              <div className="animate-fade-in mt-4 space-y-3 border-t border-zinc-800 pt-4">
                {pub.abstract && (
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {pub.abstract}
                  </p>
                )}
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-emerald-400 hover:underline"
                  >
                    Read paper ↗
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
