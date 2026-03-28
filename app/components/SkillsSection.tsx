"use client";

import { useState } from "react";
import type { SkillDomain } from "../data/cv";

function HexCard({
  domain,
  isActive,
  onClick,
}: {
  domain: SkillDomain;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col items-center transition-transform duration-300 hover:scale-105"
    >
      <div className="relative h-36 w-32 sm:h-40 sm:w-36">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 115">
          <polygon
            points="50,2 98,27 98,88 50,113 2,88 2,27"
            fill={isActive ? `${domain.color}15` : "rgba(255,255,255,0.02)"}
            stroke={isActive ? domain.color : "#2a2a3a"}
            strokeWidth={isActive ? "2" : "1"}
            className="transition-all duration-500"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl sm:text-3xl">{domain.icon}</span>
          <span
            className="mt-2 text-center text-xs font-medium transition-colors duration-300 sm:text-sm"
            style={{ color: isActive ? domain.color : "#a1a1aa" }}
          >
            {domain.name}
          </span>
        </div>
      </div>

      {/* Glow effect when active */}
      {isActive && (
        <div
          className="absolute inset-0 -z-10 rounded-full opacity-20 blur-2xl"
          style={{ backgroundColor: domain.color }}
        />
      )}
    </button>
  );
}

export default function SkillsSection({
  domains,
}: {
  domains: SkillDomain[];
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeDomain = domains.find((d) => d.id === activeId);

  return (
    <section id="skills">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white">
        <span className="relative inline-block">
          Domains of Expertise
          <span className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </span>
      </h2>

      {/* Honeycomb grid */}
      <div className="flex flex-col items-center gap-0">
        {/* Row 1: 3 hexagons */}
        <div className="flex gap-1 sm:gap-3">
          {domains.slice(0, 3).map((d) => (
            <HexCard
              key={d.id}
              domain={d}
              isActive={activeId === d.id}
              onClick={() => setActiveId(activeId === d.id ? null : d.id)}
            />
          ))}
        </div>
        {/* Row 2: 2 hexagons (offset into honeycomb) */}
        <div className="-mt-5 flex gap-1 sm:-mt-7 sm:gap-3">
          {domains.slice(3, 5).map((d) => (
            <HexCard
              key={d.id}
              domain={d}
              isActive={activeId === d.id}
              onClick={() => setActiveId(activeId === d.id ? null : d.id)}
            />
          ))}
        </div>
      </div>

      {/* Expanded skill detail */}
      {activeDomain && (
        <div
          className="animate-fade-in glass-card mt-8 rounded-2xl p-6 sm:p-8"
          style={{ borderColor: `${activeDomain.color}30` }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-2xl">{activeDomain.icon}</span>
            <h3 className="text-xl font-semibold text-white">
              {activeDomain.name}
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {activeDomain.skills.map((skill, i) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-300">{skill.name}</span>
                  <span className="text-zinc-500">{skill.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="animate-skill-fill h-full rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: activeDomain.color,
                      animationDelay: `${i * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
