"use client"

import React, { useState } from "react"
import Link from "next/link"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2">
      <div className="rounded-2xl border border-slate-200/80 bg-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl">

        {/* Main Navbar */}
        <div className="flex h-16 items-center justify-between px-5">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-slate-900"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 text-white shadow-md shadow-teal-500/20">
              🔗
            </span>

            <span>
              Shorty<span className="text-teal-500">URL</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 md:flex">
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-teal-50 hover:text-teal-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-teal-50 hover:text-teal-600"
            >
              About
            </Link>

            <Link
              href="/shorten"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-teal-50 hover:text-teal-600"
            >
              Shorten
            </Link>

          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://github.com/siddharthgaikwad-git/ShortyURL"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
            >
              {/* GitHub Icon */}
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.77 1.04.77 2.1v3.11c0 .3.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>

              <span>View on GitHub</span>
            </a>

            <Link
              href="/shorten"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-teal-600"
            >
              Try now →
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-slate-100 px-4 pb-4 pt-3 md:hidden">

            <div className="flex flex-col gap-1">

              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-600"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-600"
              >
                About
              </Link>

              <Link
                href="/shorten"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-600"
              >
                Shorten
              </Link>


              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">

                <a
                  href="https://github.com/siddharthgaikwad-git/ShortyURL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
                >
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.77 1.04.77 2.1v3.11c0 .3.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                    />
                  </svg>

                  <span>GitHub</span>

                  <span className="text-xs text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>

                <Link
                  href="/shorten"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Try now →
                </Link>

              </div>

            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar