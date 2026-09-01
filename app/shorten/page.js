"use client";

import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    if (!url.trim()) {
      setError("Please enter a URL first.");
      return;
    }

    if (!shorturl.trim()) {
      setError("Please choose your preferred short URL.");
      return;
    }

    setError("");
    setLoading(true);
    setGenerated("");
    setCopied(false);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url,
          shorturl: shorturl,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
      } else {
        setError(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setError("Unable to create your short URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(generated);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50 px-4 py-12 sm:px-6 lg:py-20">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

      {/* Main content */}
      <section className="relative z-10 mx-auto max-w-xl mt-5">

        {/* Heading */}
        <div className="mb-8 text-center">

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Shorten your URL.
            <br />
            <span className="text-teal-500">
              Keep it simple.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-600 sm:text-lg">
            Turn long links into short, shareable URLs in seconds.
            No account, no complicated setup.
          </p>

        </div>

        {/* Card */}
        <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_20px_70px_rgb(15,23,42,0.10)] backdrop-blur-xl sm:p-7">

          {/* URL input */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Your long URL
            </label>

            <input
              value={url}
              type="url"
              placeholder="https://example.com/my-long-url"
              onChange={(e) => seturl(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
            />
          </div>

          {/* Short URL */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Customize your short URL
            </label>

            <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition-all focus-within:border-teal-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-teal-500/10">

              <span className="flex items-center border-r border-slate-200 bg-slate-100 px-3 text-sm font-medium text-slate-500 sm:px-4">
                shortyurl.com/
              </span>

              <input
                value={shorturl}
                type="text"
                placeholder="my-link"
                onChange={(e) => setshorturl(e.target.value)}
                className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-slate-800 outline-none placeholder:text-slate-400 sm:px-4"
              />

            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              {error}
            </div>
          )}

          {/* Generate button */}
          <button
            onClick={generate}
            disabled={loading}
            className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 font-bold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {loading ? (
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Creating your link...
              </>
            ) : (
              <>
                Generate Short URL
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </>
            )}
          </button>

          {/* Generated URL */}
          {generated && (
            <div className="mt-6 rounded-2xl border border-teal-100 bg-teal-50/70 p-4">

              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700">
                  Your short link
                </span>

                <span className="text-xs font-semibold text-teal-600">
                  ✓ Ready
                </span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">

                <Link
                  href={generated}
                  target="_blank"
                  className="min-w-0 flex-1 truncate rounded-xl border border-teal-100 bg-white px-4 py-3 text-sm font-semibold text-teal-600 transition hover:border-teal-300 hover:text-teal-700"
                >
                  {generated}
                </Link>

                <button
                  onClick={copyLink}
                  className="rounded-xl bg-teal-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-teal-700"
                >
                  {copied ? "Copied ✓" : "Copy"}
                </button>

              </div>

            </div>
          )}

        </div>

        {/* Bottom message */}
        <p className="mt-6 text-center text-sm text-slate-500">
          Simple links. No unnecessary accounts.
        </p>

      </section>
    </main>
  );
};

export default Shorten;