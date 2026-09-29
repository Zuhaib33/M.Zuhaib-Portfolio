import { Github, ExternalLink, Check } from "lucide-react";

// One project card. Everything comes in through props from Projects.jsx
function ProjectCard({
  image,
  imageAlt,
  name,
  type,
  description,
  tech,
  features,
  live,
  github,
  note,
}) {
  return (
    <article className="grid gap-8 rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-mint/40 md:grid-cols-2 md:p-8">
      {/* project picture */}
      <div className="order-1 md:order-none">
        <img
          src={image}
          alt={imageAlt}
          className="w-full rounded-lg border border-line"
        />
      </div>

      {/* project details */}
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-xl font-bold text-chalk sm:text-2xl">
            {name}
          </h3>
          <span className="rounded-md border border-line bg-panel2 px-2 py-1 font-mono text-[11px] text-fog">
            {type}
          </span>
        </div>

        <p className="mt-3 text-[14.5px] leading-relaxed text-fog">
          {description}
        </p>

        {/* technologies */}
        <ul className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <li
              key={item}
              className="rounded-md border border-line bg-panel2 px-2.5 py-1 font-mono text-[11.5px] text-mint"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* features */}
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {features.map((item) => (
            <li key={item} className="flex gap-2 text-[13px] text-fog">
              <Check size={14} className="mt-0.5 shrink-0 text-azure" />
              {item}
            </li>
          ))}
        </ul>

        {/* buttons - only shown when a link exists */}
        <div className="mt-7 flex flex-wrap gap-3">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-mint px-4 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel2 px-4 py-2.5 text-sm font-semibold text-chalk transition-colors hover:border-azure hover:text-azure"
            >
              <Github size={16} />
              View Code
            </a>
          )}

          {note && (
            <p className="w-full font-mono text-[11.5px] text-fog">{note}</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
