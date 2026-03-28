import type { Venture } from "../data/cv";

export default function VenturesSection({
  ventures,
}: {
  ventures: Venture[];
}) {
  return (
    <section id="ventures" className="space-y-8">
      <h2 className="text-center text-3xl font-bold tracking-tight text-white">
        <span className="relative inline-block">
          Ventures
          <span className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />
        </span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {ventures.map((v) => (
          <a
            key={v.name}
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:border-zinc-600 hover:shadow-lg hover:shadow-white/5"
          >
            <div className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
              {v.role}
            </div>
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-400">
              {v.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {v.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
              Visit ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
