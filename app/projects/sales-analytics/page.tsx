import Link from "next/link";
import { LINKS } from "@/lib/links";

export default function SalesAnalyticsCaseStudy() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-gray-400 hover:text-white transition">
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mt-6">
          Sales Analytics Platform
        </h1>
        <p className="text-gray-400 mt-4">
          Full-stack analytics system built using Flask, SQLite, REST APIs, and Chart.js.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {["Flask", "SQLite", "REST APIs", "Chart.js", "Pagination", "CSV Upload"].map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-sm border border-gray-700 text-gray-200 bg-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={LINKS.salesDashboardRepo}
            target="_blank"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition text-center"
          >
            View GitHub Repo
          </a>

          <a
            href={LINKS.salesDashboardLive}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl border border-gray-700 hover:border-gray-400 transition text-center"
          >
            Open Live Demo
          </a>
        </div>

        <section className="mt-14 space-y-10">
          <div className="rounded-3xl border border-gray-800 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Problem</h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Business teams need quick insights into revenue trends, top products,
              and regional performance without manually analyzing spreadsheets.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Solution</h2>
            <ul className="text-gray-300 mt-3 list-disc pl-5 space-y-2">
              <li>Built a KPI dashboard with monthly revenue visualization.</li>
              <li>Implemented REST APIs for analytics and reporting.</li>
              <li>Added CSV ingestion to load real sales data.</li>
              <li>Built paginated reports for large datasets.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Architecture</h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Frontend (HTML/CSS/JS) → Flask REST APIs → SQLite database → SQL aggregations.
              API-driven charts fetch JSON data dynamically.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Key Engineering Highlights</h2>
            <ul className="text-gray-300 mt-3 list-disc pl-5 space-y-2">
              <li>API-based chart rendering using fetch() for decoupled architecture.</li>
              <li>SQL aggregations for revenue trends, region performance, and top products.</li>
              <li>Pagination endpoint using LIMIT/OFFSET for scalable reporting.</li>
              <li>Production-like UI with dashboard, reports, and analytics sections.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}