import type { Project } from "../data/cv";

export default function ProjectsSection({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-center text-3xl font-bold tracking-tight text-white">
        <span className="relative inline-block">
          Projects
          <span className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:border-zinc-600 hover:shadow-lg hover:shadow-white/5"
          >
            <h3 className="text-lg font-bold text-white transition-colors group-hover:text-amber-400">
              {p.name}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-800 px-2.5 py-0.5 text-xs text-zinc-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
