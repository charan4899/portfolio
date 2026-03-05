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

        {/* Highlights */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
            <h2 className="text-xl font-semibold mb-3">What it does</h2>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Fetches trending videos via YouTube Data API (multi-country)</li>
              <li>Stores daily snapshots in PostgreSQL (Neon)</li>
              <li>Visualizes insights in Streamlit with filters and charts</li>
              <li>Automates daily ingestion using GitHub Actions</li>
              <li>Deployed with Streamlit Cloud + Neon</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
            <h2 className="text-xl font-semibold mb-3">Key features</h2>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Region + snapshot date filters</li>
              <li>Clickable video links + thumbnails</li>
              <li>Category popularity analysis</li>
              <li>Same-date country comparison (fair comparison)</li>
              <li>Top channels ranked by subscribers (within snapshot)</li>
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-14 rounded-2xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
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

        {/* Notes / storytelling */}
        <div className="mt-14 rounded-2xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xl font-semibold mb-3">How to interpret the data</h2>
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