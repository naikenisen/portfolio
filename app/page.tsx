import cv from "./data/cv";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";
import PublicationsSection from "./components/PublicationsSection";
import ReposSection from "./components/ReposSection";
import WebsitesSection from "./components/WebsitesSection";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl bg-white px-6 py-12 dark:bg-black sm:px-16">
        <Navbar />

        {/* ── Hero / About ──────────────────────────── */}
        <section id="about" className="space-y-4 pb-16 pt-4">
          <div className="flex items-center gap-5">
            {cv.avatarUrl && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={cv.avatarUrl}
                alt={cv.name}
                className="h-20 w-20 rounded-full object-cover"
              />
            )}
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {cv.name}
              </h1>
              <p className="text-lg text-zinc-500 dark:text-zinc-400">
                {cv.title}
              </p>
            </div>
          </div>

          <p className="max-w-xl leading-7 text-zinc-600 dark:text-zinc-300">
            {cv.bio}
          </p>

          {/* Contact & socials */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            {cv.email && (
              <a
                href={`mailto:${cv.email}`}
                className="rounded-full border border-zinc-200 px-3 py-1 text-zinc-600 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:text-zinc-400"
              >
                {cv.email}
              </a>
            )}
            {cv.location && (
              <span className="rounded-full border border-zinc-200 px-3 py-1 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                📍 {cv.location}
              </span>
            )}
            {cv.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-200 px-3 py-1 text-zinc-600 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:text-zinc-400"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </section>

        {/* ── Sections ──────────────────────────────── */}
        <div className="space-y-20 pb-24">
          <SkillsSection skills={cv.skills} />
          <PublicationsSection publications={cv.publications} />
          <ReposSection repos={cv.repos} />
          <WebsitesSection websites={cv.websites} />
        </div>
      </main>
    </div>
  );
}
