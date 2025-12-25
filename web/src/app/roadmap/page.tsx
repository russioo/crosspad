"use client";

import { Header } from "@/components/Header";
import Link from "next/link";

export default function RoadmapPage() {
  return (
    <div className="min-h-screen relative">
      {/* Organic flowing background */}
      <div className="organic-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <Header />
      
      <main className="relative z-10 pt-28">
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 py-16 lg:py-24">
          <div className="opacity-0 animate-fade-in-up">
            <p className="text-sm font-medium text-[var(--coral)] uppercase tracking-widest mb-4">
              Roadmap
            </p>
            <h1 className="text-4xl lg:text-5xl font-display mb-6 leading-tight">
              What we're building
            </h1>
          </div>
        </section>

        {/* Phases */}
        <section className="max-w-3xl mx-auto px-5 pb-24">
          
          {/* Phase 1 */}
          <div className="mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-medium text-[var(--success)] uppercase tracking-wider">
                Completed
              </span>
              <div className="flex-1 h-px bg-[var(--border)]" />
            </div>
            <h2 className="text-2xl font-display mb-4">Phase 1</h2>
            <p className="text-[var(--text-secondary)] mb-6">Foundation</p>
            <ul className="space-y-3 text-[var(--text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--success)] mt-0.5">—</span>
                Self-sustaining liquidity engine
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--success)] mt-0.5">—</span>
                Automatic fee claiming, buybacks, and LP burning
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--success)] mt-0.5">—</span>
                Live activity feed with transaction links
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--success)] mt-0.5">—</span>
                Token creation via Pump.fun
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--success)] mt-0.5">—</span>
                Real-time dashboard with global stats
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--success)] mt-0.5">—</span>
                Token pages with social links and transaction history
              </li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-medium text-[var(--coral)] uppercase tracking-wider">
                In Progress
              </span>
              <div className="flex-1 h-px bg-[var(--border)]" />
            </div>
            <h2 className="text-2xl font-display mb-4">Phase 2</h2>
            <p className="text-[var(--text-secondary)] mb-6">Core Upgrades</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[var(--coral)] mt-0.5">—</span>
                SURGE API for programmatic token creation
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--coral)] mt-0.5">—</span>
                Automatic burning of all buyback tokens
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--coral)] mt-0.5">—</span>
                Platform fee redirected to buyback of $SURGE
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--coral)] mt-0.5">—</span>
                Live price charts on token pages
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--coral)] mt-0.5">—</span>
                Token search and filtering
              </li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider">
                Upcoming
              </span>
              <div className="flex-1 h-px bg-[var(--border)]" />
            </div>
            <h2 className="text-2xl font-display mb-4">Phase 3</h2>
            <p className="text-[var(--text-secondary)] mb-6">Analytics</p>
            <ul className="space-y-3 text-[var(--text-muted)]">
              <li className="flex items-start gap-3">
                <span className="mt-0.5">—</span>
                Holder and volume analytics
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5">—</span>
                Telegram and Discord notifications
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5">—</span>
                Creator dashboard for multiple tokens
              </li>
            </ul>
          </div>

          {/* Phase 4 */}
          <div className="mb-20 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider">
                Upcoming
              </span>
              <div className="flex-1 h-px bg-[var(--border)]" />
            </div>
            <h2 className="text-2xl font-display mb-4">Phase 4</h2>
            <p className="text-[var(--text-secondary)] mb-6">Expansion</p>
            <ul className="space-y-3 text-[var(--text-muted)]">
              <li className="flex items-start gap-3">
                <span className="mt-0.5">—</span>
                Referral program
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5">—</span>
                Trending tokens leaderboard
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5">—</span>
                Surge Launchpad for curated launches
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5">—</span>
                Mobile app
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5">—</span>
                Cross-chain support
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="opacity-0 animate-fade-in-up pt-8 border-t border-[var(--border)]" style={{ animationDelay: "0.5s" }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="font-display text-lg mb-1">Start building today</p>
                <p className="text-[var(--text-muted)] text-sm">Launch your first self-sustaining token</p>
              </div>
              <Link href="/launch" className="btn-primary inline-flex items-center gap-2">
                Launch token
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
