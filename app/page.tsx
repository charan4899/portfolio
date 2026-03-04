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
                {/* glow */}
                <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-r from-indigo-500/40 via-cyan-500/30 to-emerald-500/30" />

                {/* gradient ring */}
                <div className="relative rounded-full p-[3px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500">
                  {/* glass frame */}
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

                {/* small highlight */}
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
              I design data pipelines and analytics layers that are reliable, efficient,
              and easy to scale. My work focuses on clean data modeling, SQL optimization,
              and building APIs that power dashboards and reporting systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Python",
                    "SQL",
                    "SQLite / PostgreSQL",
                    "ETL Pipelines",
                    "Data Modeling",
                    "REST APIs",
                    "Cloud (AWS/Azure)",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm border border-gray-700 text-gray-200 bg-black/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
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
            <div className="mt-8 grid gap-4">
                    <div className="rounded-2xl border border-gray-800 bg-black/30 p-5">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                          <p className="font-medium text-white">
                            Master of Science in Computer Science
                          </p>
                          <p className="text-gray-400 text-sm">Aug 2021 – Dec 2022</p>
                        </div>
                        <p className="text-gray-400 mt-1">Kennesaw State University, GA, USA</p>
                      </div>

                      <div className="rounded-2xl border border-gray-800 bg-black/30 p-5">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                          <p className="font-medium text-white">
                            Bachelor of Technology in Computer Science
                          </p>
                          <p className="text-gray-400 text-sm">Jul 2016 – Sep 2020</p>
                        </div>
                        <p className="text-gray-400 mt-1">Anil Neerukonda Institute of Technology and Sciences, AP, India</p>
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
            <div className="rounded-3xl border border-gray-800 bg-white/5 backdrop-blur-md p-8 hover:border-gray-600 transition">
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
                    {["Flask", "SQLite", "REST APIs", "Chart.js", "Pagination", "CSV Ingestion"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs border border-gray-700 text-gray-200 bg-black/30"
                        >
                          {tag}
                        </span>
                      )
                    )}
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

      {/* CONTACT */}
      <section id="contact" className="relative py-24 px-6 border-t border-gray-800/60">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="rounded-3xl border border-gray-800 bg-white/5 backdrop-blur-md p-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Contact</h2>
            <p className="text-gray-400 mb-6">
              Want to collaborate or discuss data engineering opportunities?
            </p>
            <p className="text-lg font-medium">charan4899@gmail.com</p>
          </motion.div>

          <p className="text-center text-gray-500 text-sm mt-8">
            © {new Date().getFullYear()} Sai Charan Gandi
          </p>
        </div>
      </section>
    </main>
  );
}