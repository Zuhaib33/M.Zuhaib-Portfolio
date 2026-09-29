import { Github, Linkedin, ArrowUp } from "lucide-react";
import { profile } from "../data/profile.js";

function Footer() {
  return (
    <footer className="border-t border-line bg-panel/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base font-bold text-chalk">
            {profile.name}
          </p>
          <p className="mt-1 font-mono text-[13px] text-mint">{profile.role}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-lg border border-line bg-panel p-2.5 text-fog transition-colors hover:border-mint hover:text-mint"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-lg border border-line bg-panel p-2.5 text-fog transition-colors hover:border-azure hover:text-azure"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="rounded-lg border border-line bg-panel p-2.5 text-fog transition-colors hover:border-chalk hover:text-chalk"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-5 font-mono text-xs text-fog sm:px-8">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
