import { useState } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import {
  profile,
  emailIsPlaceholder,
  linkedinIsPlaceholder,
} from "../data/profile.js";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const subject = `Portfolio message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href =
      `mailto:${profile.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <section id="contact" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          tag="Contact"
          title="Let's Build Something Together"
          subtitle="I'm open to internships, junior developer roles and freelance MERN stack work. Send a message and I'll get back to you."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="h-full rounded-2xl border border-line bg-panel p-6 sm:p-7">
            <h3 className="font-display text-lg font-semibold text-chalk">
              Get in touch
            </h3>

            <div className="mt-6 space-y-3">
              <a
                href={"mailto:" + profile.email}
                className="flex items-center gap-4 rounded-xl border border-line bg-panel2 p-4 transition-colors hover:border-mint/50"
              >
                <Mail size={18} className="shrink-0 text-mint" />
                <span className="min-w-0">
                  <span className="block text-xs text-fog">Email</span>
                  <span className="block truncate font-mono text-[13px] text-chalk">
                    {profile.email}
                  </span>
                </span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-line bg-panel2 p-4 transition-colors hover:border-mint/50"
              >
                <Github size={18} className="shrink-0 text-mint" />
                <span className="min-w-0">
                  <span className="block text-xs text-fog">GitHub</span>
                  <span className="block truncate font-mono text-[13px] text-chalk">
                    github.com/Zuhaib33
                  </span>
                </span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-line bg-panel2 p-4 transition-colors hover:border-azure/50"
              >
                <Linkedin size={18} className="shrink-0 text-azure" />
                <span className="min-w-0">
                  <span className="block text-xs text-fog">LinkedIn</span>
                  <span className="block truncate font-mono text-[13px] text-chalk">
                    {linkedinIsPlaceholder
                      ? "Add your LinkedIn URL"
                      : profile.linkedin.replace("https://www.", "")}
                  </span>
                </span>
              </a>
            </div>

            {(emailIsPlaceholder || linkedinIsPlaceholder) && (
              <p className="mt-6 rounded-lg border border-line bg-ink p-3 font-mono text-[11.5px] leading-5 text-fog">
                Add your real contact details in the profile file to finish this section.
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-line bg-panel p-6 sm:p-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-chalk">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-chalk placeholder:text-fog/60 focus:border-mint focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-chalk"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-chalk placeholder:text-fog/60 focus:border-mint focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-chalk"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What would you like to build?"
                  className="w-full resize-y rounded-lg border border-line bg-ink px-4 py-3 text-sm text-chalk placeholder:text-fog/60 focus:border-mint focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-mint px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                <Send size={16} />
                Send Message
              </button>

              {sent && (
                <p className="flex items-start gap-2.5 rounded-lg border border-mint/30 bg-mint/10 p-3.5 text-[13px] leading-relaxed text-mint">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  Your email app should now be open with this message ready to
                  send. If nothing opened, email me directly at {profile.email}.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
