import Link from "next/link";
import { LINKS } from "@/lib/links";

export default function SalesAnalyticsCaseStudy() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-10 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/#projects" className="hover:text-white transition">
            Projects
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-200">Sales Analytics Platform</span>
        </div>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mt-6">
          Sales Analytics Platform
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl">
          A full-stack analytics application built with{" "}
          <span className="text-white font-semibold">Flask</span>,{" "}
          <span className="text-white font-semibold">SQLite</span>, and{" "}
          <span className="text-white font-semibold">REST APIs</span> to help
          users explore sales data through dashboards, reports, and interactive analytics.
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
            rel="noreferrer"
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

        {/* Quick Summary Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-800 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-3">Core Purpose</h2>
            <p className="text-gray-300 leading-relaxed">
              Turn raw sales records into clear business insights through an interactive analytics interface.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-3">Data Input</h2>
            <p className="text-gray-300 leading-relaxed">
              Users can upload CSV sales data, which is processed and stored for dashboard reporting.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-3">Output</h2>
            <p className="text-gray-300 leading-relaxed">
              KPI cards, charts, filtered analytics, and paginated reports for fast exploration.
            </p>
          </div>
        </div>

        {/* Problem */}
        <div className="mt-10 rounded-3xl border border-gray-800 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="text-gray-300 mt-2 leading-relaxed">
            Business users often need quick insights into revenue, product performance,
            and regional trends, but manually analyzing spreadsheets is slow and inefficient.
            There was a need for a lightweight analytics system that could accept uploaded sales data
            and convert it into clear, decision-ready dashboards.
          </p>
        </div>

        {/* Solution */}
        <div className="mt-10 rounded-3xl border border-gray-800 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <ul className="text-gray-300 mt-3 list-disc pl-5 space-y-2">
            <li>Built KPI cards for total revenue, top product, and growth indicators.</li>
            <li>Implemented REST APIs to power chart rendering and analytics pages.</li>
            <li>Added CSV upload so users could bring in new sales records dynamically.</li>
            <li>Created paginated reporting to make larger datasets easier to browse.</li>
            <li>Designed a multi-page interface with Dashboard, Reports, and Analytics sections.</li>
          </ul>
        </div>

        {/* Architecture */}
        <div className="mt-10 rounded-3xl border border-gray-800 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold mb-4">Architecture</h2>

          <div className="rounded-2xl border border-gray-800 bg-black p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300 leading-7 whitespace-pre-wrap">
{`CSV Upload / User Input
        ↓
Flask Backend
        ↓
SQLite Database
        ↓
SQL Aggregations + API Endpoints
        ↓
Dashboard / Reports / Analytics UI`}
            </pre>
          </div>

          <p className="text-gray-400 mt-4 leading-relaxed">
            The application was designed as a lightweight full-stack analytics system:
            data ingestion through uploads, persistent storage in SQLite, analytical queries
            through Flask APIs, and a frontend interface for visualization and reporting.
          </p>
        </div>

        {/* Flow */}
        <div className="mt-10 rounded-3xl border border-gray-800 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold mb-3">Application Flow</h2>
          <ul className="text-gray-300 mt-3 list-disc pl-5 space-y-2">
            <li>User uploads CSV sales data.</li>
            <li>Flask processes the file and inserts records into SQLite.</li>
            <li>REST API endpoints aggregate revenue, product, region, and monthly metrics.</li>
            <li>Frontend pages consume API data and render charts/tables dynamically.</li>
            <li>Users can filter and navigate through Dashboard, Reports, and Analytics views.</li>
          </ul>
        </div>

        {/* Key Features + Tech Highlights */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-gray-800 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Key Features</h2>
            <ul className="text-gray-300 mt-3 list-disc pl-5 space-y-2">
              <li>CSV ingestion for dynamic data loading</li>
              <li>KPI dashboard for high-level business metrics</li>
              <li>Interactive charts for trend analysis</li>
              <li>Paginated reports for scalable browsing</li>
              <li>Multi-page analytics experience</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Engineering Highlights</h2>
            <ul className="text-gray-300 mt-3 list-disc pl-5 space-y-2">
              <li>API-based chart rendering for cleaner frontend/backend separation</li>
              <li>SQL aggregations for revenue trends, top products, and region analysis</li>
              <li>LIMIT/OFFSET pagination for reports</li>
              <li>Reusable query logic for dashboard and analytics calculations</li>
            </ul>
          </div>
        </div>

        {/* Challenges */}
        <div className="mt-10 rounded-3xl border border-gray-800 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Challenges Faced</h2>
          <ul className="text-gray-300 mt-3 list-disc pl-5 space-y-2">
            <li>Designing the system to support uploaded CSV data while keeping the UI responsive.</li>
            <li>Making dashboard metrics update dynamically instead of using hardcoded values.</li>
            <li>Handling chart rendering issues when frontend and backend data formats didn’t align initially.</li>
            <li>Building reports in a scalable way using pagination rather than loading all rows at once.</li>
            <li>Structuring the app so dashboard, reports, and analytics all felt like part of one system.</li>
          </ul>
        </div>

        {/* Engineering Decisions */}
        <div className="mt-10 rounded-3xl border border-gray-800 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Engineering Decisions</h2>
          <ul className="text-gray-300 mt-3 list-disc pl-5 space-y-2">
            <li>Used Flask for simplicity and control over backend routing and APIs.</li>
            <li>Used SQLite to keep the project lightweight while still showing database-backed analytics.</li>
            <li>Exposed API endpoints instead of tightly coupling frontend rendering to server templates.</li>
            <li>Added reports and analytics as separate sections to simulate a more realistic SaaS-style product.</li>
          </ul>
        </div>

        {/* Impact */}
        <div className="mt-10 rounded-3xl border border-gray-800 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Impact</h2>
          <ul className="text-gray-300 mt-3 list-disc pl-5 space-y-2">
            <li>Transforms raw sales records into structured, visual analytics.</li>
            <li>Demonstrates end-to-end thinking: ingestion, storage, API design, and UI visualization.</li>
            <li>Provides a realistic example of how business reporting systems are built.</li>
            <li>Creates a reusable foundation that could be extended with authentication, forecasting, or cloud deployment.</li>
          </ul>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/#projects"
            className="text-gray-300 hover:text-white transition"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}