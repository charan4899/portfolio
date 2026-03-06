"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { LINKS } from "@/lib/links";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Premium background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90" />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 md:pt-32">
        <div className="max-w-5xl w-full text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-r from-indigo-500/40 via-cyan-500/30 to-emerald-500/30" />

                <div className="relative rounded-full p-[3px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500">
                  <div className="rounded-full bg-black/60 backdrop-blur-md p-[6px] border border-white/10">
                    <Image
                      src="/profile.png"
                      alt="Sai Charan Gandi"
                      width={160}
                      height={160}
                      priority
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>

                <div className="pointer-events-none absolute -top-1 -left-2 h-10 w-10 rounded-full bg-white/10 blur-xl" />
              </motion.div>
            </motion.div>
            Sai Charan Gandi
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="text-sm tracking-widest text-gray-400 mb-4"
          >
            DATA ENGINEER • PYTHON • SQL • AZURE • AWS
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10"
          >
            I build scalable ETL pipelines, cloud data platforms, and analytics
            systems that transform raw data into business-ready insights.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              View Projects
            </a>

            <a
              href={LINKS.linkedin}
              target="_blank"
              className="px-6 py-3 rounded-xl border border-gray-700 hover:border-gray-400 transition"
            >
              LinkedIn
            </a>

            <a
              href={LINKS.github}
              target="_blank"
              className="px-6 py-3 rounded-xl border border-gray-700 hover:border-gray-400 transition"
            >
              GitHub
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl border border-gray-700 hover:border-gray-400 transition"
            >
              Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24 px-6 border-t border-gray-800/60">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="rounded-3xl border border-gray-800 bg-white/5 backdrop-blur-md p-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About</h2>

            <p className="text-gray-300 leading-relaxed">
              I enjoy working with data to understand what is happening beneath the surface
              and how that information can be transformed into something meaningful and useful.
              I’m especially interested in building systems that not only process data efficiently,
              but also make it easier to analyze, interpret, and act on.
            </p>

            <p className="text-gray-400 leading-relaxed mt-4">
              What excites me most is solving challenging problems under pressure. I like situations
              where I need to think logically, break down complexity, and find a clear path forward.
              Along with strong analytical thinking, I value communication, adaptability, and working
              collaboratively to build practical data-driven solutions.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-gray-800 bg-black/30 p-5">
                <h3 className="text-white font-semibold mb-2">Analytical Thinking</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Strong problem-solving ability with a logical mindset and a focus on understanding
                  what data is really saying.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-black/30 p-5">
                <h3 className="text-white font-semibold mb-2">Communication</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Comfortable collaborating with teams, discussing ideas clearly, and turning technical
                  work into practical outcomes.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-black/30 p-5">
                <h3 className="text-white font-semibold mb-2">Adaptability</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Quick to learn new tools, adjust to new challenges, and stay aligned with evolving
                  technologies and project needs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="relative py-16 px-6 border-t border-gray-800/60">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-10 text-gray-300">
            Technologies I Work With
          </h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              "Python",
              "SQL",
              "PostgreSQL",
              "Pandas",
              "Flask",
              "Streamlit",
              "AWS",
              "Azure",
              "GitHub Actions",
            ].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 rounded-xl border border-gray-700 bg-black/40 text-sm text-gray-200 hover:border-gray-500 transition"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="relative py-24 px-6 border-t border-gray-800/60">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="rounded-3xl border border-gray-800 bg-white/5 backdrop-blur-md p-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              My academic background built a strong foundation in computer science, data systems,
              algorithms, and modern analytical thinking.
            </p>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-gray-800 bg-black/30 p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <p className="font-semibold text-white">
                    Master of Science in Computer Science
                  </p>
                  <p className="text-gray-400 text-sm">Aug 2021 – Dec 2022</p>
                </div>
                <p className="text-gray-400 mt-1">Kennesaw State University, GA, USA</p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-black/30 p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <p className="font-semibold text-white">
                    Bachelor of Technology in Computer Science
                  </p>
                  <p className="text-gray-400 text-sm">Jul 2016 – Sep 2020</p>
                </div>
                <p className="text-gray-400 mt-1">
                  Anil Neerukonda Institute of Technology and Sciences, AP, India
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* PROJECTS */}
      <section id="projects" className="relative py-24 px-6 border-t border-gray-800/60">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <p className="text-gray-400 mt-2">
              A selection of systems I’ve built end-to-end.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            variants={fadeUp}
            className="grid gap-6"
          >
            {/* Highlighted project */}
            <div className="rounded-3xl border border-indigo-500/40 bg-white/5 backdrop-blur-md p-8 hover:border-indigo-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/40 transition duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                  Featured Project
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    YouTube Trending Analytics Pipeline
                  </h3>

                  <p className="text-gray-300 leading-relaxed max-w-2xl">
                    Automated data pipeline that collects trending YouTube videos across
                    multiple countries using the YouTube Data API, stores daily snapshots
                    in PostgreSQL (Neon), and visualizes insights through a Streamlit
                    analytics dashboard.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "Python",
                      "YouTube API",
                      "PostgreSQL",
                      "Pandas",
                      "Streamlit",
                      "Plotly",
                      "GitHub Actions",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs border border-gray-700 text-gray-200 bg-black/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 md:flex-col">
                  <a
                    href="/projects/youtube-trending-analytics"
                    className="px-5 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition text-center"
                  >
                    Case Study
                  </a>

                  <a
                    href={LINKS.youtubeTrendingLive}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 rounded-xl border border-gray-700 hover:border-gray-400 transition text-center"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Sales analytics */}
            <div className="rounded-3xl border border-gray-800 bg-white/5 backdrop-blur-md p-8 hover:border-gray-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 transition duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Sales Analytics Platform
                  </h3>
                  <p className="text-gray-300 leading-relaxed max-w-2xl">
                    Full-stack analytics system using Flask + SQLite + REST APIs.
                    Includes CSV ingestion, KPI dashboard, paginated reports, and
                    advanced analytics charts.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "Flask",
                      "SQLite",
                      "REST APIs",
                      "Chart.js",
                      "Pagination",
                      "CSV Ingestion",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs border border-gray-700 text-gray-200 bg-black/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 md:flex-col">
                  <a
                    href="/projects/sales-analytics"
                    className="px-5 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition text-center"
                  >
                    Case Study
                  </a>

                  <a
                    href={LINKS.salesDashboardLive}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 rounded-xl border border-gray-700 hover:border-gray-400 transition text-center"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONNECT */}
      <section id="connect" className="relative py-24 px-6 border-t border-gray-800/60">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="rounded-3xl border border-gray-800 bg-white/5 backdrop-blur-md p-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Connect</h2>

            <p className="text-gray-400 max-w-2xl mx-auto mb-4">
              The best conversations often start with a simple Hello! So feel free to drop one in my DMs!
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-gray-700 bg-black/30 hover:border-blue-400 hover:bg-blue-500/10 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-blue-400 group-hover:scale-110 transition"
                >
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17V10.9H6.3V17H8.34ZM7.32 10.06A1.18 1.18 0 1 0 7.32 7.7A1.18 1.18 0 0 0 7.32 10.06ZM17.7 17V13.56C17.7 11.72 16.72 10.76 15.42 10.76C14.37 10.76 13.89 11.34 13.63 11.74V10.9H11.59C11.62 11.46 11.59 17 11.59 17H13.63V13.6C13.63 13.42 13.64 13.24 13.7 13.11C13.83 12.75 14.13 12.38 14.63 12.38C15.28 12.38 15.54 12.88 15.54 13.61V17H17.7Z" />
                </svg>
                <span className="text-white font-medium">LinkedIn</span>
              </a>

              <a
                href={LINKS.email}
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-gray-700 bg-black/30 hover:border-emerald-400 hover:bg-emerald-500/10 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition"
                >
                  <path d="M3 5.25A2.25 2.25 0 0 1 5.25 3H18.75A2.25 2.25 0 0 1 21 5.25V18.75A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25ZM5.56 6.75L12 11.34L18.44 6.75H5.56ZM19.5 8.16L12.44 13.2A.75.75 0 0 1 11.56 13.2L4.5 8.16V18.75C4.5 19.16 4.84 19.5 5.25 19.5H18.75C19.16 19.5 19.5 19.16 19.5 18.75V8.16Z" />
                </svg>
                <span className="text-white font-medium">Email</span>
              </a>

              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-gray-700 bg-black/30 hover:border-pink-400 hover:bg-pink-500/10 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-pink-400 group-hover:scale-110 transition"
                >
                  <path d="M7.5 2H16.5A5.5 5.5 0 0 1 22 7.5V16.5A5.5 5.5 0 0 1 16.5 22H7.5A5.5 5.5 0 0 1 2 16.5V7.5A5.5 5.5 0 0 1 7.5 2ZM7.68 3.8A3.88 3.88 0 0 0 3.8 7.68V16.32A3.88 3.88 0 0 0 7.68 20.2H16.32A3.88 3.88 0 0 0 20.2 16.32V7.68A3.88 3.88 0 0 0 16.32 3.8H7.68ZM17.25 5.5A1.25 1.25 0 1 1 17.25 8A1.25 1.25 0 0 1 17.25 5.5ZM12 7A5 5 0 1 1 7 12A5 5 0 0 1 12 7ZM12 8.8A3.2 3.2 0 1 0 15.2 12A3.2 3.2 0 0 0 12 8.8Z" />
                </svg>
                <span className="text-white font-medium">Instagram</span>
              </a>
            </motion.div>
          </motion.div>

          <p className="text-center text-gray-500 text-sm mt-8">
            © {new Date().getFullYear()} Sai Charan Gandi
          </p>
        </div>
      </section>
    </main>
  );
}