import type { Venture } from "../data/cv";

export default function VenturesSection({
  ventures,
}: {
  ventures: Venture[];
}) {
  return (
    <section id="ventures" className="space-y-10">
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
            className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-zinc-600 hover:shadow-lg hover:shadow-rose-500/5"
          >
            {/* Accent top border */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="mb-3 text-xs font-medium uppercase tracking-wider text-rose-400/70">
              {v.role}
            </div>
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-rose-400">
              {v.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {v.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs text-rose-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
              Visit ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
