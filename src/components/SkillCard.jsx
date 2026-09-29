// One skill group card.
// The icon is passed in as a prop from Skills.jsx, for example:
// <SkillCard icon={<Monitor />} title="Frontend" items={["React.js"]} />

function SkillCard({ icon, title, items, note, color }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-line bg-panel p-5">
      <div className="flex items-center gap-3">
        <span className={"rounded-lg border border-line bg-panel2 p-2 " + color}>
          {icon}
        </span>
        <h3 className="font-display text-lg font-semibold text-chalk">
          {title}
        </h3>
      </div>

      {/* the list of skills */}
      <ul className="mt-5 flex-1 space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 font-mono text-[13px] text-fog"
          >
            <span className={color}>▹</span>
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-6 border-t border-line pt-4 text-[12.5px] leading-relaxed text-fog">
        {note}
      </p>
    </div>
  );
}

export default SkillCard;
