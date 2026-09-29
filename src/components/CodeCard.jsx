// A small code window shown in the hero section.
// This is just styled text - no animation logic, no extra components.

function CodeCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-2xl shadow-black/60">
      {/* window title bar */}
      <div className="flex items-center gap-2 border-b border-line bg-panel2 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-fog">developer.js</span>
      </div>

      {/* the code */}
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-7 sm:text-[13px]">
        <code>
          <span className="text-[#c792ea]">const</span>{" "}
          <span className="text-azure">developer</span>{" "}
          <span className="text-fog">= {"{"}</span>
          {"\n  "}
          <span className="text-mint">name</span>
          <span className="text-fog">: </span>
          <span className="text-[#ffcb8b]">"Muhammad Zuhaib"</span>
          <span className="text-fog">,</span>
          {"\n  "}
          <span className="text-mint">role</span>
          <span className="text-fog">: </span>
          <span className="text-[#ffcb8b]">"MERN Stack Developer"</span>
          <span className="text-fog">,</span>
          {"\n  "}
          <span className="text-mint">skills</span>
          <span className="text-fog">: [</span>
          <span className="text-[#ffcb8b]">"MongoDB"</span>
          <span className="text-fog">, </span>
          <span className="text-[#ffcb8b]">"Express"</span>
          <span className="text-fog">,</span>
          {"\n            "}
          <span className="text-[#ffcb8b]">"React"</span>
          <span className="text-fog">, </span>
          <span className="text-[#ffcb8b]">"Node"</span>
          <span className="text-fog">],</span>
          {"\n  "}
          <span className="text-mint">available</span>
          <span className="text-fog">: </span>
          <span className="text-[#c792ea]">true</span>
          <span className="text-fog">,</span>
          {"\n"}
          <span className="text-fog">{"};"}</span>
        </code>
        {/* blinking cursor */}
        <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-mint animate-blink" />
      </pre>
    </div>
  );
}

export default CodeCard;
