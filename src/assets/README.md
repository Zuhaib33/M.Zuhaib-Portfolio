# assets

These three images are placeholders. Replace them with your own files,
keep the same file names, and the website updates automatically.

| File                      | Used in                    | Suggested size |
| ------------------------- | -------------------------- | -------------- |
| `profile.png`             | Hero section photo         | square, 800x800 |
| `forever-ecommerce.png`   | Forever E-Commerce card    | 1200x750       |
| `doctor-appointment.png`  | Doctor Appointment card    | 1200x750       |

## Easiest way to replace an image

1. Take a screenshot of your project (or pick your photo).
2. Rename it to match the file name in the table above.
3. Drop it into this folder, overwriting the placeholder.

Nothing in the code needs to change.

## If you want to use a different file name

The images are imported at the top of two files:

- `src/components/Hero.jsx`

  ```js
  import profilePhoto from "../assets/profile.png";
  ```

- `src/components/Projects.jsx`

  ```js
  import foreverImage from "../assets/forever-ecommerce.png";
  import doctorImage from "../assets/doctor-appointment.png";
  ```

Change the file name in the import to match your new file.

## Adding a third project image

1. Put the image in this folder, e.g. `my-project.png`
2. In `src/components/Projects.jsx`, add an import at the top:

   ```js
   import myProjectImage from "../assets/my-project.png";
   ```

3. Add another `<ProjectCard ... />` and pass `image={myProjectImage}`.

Always write a clear `imageAlt` description — screen readers use it.
