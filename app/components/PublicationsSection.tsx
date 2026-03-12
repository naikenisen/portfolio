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
    <section id="publications" className="space-y-6">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Publications
      </h2>

      <ul className="space-y-4">
        {publications.map((pub, i) => (
          <li
            key={i}
            className="rounded-xl border border-zinc-200 p-5 transition-shadow hover:shadow-md dark:border-zinc-800"
          >
            <button
              className="w-full text-left"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {pub.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {pub.authors} — <em>{pub.venue}</em>, {pub.year}
              </p>
            </button>

            {expanded === i && (
              <div className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                {pub.abstract && <p>{pub.abstract}</p>}
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Read paper ↗
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
