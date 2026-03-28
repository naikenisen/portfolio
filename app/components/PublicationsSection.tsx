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
    <section id="publications" className="space-y-10">
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
            className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-zinc-600"
          >
            {/* Side accent */}
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-emerald-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <button
              className="w-full text-left"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold leading-snug text-white">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500">{pub.authors}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-sm text-zinc-500">
                      <em>{pub.venue}</em>
                    </span>
                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                      {pub.year}
                    </span>
                  </div>
                </div>
                <span
                  className={`mt-1 text-zinc-600 transition-transform duration-300 ${
                    expanded === i ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </div>
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
                    className="inline-flex items-center gap-1 text-sm text-emerald-400 transition-colors hover:text-emerald-300 hover:underline"
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
