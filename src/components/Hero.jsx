import { Github, Linkedin, Mail } from "lucide-react";
import CodeCard from "./CodeCard.jsx";
import { profile } from "../data/profile.js";

// The photo is imported from the assets folder.
// To use your own picture, replace src/assets/profile.png
import profilePhoto from "../assets/profile.png";

// Short list of qualities shown under the heading
const qualities = [
  "Problem Solver",
  "Full-Stack Developer",
  "REST API Developer",
  "Responsive Web Developer",
];

function Hero() {
  return (
    <section id="home" className="px-5 pt-28 pb-20 sm:px-8 md:pt-36 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* ---------- Left side: text ---------- */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 font-mono text-xs text-fog">
            <span className="h-2 w-2 rounded-full bg-mint" />
            Open to internships and junior roles
          </p>

          <h1 className="mt-6 font-display text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-mint to-azure bg-clip-text text-transparent">
              Muhammad Zuhaib
            </span>
          </h1>

          <p className="mt-4 font-mono text-lg text-chalk sm:text-xl">
            MERN Stack Developer
          </p>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-fog">
            I build responsive, full-stack web applications using MongoDB,
            Express.js, React.js and Node.js — from the database and REST APIs
            right through to the interface people actually use.
          </p>

          {/* qualities */}
          <ul className="mt-6 flex flex-wrap gap-2">
            {qualities.map((item) => (
              <li
                key={item}
                className="rounded-md border border-line bg-panel px-3 py-1.5 font-mono text-xs text-fog"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-mint px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-line bg-panel px-5 py-3 text-sm font-semibold text-chalk transition-colors hover:border-azure hover:text-azure"
            >
              Contact Me
            </a>
          </div>

          {/* social links */}
          <div className="mt-8 flex gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="rounded-lg border border-line bg-panel p-2.5 text-fog transition-colors hover:border-mint hover:text-mint"
            >
              <Github size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-lg border border-line bg-panel p-2.5 text-fog transition-colors hover:border-azure hover:text-azure"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={"mailto:" + profile.email}
              aria-label="Send an email"
              className="rounded-lg border border-line bg-panel p-2.5 text-fog transition-colors hover:border-azure hover:text-azure"
            >
              <Mail size={19} />
            </a>
          </div>
        </div>

        {/* ---------- Right side: photo + code window ---------- */}
        <div className="mx-auto w-full max-w-md">
          <img
            src={profilePhoto}
            alt="Muhammad Zuhaib, MERN Stack Developer"
            className="aspect-square w-full rounded-2xl border border-line object-cover"
          />

          {/* the code window sits under the photo */}
          <div className="mt-6">
            <CodeCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
