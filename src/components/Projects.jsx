import { ShieldCheck, Server } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import ProjectCard from "./ProjectCard.jsx";
import foreverImage from "../assets/forever-ecommerce.jpeg";
import doctorImage from "../assets/doctor-appointment.jpeg";

const adminFeatures = [
  "Secure admin login",
  "Add products",
  "Edit products",
  "Delete products",
  "Product management",
  "Order management",
  "Update order status",
  "View all orders",
];

const apiRoutes = [
  "/api/product",
  "/api/user",
  "/api/auth",
  "/api/cart",
  "/api/order",
  "/api/payment",
];

function Projects() {
  return (
    <section id="projects" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          tag="Projects"
          title="Things I've Built"
          subtitle="Applications where I handled the interface, the API and the database."
        />

        <div className="space-y-6">
          <ProjectCard
            image={foreverImage}
            imageAlt="Preview of the Forever E-Commerce storefront"
            name="Forever E-Commerce"
            type="Full-Stack MERN"
            description="A complete MERN e-commerce application with a customer storefront, a secure admin panel and a REST API backend. Customers can browse, search and filter products, choose a size, manage a cart and check out using Stripe, Razorpay or Cash on Delivery."
            tech={[
              "MongoDB",
              "Express.js",
              "React.js",
              "Node.js",
              "Tailwind CSS",
              "JWT",
              "Stripe",
              "Razorpay",
            ]}
            features={[
              "User authentication",
              "Product search & filtering",
              "Product sorting & sizes",
              "Shopping cart & checkout",
              "Stripe & Razorpay payments",
              "Cash on Delivery",
              "Order placement & tracking",
              "Order cancellation",
              "User profile",
              "Fully responsive design",
            ]}
            live="https://forever-frontend-inky-psi.vercel.app/"
            github="https://github.com/Zuhaib33/Forever-E-Commerce-"
          />

          <ProjectCard
            image={doctorImage}
            imageAlt="Preview of the Doctor Appointment booking interface"
            name="Doctor Appointment Management System"
            type="React Frontend"
            description="A responsive React interface for booking doctor appointments. Patients can browse doctors, filter them by specialty, pick a date and time slot, and review their appointment history. Built with React Hooks and Tailwind CSS."
            tech={["React.js", "JavaScript", "Tailwind CSS", "React Hooks"]}
            features={[
              "Doctor listing",
              "Specialty based filtering",
              "Doctor selection",
              "Date & time selection",
              "Appointment booking UI",
              "Authentication interfaces",
              "User profile",
              "Appointment history",
            ]}
            note="Live demo and repository links coming soon"
          />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-panel p-6">
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-mint" />
              <h3 className="font-display text-lg font-semibold text-chalk">
                Forever — Admin Panel
              </h3>
            </div>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {adminFeatures.map((item) => (
                <li key={item} className="font-mono text-[12.5px] text-fog">
                  <span className="mr-2 text-mint">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-panel p-6">
            <div className="flex items-center gap-3">
              <Server size={20} className="text-azure" />
              <h3 className="font-display text-lg font-semibold text-chalk">
                Forever — REST API
              </h3>
            </div>
            <ul className="mt-5 space-y-2">
              {apiRoutes.map((route) => (
                <li key={route} className="font-mono text-[12.5px] text-fog">
                  <span className="mr-2 text-azure">›</span>
                  {route}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] leading-relaxed text-fog">
              Built with Node.js, Express and Mongoose, secured with JWT, and
              covering CRUD operations, authorization, validation and error
              handling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
