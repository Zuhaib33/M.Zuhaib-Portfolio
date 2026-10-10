import { Briefcase } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";

const responsibilities = [
  "Build responsive, database-driven web applications using the MERN stack.",
  "Develop frontend interfaces with React.js and Tailwind CSS.",
  "Create REST APIs with Node.js and Express.js, including CRUD operations.",
  "Model and manage application data in MongoDB using Mongoose.",
  "Secure routes and user sessions with JWT authentication.",
  "Integrate payment methods into e-commerce projects.",
  "Track work and publish projects using Git and GitHub.",
];

const stack = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT",
  "Tailwind CSS",
  "Git / GitHub",
];

function Experience() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle tag="Experience" title="Where I've Worked" />

        <div className="relative border-l border-line pl-6 sm:pl-10">
          <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-ink bg-mint" />

          <div className="rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-mint/40 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="rounded-lg border border-line bg-panel2 p-2.5">
                  <Briefcase size={20} className="text-mint" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-chalk">
                    Freelance Full-Stack Developer
                  </h3>
                  <p className="mt-1 text-sm text-fog">
                    Self-Employed — Remote
                  </p>
                </div>
              </div>

              <span className="rounded-md border border-mint/30 bg-mint/10 px-3 py-1.5 font-mono text-xs text-mint">
                Jan 2026 – Present
              </span>
            </div>

            <ul className="mt-6 space-y-2.5">
              {responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14px] leading-relaxed text-fog"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-azure" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 border-t border-line pt-5">
              <ul className="flex flex-wrap gap-2">
                {stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-panel2 px-2.5 py-1 font-mono text-[11.5px] text-fog"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
