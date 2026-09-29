import { useState } from "react";
import { Menu, X } from "lucide-react";

// The navigation links.
// "id" must match the id of the section in App.jsx
const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  // One piece of state: is the mobile menu open or closed?
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-line bg-ink/90 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        {/* Logo */}
        <a href="#home" className="font-mono text-base font-bold text-chalk">
          <span className="text-mint">&lt;</span>
          zuhaib
          <span className="text-azure"> /&gt;</span>
        </a>

        {/* Links for tablet and desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={"#" + link.id}
                className="rounded-md px-3.5 py-2 text-sm text-fog transition-colors hover:text-mint"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button for mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-md p-2 text-chalk transition-colors hover:bg-panel md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu - only shown when menuOpen is true */}
      {menuOpen && (
        <ul className="border-t border-line bg-ink px-5 py-3 md:hidden">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={"#" + link.id}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-line/60 py-3 text-fog transition-colors last:border-0 hover:text-mint"
              >
                <span className="mr-2 font-mono text-mint">#</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
