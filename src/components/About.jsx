import { Layers, Server, ShieldCheck, GitBranch } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";

function InfoCard({ icon, title, text }) {
  return (
    <div className="rounded-xl border border-line bg-panel p-5 transition-colors hover:border-mint/50">
      <span className="text-mint">{icon}</span>
      <h3 className="mt-4 font-display text-base font-semibold text-chalk">
        {title}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-fog">{text}</p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle tag="About" title="About Me" />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="space-y-5 text-[15px] leading-relaxed text-fog">
            <p>
              I am recently completed my graduation in Computer Science and a MERN Stack Developer. My
              focus is web development — specifically, building practical
              full-stack applications where the frontend, the API and the
              database are all part of the same piece of work.
            </p>
            <p>
              On the frontend I work with{" "}
              <span className="text-chalk">React</span> and{" "}
              <span className="text-chalk">Tailwind CSS</span>, using React
              Hooks and component based structure to keep interfaces responsive
              and readable. On the backend I build REST APIs with{" "}
              <span className="text-chalk">Node.js</span> and{" "}
              <span className="text-chalk">Express</span>, secure them with{" "}
              <span className="text-chalk">JWT</span>, and model the data in{" "}
              <span className="text-chalk">MongoDB</span> through Mongoose.
            </p>
            <p>
              I enjoy the problem solving side of this work — figuring out why a
              request fails, how data should be shaped, or how to make a
              checkout flow behave correctly across three payment methods.
            </p>

            <div className="rounded-lg border border-line bg-panel p-4 font-mono text-[13px] leading-6">
              <span className="text-fog">Currently</span>
              <br />
              <span className="text-[#c792ea]">studying</span>
              <span className="text-fog">: </span>
              <span className="text-[#ffcb8b]">"BS Computer Science"</span>
              <br />
              <span className="text-[#c792ea]">building</span>
              <span className="text-fog">: </span>
              <span className="text-[#ffcb8b]">"Full-stack MERN apps"</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard
              icon={<Layers size={22} />}
              title="MERN Stack"
              text="MongoDB, Express.js, React.js and Node.js working together in one application."
            />
            <InfoCard
              icon={<Server size={22} />}
              title="REST APIs"
              text="Express routes with full CRUD operations, validation and error handling."
            />
            <InfoCard
              icon={<ShieldCheck size={22} />}
              title="JWT Authentication"
              text="Token based login, protected routes and role based admin access."
            />
            <InfoCard
              icon={<GitBranch size={22} />}
              title="Git & GitHub"
              text="Version control, branches and deployed projects hosted on GitHub."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
