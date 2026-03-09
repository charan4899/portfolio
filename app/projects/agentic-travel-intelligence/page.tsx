import Link from "next/link";
import { LINKS } from "@/lib/links";

export default function AgenticTravelIntelligencePage() {
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
          <span className="text-gray-200">Agentic Travel Intelligence Platform</span>
        </div>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mt-6">
          Agentic Travel Intelligence Platform
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl">
          A full-stack data analytics and AI platform that analyzes global travel
          destinations and provides budget insights and AI-powered recommendations
          through an interactive dashboard.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Next.js",
            "FastAPI",
            "PostgreSQL",
            "Groq",
            "Llama-3",
            "TailwindCSS",
            "Chart.js",
            "Docker",
            "Vercel",
            "Render",
          ].map((t) => (
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
            href={LINKS.agenticTravelRepo}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition text-center"
          >
            View GitHub Repo
          </a>

          <a
            href={LINKS.agenticTravelLive}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl border border-gray-700 hover:border-gray-400 transition text-center"
          >
            Open Live Demo
          </a>
        </div>

        {/* Quick Summary */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-800 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-3">Core Goal</h2>
            <p className="text-gray-300 leading-relaxed">
              Help users compare global destinations using centralized travel cost analytics
              instead of fragmented travel sources.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-3">AI Capability</h2>
            <p className="text-gray-300 leading-relaxed">
              Supports natural language questions through an LLM-powered travel assistant
              using Groq and Llama-3.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-3">Architecture</h2>
            <p className="text-gray-300 leading-relaxed">
              Frontend on Vercel, backend on Render, Neon PostgreSQL for analytics storage,
              and Groq for AI inference.
            </p>
          </div>
        </div>

        {/* Problem */}
        <div className="mt-10 rounded-3xl border border-gray-800 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="text-gray-300 mt-2 leading-relaxed">
            Planning international travel requires comparing multiple variables such as
            travel cost, currency exchange rates, destination affordability, and trip duration.
            Most travel platforms provide fragmented information, forcing users to manually compare
            different websites for flights, hotels, and destination insights.
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            This makes it difficult to quickly determine which destination provides the best value
            for a specific trip duration and budget. In addition, users often want to ask questions
            like <span className="text-white font-medium">“Which destination is cheapest for a 7-day trip?”</span>,
            which traditional dashboards cannot answer naturally.
          </p>
        </div>

        {/* Solution */}
        <div className="mt-10 rounded-3xl border border-gray-800 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-gray-300 mt-2 leading-relaxed">
            To solve this, I built a Travel Intelligence Platform that combines structured
            travel analytics with an AI-powered assistant. The backend computes destination
            affordability metrics, the frontend provides a dynamic dashboard for exploration,
            and the LLM layer interprets analytics data to answer travel questions in natural language.
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            This creates a more intuitive system for comparing destinations, adjusting trip
            duration, filtering travel options, and getting AI-assisted affordability recommendations.
          </p>
        </div>

        {/* Architecture */}
        <div className="mt-10 rounded-3xl border border-gray-800 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold mb-4">Architecture</h2>

          <div className="rounded-2xl border border-gray-800 bg-black p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300 leading-7 whitespace-pre-wrap">
{`Next.js Dashboard
        ↓
FastAPI Analytics API
        ↓
PostgreSQL (Neon)
        ↓
Groq Llama-3 Agent`}
            </pre>
          </div>

          <p className="text-gray-400 mt-4 leading-relaxed">
            The platform follows a layered architecture separating frontend presentation,
            analytics services, persistent data storage, and AI inference.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-gray-800 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Key Features</h2>
            <ul className="text-gray-300 mt-3 list-disc pl-5 space-y-2">
              <li>Travel budget comparison engine</li>
              <li>Dynamic trip duration analysis (3 to 10 days)</li>
              <li>Interactive analytics dashboard</li>
              <li>AI travel assistant powered by Groq Llama-3</li>
              <li>Destination filtering with real-time updates</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Technology Stack</h2>
            <ul className="text-gray-300 mt-3 list-disc pl-5 space-y-2">
              <li>Next.js, React, TailwindCSS, Chart.js</li>
              <li>FastAPI, Python, SQLAlchemy</li>
              <li>PostgreSQL (Neon)</li>
              <li>Groq API with Llama-3</li>
              <li>Vercel, Render, Docker</li>
            </ul>
          </div>
        </div>

        {/* Engineering Challenges */}
        <div className="mt-10 rounded-3xl border border-gray-800 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Engineering Challenges</h2>
          <ul className="text-gray-300 mt-3 list-disc pl-5 space-y-3">
            <li>
              Integrating structured analytics data with LLM responses in a reliable way,
              so the AI assistant answers based on actual computed travel insights instead of guessing.
            </li>
            <li>
              Maintaining consistency between frontend filters and backend calculations as users
              changed trip duration and destination comparisons dynamically.
            </li>
            <li>
              Handling CORS and environment configuration for frontend and backend deployments
              across different cloud platforms.
            </li>
            <li>
              Coordinating stable communication between frontend, backend, database, and AI services
              deployed across multiple providers.
            </li>
          </ul>
        </div>

        {/* Engineering Decisions */}
        <div className="mt-10 rounded-3xl border border-gray-800 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Engineering Decisions</h2>
          <ul className="text-gray-300 mt-3 list-disc pl-5 space-y-3">
            <li>
              Used <span className="text-white font-medium">FastAPI</span> for high-performance
              backend APIs and automatic interactive documentation.
            </li>
            <li>
              Chose <span className="text-white font-medium">Next.js</span> for a fast,
              responsive frontend and simple deployment on Vercel.
            </li>
            <li>
              Used <span className="text-white font-medium">PostgreSQL (Neon)</span> to model
              structured travel cost and destination analytics data.
            </li>
            <li>
              Selected <span className="text-white font-medium">Groq + Llama-3</span> for
              low-latency AI responses and cost-effective inference.
            </li>
            <li>
              Kept frontend, backend, database, and AI inference modular so each layer can scale independently.
            </li>
          </ul>
        </div>

        {/* Impact */}
        <div className="mt-10 rounded-3xl border border-gray-800 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Impact</h2>
          <ul className="text-gray-300 mt-3 list-disc pl-5 space-y-3">
            <li>Transforms fragmented travel data into centralized, actionable analytics.</li>
            <li>Provides users with a more intuitive way to compare destinations and affordability.</li>
            <li>Demonstrates how structured analytics and LLM reasoning can work together in one product.</li>
            <li>
              Creates a scalable foundation that can later support real-time flight data,
              hotel APIs, streaming pipelines, and predictive travel intelligence.
            </li>
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