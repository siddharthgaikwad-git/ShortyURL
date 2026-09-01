import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-8 border-slate-100 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-7 sm:px-8 lg:px-12">

        {/* Main */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

          {/* Brand */}
          <div className="max-w-sm">

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xl font-extrabold tracking-tight text-slate-900"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500 text-white shadow-sm">
                🔗
              </span>

              Shorty<span className="text-teal-500">URL</span>
            </Link>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Short links. Zero hassle.
              <br />
              No unnecessary accounts.
            </p>

            <Link
              href="/shorten"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-600"
            >
              Shorten a URL

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 sm:gap-x-24">

            {/* Product */}
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Product
              </h3>

              <div className="mt-4 flex flex-col gap-3">

                <Link
                  href="/shorten"
                  className="text-sm text-slate-500 transition hover:text-teal-600"
                >
                  Shorten URL
                </Link>

                <Link
                  href="/about"
                  className="text-sm text-slate-500 transition hover:text-teal-600"
                >
                  About
                </Link>
              </div>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Community
              </h3>

              <div className="mt-4 flex flex-col gap-3">

                <a
                  href="https://github.com/siddharthgaikwad-git/ShortyURL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 transition hover:text-teal-600"
                >
                  GitHub ↗
                </a>
                  
                <a
                  href="https://github.com/siddharthgaikwad-git/ShortyURL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 transition hover:text-teal-600"
                >
                  Report an issue ↗
                </a>

              </div>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} ShortyURL
          </p>

          <p>
            Built with <span className="text-red-400">❤️</span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;