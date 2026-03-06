import Link from "next/link";

export default function YouTubeTrendingAnalyticsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-16">
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
          <span className="text-gray-200">YouTube Trending Analytics</span>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            YouTube Trending Analytics Pipeline
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
            A production-style data engineering project that ingests YouTube{" "}
            <span className="text-white font-semibold">Most Popular</span> videos
            daily across multiple countries, stores them in{" "}
            <span className="text-white font-semibold">PostgreSQL (Neon)</span>,
            and visualizes insights using a{" "}
            <span className="text-white font-semibold">
              Streamlit + Plotly dashboard
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://youtube-trending-analytics-sc.streamlit.app/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/charan4899/youtube-trending-analytics"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl border border-gray-600 hover:border-white transition"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        {/* Quick Summary Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
            <h2 className="text-xl font-semibold mb-3">Regions Covered</h2>
            <p className="text-gray-300 leading-relaxed">
              United States, India, United Kingdom, Canada, and Australia.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
            <h2 className="text-xl font-semibold mb-3">Data Collected</h2>
            <p className="text-gray-300 leading-relaxed">
              Top 50 trending videos per region with views, likes, comments,
              category, channel, and snapshot timestamp.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
            <h2 className="text-xl font-semibold mb-3">Automation</h2>
            <p className="text-gray-300 leading-relaxed">
              Daily ingestion pipeline triggered automatically using GitHub Actions.
            </p>
          </div>
        </div>

        {/* Problem */}
        <div className="mt-14 rounded-2xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-2xl font-semibold mb-3">Problem</h2>
          <p className="text-gray-300 leading-relaxed">
            Public YouTube trending data changes constantly and is difficult to analyze
            historically without storing structured daily snapshots. I wanted to build a
            system that could automatically collect trending video data across multiple
            countries, preserve it over time, and make it easier to explore through a
            user-friendly analytics dashboard.
          </p>
        </div>

        {/* Solution */}
        <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-2xl font-semibold mb-3">Solution</h2>
          <p className="text-gray-300 leading-relaxed">
            I built an automated pipeline that fetches daily snapshots of YouTube’s
            Most Popular videos from multiple regions, stores them in a PostgreSQL
            database, and powers an interactive Streamlit dashboard for category,
            country, channel, and engagement analysis.
          </p>
        </div>

        {/* Architecture */}
        <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-2xl font-semibold mb-4">Architecture</h2>

          <div className="rounded-2xl border border-gray-800 bg-black p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300 leading-7 whitespace-pre-wrap">
{`YouTube Data API
        ↓
Python Ingestion Script
        ↓
Data Transformation / Validation
        ↓
PostgreSQL (Neon)
        ↓
Streamlit + Plotly Dashboard
        ↓
Interactive Analytics for Users`}
            </pre>
          </div>

          <p className="text-gray-400 leading-relaxed mt-4">
            The system is designed as a simple but production-like analytics pipeline:
            external API ingestion, structured storage, automated refresh, and dashboard-based consumption.
          </p>
        </div>

        {/* Pipeline Flow */}
        <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-2xl font-semibold mb-3">Pipeline Flow</h2>
          <ul className="text-gray-300 space-y-3 list-disc list-inside">
            <li>Fetches trending videos using the YouTube Data API.</li>
            <li>Collects data for multiple countries in a single run.</li>
            <li>Transforms raw API responses into structured records.</li>
            <li>Stores daily snapshots in PostgreSQL for historical tracking.</li>
            <li>Uses GitHub Actions to run ingestion automatically every day.</li>
            <li>Presents insights through an interactive Streamlit dashboard.</li>
          </ul>
        </div>

        {/* Highlights */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
            <h2 className="text-xl font-semibold mb-3">Key Features</h2>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Region + snapshot date filters</li>
              <li>Clickable video links + thumbnails</li>
              <li>Category popularity analysis</li>
              <li>Same-date country comparison</li>
              <li>Top channels ranked by subscribers within the snapshot</li>
              <li>Views vs likes engagement analysis</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
            <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "YouTube Data API",
                "PostgreSQL (Neon)",
                "Pandas",
                "Streamlit",
                "Plotly",
                "GitHub Actions",
                "Streamlit Cloud",
              ].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-sm border border-gray-700 bg-black text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-2xl font-semibold mb-3">Challenges Faced</h2>
          <ul className="text-gray-300 space-y-3 list-disc list-inside">
            <li>
              Designing the pipeline in a way that supports <span className="text-white font-medium">daily snapshots</span> instead of one-time data pulls.
            </li>
            <li>
              Making the dashboard easy to interpret, especially for users unfamiliar with how trending data is captured.
            </li>
            <li>
              Handling multi-country ingestion while keeping the structure consistent across regions and dates.
            </li>
            <li>
              Deciding how to explain metrics honestly, since the dashboard reflects the <span className="text-white font-medium">Top 50 trending videos</span> in a region, not all YouTube videos in that country.
            </li>
            <li>
              Integrating automation using GitHub Actions so the data refreshes without manual execution.
            </li>
          </ul>
        </div>

        {/* Engineering Decisions */}
        <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-2xl font-semibold mb-3">Engineering Decisions</h2>
          <ul className="text-gray-300 space-y-3 list-disc list-inside">
            <li>
              Used <span className="text-white font-medium">PostgreSQL</span> instead of flat files so the project behaves like a real analytics system.
            </li>
            <li>
              Chose <span className="text-white font-medium">Streamlit</span> to quickly build an interactive dashboard without spending too much time on frontend infrastructure.
            </li>
            <li>
              Used <span className="text-white font-medium">GitHub Actions</span> for automation to simulate production-style scheduled data ingestion.
            </li>
            <li>
              Designed the dashboard around <span className="text-white font-medium">daily snapshots</span> to support historical comparisons over time.
            </li>
          </ul>
        </div>

        {/* Impact */}
        <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-2xl font-semibold mb-3">Impact</h2>
          <ul className="text-gray-300 space-y-3 list-disc list-inside">
            <li>Automates collection of trending video data across 5 regions daily.</li>
            <li>Builds a reusable historical dataset instead of one-time API output.</li>
            <li>Transforms raw API responses into structured analytics-ready data.</li>
            <li>Provides a live dashboard for comparing content trends, channels, categories, and engagement across countries.</li>
          </ul>
        </div>

        {/* Data Interpretation */}
        <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-2xl font-semibold mb-3">How to Interpret the Data</h2>
          <p className="text-gray-300 leading-relaxed">
            This dashboard is based on <b>daily snapshots</b> of YouTube’s{" "}
            <b>Most Popular</b> list per region at the time of ingestion. Metrics
            like “Total Views by Country” represent the sum of views for the{" "}
            <b>Top 50 trending videos</b> in each region for that date — not all
            YouTube videos in that country.
          </p>
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
      </section>
    </main>
  );
}