# Muhammad Zuhaib — MERN Stack Developer Portfolio

A personal portfolio website built with React, Vite and Tailwind CSS.

Dark developer theme, fully responsive, and organised into small,
readable components — one file per section.

---

## Written for beginners

The code deliberately sticks to basic React:

- plain function components
- `useState` (used in only two files: `Navbar.jsx` and `Contact.jsx`)
- arrays, objects, props and `.map()`
- no `useEffect`, no custom hooks, no Redux, no context

## Technologies used

| Area      | Technology                          |
| --------- | ----------------------------------- |
| Framework | React 18                            |
| Build     | Vite 6                              |
| Styling   | Tailwind CSS v4 (via Vite plugin)   |
| Icons     | lucide-react                        |
| Language  | JavaScript (no TypeScript)          |

Only three runtime dependencies: `react`, `react-dom`, `lucide-react`.

---

## Features

- Responsive navbar with smooth scrolling and a mobile hamburger menu
- Hero section with your photo and a `developer.js` code window
- About section with capability cards
- Skills grouped into Frontend, Backend, Database and Tools
- Project cards with technologies, features and live/GitHub buttons
- Separate cards detailing the Forever admin panel and REST API
- Experience timeline and Education section
- Contact section with a working `mailto:` form (no backend needed)
- Subtle hover animations that respect `prefers-reduced-motion`
- Accessible: semantic HTML, labelled form fields, visible focus rings

---

## Folder structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── public/
│   └── favicon.svg
└── src/
    ├── assets/              # your photo + project screenshots
    ├── data/
    │   └── profile.js       # <-- your email and LinkedIn go here
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── CodeCard.jsx
    │   ├── SectionTitle.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── SkillCard.jsx
    │   ├── Projects.jsx
    │   ├── ProjectCard.jsx
    │   ├── Experience.jsx
    │   ├── Education.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    ├── App.jsx              # only imports and orders the sections
    ├── main.jsx
    └── index.css            # Tailwind import + colour tokens
```

---

## How to install

You need Node.js 18 or newer.

```bash
npm install
```

## How to run

```bash
npm run dev
```

Then open the address shown in the terminal (usually
`http://localhost:5173`).

---

## How to replace your email

Open **`src/data/profile.js`** and change one line:

```js
email: "YOUR_EMAIL@example.com",   // <-- put your real email here
```

That single value is used by the hero email icon, the contact card and
the contact form's `mailto:` link. Nothing else needs editing.

## How to replace your LinkedIn

In the same file, **`src/data/profile.js`**:

```js
linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME",
```

Replace it with your real profile URL. The hero icon, contact card and
footer icon all update automatically.

While these two placeholders are still in place, a small `// TODO` note
appears in the contact section to remind you. It disappears by itself
once you enter real values.

---

## How the contact form works

This portfolio is frontend only — there is no server to receive form
submissions, so the form does **not** silently pretend to send email.

When a visitor clicks **Send Message**, the form builds a `mailto:` link
with the name, email and message already filled in, and opens the
visitor's own email app. A confirmation note then appears below the
button.

If you would rather use a real form service later, replace the
`handleSubmit` function in `src/components/Contact.jsx`.

---

## How to add your own images

Three placeholder images ship in `src/assets/`:

| File                     | Where it appears        | Suggested size  |
| ------------------------ | ----------------------- | --------------- |
| `profile.png`            | Hero section photo      | square, 800x800 |
| `forever-ecommerce.png`  | Forever E-Commerce card | 1200x750        |
| `doctor-appointment.png` | Doctor Appointment card | 1200x750        |

**The easy way:** rename your photo or screenshot to match the file name
above and drop it into `src/assets/`, overwriting the placeholder. No
code changes needed at all.

**If you prefer different file names,** the images are imported at the
top of two files:

```js
// src/components/Hero.jsx
import profilePhoto from "../assets/profile.png";

// src/components/Projects.jsx
import foreverImage from "../assets/forever-ecommerce.png";
import doctorImage from "../assets/doctor-appointment.png";
```

Change the file name in the import to match your new file.

Always keep a clear `imageAlt` description on project cards — screen
readers read it out, and it shows if an image ever fails to load.

---

## How to edit the content

| What you want to change | File to open                        |
| ----------------------- | ----------------------------------- |
| Email / LinkedIn        | `src/data/profile.js`               |
| Intro text and buttons  | `src/components/Hero.jsx`           |
| About paragraphs        | `src/components/About.jsx`          |
| Skill lists             | `src/components/Skills.jsx`         |
| Images                  | `src/assets/`                       |
| Projects                | `src/components/Projects.jsx`       |
| Job details             | `src/components/Experience.jsx`     |
| Degree                  | `src/components/Education.jsx`      |
| Colours and fonts       | `src/index.css` (the `@theme` block)|

Most sections keep their content in a simple array at the top of the
file, rendered with `.map()`. To add a skill or a project, add an item
to that array.

---

## Changing the colours

All colours are defined once in `src/index.css`:

```css
@theme {
  --color-ink: #06080b;    /* page background */
  --color-panel: #0c1117;  /* card background */
  --color-mint: #35e0a1;   /* primary accent */
  --color-azure: #5aa9ff;  /* secondary accent */
  ...
}
```

Change a hex value there and it updates everywhere, because each token
becomes a Tailwind class (`--color-mint` gives you `bg-mint`,
`text-mint`, `border-mint`).

Note: this project uses **Tailwind CSS v4**, which is configured through
the Vite plugin in `vite.config.js`. There is no `tailwind.config.js`
and no `postcss.config.js` to maintain.

---

## How to build for production

```bash
npm run build
```

The finished site is written to the `dist/` folder.

To check the production build locally before uploading:

```bash
npm run preview
```

You can deploy the `dist/` folder to Vercel, Netlify or GitHub Pages.
On Vercel, import the repository and it will detect Vite automatically.

---

## Links

- GitHub — https://github.com/Zuhaib33
- Forever E-Commerce (live) — https://forever-frontend-inky-psi.vercel.app/
- Forever E-Commerce (code) — https://github.com/Zuhaib33/Forever-E-Commerce-

---

© 2026 Muhammad Zuhaib
