import type { Website } from "../data/cv";

export default function WebsitesSection({
  websites,
}: {
  websites: Website[];
}) {
  return (
    <section id="websites" className="space-y-6">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Websites & Demos
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {websites.map((site) => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-xl border border-zinc-200 transition-all hover:border-zinc-400 hover:shadow-md dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            {/* Optional screenshot */}
            {site.imageUrl && (
              <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={site.imageUrl}
                  alt={site.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-5">
              <h3 className="font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                {site.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {site.description}
              </p>
              <span className="mt-3 inline-block text-xs text-blue-600 dark:text-blue-400">
                Visit ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
