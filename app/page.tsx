import cv from "./data/cv";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";
import PublicationsSection from "./components/PublicationsSection";
import ProjectsSection from "./components/ReposSection";
import VenturesSection from "./components/WebsitesSection";
import GeometricBackground from "./components/GeometricBackground";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <GeometricBackground />
      <Navbar />

      <main className="relative mx-auto max-w-5xl px-6 pb-24 pt-8">
        {/* ── Hero / About ──────────────────────────── */}
        <section id="about" className="pb-20 pt-8">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              <span className="gradient-text">{cv.name}</span>
            </h1>
            <p className="text-xl text-zinc-400">{cv.title}</p>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-300">
              {cv.bio}
            </p>

            {/* Contact & socials */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {cv.email && (
                <a
                  href={`mailto:${cv.email}`}
                  className="glass-card rounded-full px-4 py-2 text-sm text-zinc-300 transition-all hover:border-zinc-500 hover:text-white"
                >
                  {cv.email}
                </a>
              )}
              {cv.location && (
                <span className="glass-card rounded-full px-4 py-2 text-sm text-zinc-400">
                  📍 {cv.location}
                </span>
              )}
              {cv.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-full px-4 py-2 text-sm text-zinc-300 transition-all hover:border-zinc-500 hover:text-white"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sections ──────────────────────────────── */}
        <div className="space-y-28">
          <ScrollReveal>
            <SkillsSection domains={cv.skillDomains} />
          </ScrollReveal>
          <ScrollReveal>
            <VenturesSection ventures={cv.ventures} />
          </ScrollReveal>
          <ScrollReveal>
            <ProjectsSection projects={cv.projects} />
          </ScrollReveal>
          <ScrollReveal>
            <PublicationsSection publications={cv.publications} />
          </ScrollReveal>
        </div>
      </main>
    </div>
  );
}
