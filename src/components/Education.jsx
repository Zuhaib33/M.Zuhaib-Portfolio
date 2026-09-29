import { GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";

function Education() {
  return (
    <section id="education" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle tag="Education" title="Education" />

        <div className="flex flex-wrap items-center gap-5 rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-azure/40 sm:p-8">
          <span className="rounded-lg border border-line bg-panel2 p-3">
            <GraduationCap size={24} className="text-azure" />
          </span>

          <div className="min-w-0 flex-1">
            <h3 className="font-display text-lg font-bold text-chalk sm:text-xl">
              Bachelor of Science in Computer Science (BSCS)
            </h3>
            <p className="mt-1.5 text-sm text-fog">
              Currently studying — building a foundation in programming, data
              structures, databases and software development.
            </p>
          </div>

          <span className="rounded-md border border-azure/30 bg-azure/10 px-3 py-1.5 font-mono text-xs text-azure">
            Complete
          </span>
        </div>
      </div>
    </section>
  );
}

export default Education;
