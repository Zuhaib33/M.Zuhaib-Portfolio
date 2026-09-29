import { Monitor, Server, Database, Wrench } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import SkillCard from "./SkillCard.jsx";

// Each group is just a simple array of strings.
const frontend = [
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "React Hooks",
  "Responsive Web Design",
];

const backend = [
  "Node.js",
  "Express.js",
  "REST APIs",
  "JWT Authentication",
  "CRUD Operations",
  "API Validation",
  "Error Handling",
];

const database = ["MongoDB", "Mongoose"];

const tools = ["Git", "GitHub", "VS Code", "Vite", "Stripe", "Razorpay"];

function Skills() {
  return (
    <section id="skills" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          tag="Skills"
          title="Technologies I Work With"
          subtitle="The stack I use to take an application from the database layer all the way to the browser."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <SkillCard
            icon={<Monitor size={18} />}
            title="Frontend"
            items={frontend}
            color="text-mint"
            note="Component based interfaces built with React Hooks."
          />

          <SkillCard
            icon={<Server size={18} />}
            title="Backend"
            items={backend}
            color="text-azure"
            note="Express servers with protected routes and clean JSON responses."
          />

          <SkillCard
            icon={<Database size={18} />}
            title="Database"
            items={database}
            color="text-mint"
            note="Schemas, relationships and queries written through Mongoose models."
          />

          <SkillCard
            icon={<Wrench size={18} />}
            title="Tools"
            items={tools}
            color="text-azure"
            note="My day to day setup for writing, versioning and shipping work."
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
