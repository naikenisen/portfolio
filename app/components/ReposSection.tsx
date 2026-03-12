import type { GitRepo } from "../data/cv";

const langColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  Rust: "bg-orange-500",
  Go: "bg-cyan-500",
};

export default function ReposSection({ repos }: { repos: GitRepo[] }) {
  return (
    <section id="repos" className="space-y-6">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Open Source & Projects
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-xl border border-zinc-200 p-5 transition-all hover:border-zinc-400 hover:shadow-md dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <div>
              <h3 className="font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                {repo.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {repo.description}
              </p>
            </div>

            <div className="mt-4 flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
              {repo.language && (
                <span className="flex items-center gap-1">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${langColors[repo.language] ?? "bg-zinc-400"}`}
                  />
                  {repo.language}
                </span>
              )}
              {repo.stars !== undefined && (
                <span className="flex items-center gap-1">★ {repo.stars}</span>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
