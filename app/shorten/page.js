"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const [generatedLinks, setGeneratedLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState("");
  const [error, setError] = useState("");
  const [existingUrl, setExistingUrl] = useState("");

  // Restore all previously generated links
  useEffect(() => {
    const savedLinks = localStorage.getItem("generatedShortUrls");

    if (savedLinks) {
      try {
        const links = JSON.parse(savedLinks);

        if (Array.isArray(links)) {
          setGeneratedLinks(links);

          if (links.length > 0) {
            setGenerated(links[0].shortUrl);
          }
        }
      } catch (error) {
        console.error("Unable to restore saved links:", error);
        localStorage.removeItem("generatedShortUrls");
      }
    }
  }, []);

  const generate = async () => {
    if (!url.trim()) {
      setError("Please enter a URL first.");
      setExistingUrl("");
      return;
    }

    if (!shorturl.trim()) {
      setError("Please choose your preferred short URL.");
      setExistingUrl("");
      return;
    }

    setError("");
    setExistingUrl("");
    setLoading(true);
    setCopied("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url.trim(),
          shorturl: shorturl.trim(),
        }),
      });

      let result;

      try {
        result = await response.json();
      } catch {
        throw new Error("Server returned an invalid response.");
      }

      console.log("API response:", result);

      // Server error
      if (!response.ok) {
        setError(
          result?.message ||
            "Unable to create your short URL. Please try again."
        );
        return;
      }

      // New URL created successfully
      if (result.success) {
        const generatedUrl = `${window.location.origin}/${shorturl.trim()}`;

        const newLink = {
          shortUrl: generatedUrl,
          originalUrl: url.trim(),
        };

        // Read the latest links directly from localStorage
        const savedLinks = localStorage.getItem("generatedShortUrls");

        let existingLinks = [];

        if (savedLinks) {
          try {
            const parsedLinks = JSON.parse(savedLinks);

            if (Array.isArray(parsedLinks)) {
              existingLinks = parsedLinks;
            }
          } catch (error) {
            console.error("Unable to read saved links:", error);
          }
        }

        // Add new link at the beginning
        const updatedLinks = [newLink, ...existingLinks];

        setGenerated(generatedUrl);
        setGeneratedLinks(updatedLinks);

        // Save all links
        localStorage.setItem(
          "generatedShortUrls",
          JSON.stringify(updatedLinks)
        );

        // Clear inputs
        seturl("");
        setshorturl("");
      }

      // Short URL already exists
      else if (result.exists) {
        const existingShortUrl =
          `${window.location.origin}/${result.shorturl}`;

        setExistingUrl(existingShortUrl);
        setError(
          result.message || "This short URL already exists."
        );
      }

      // Other API error
      else {
        setError(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Generate URL error:", error);

      if (error.message === "Failed to fetch") {
        setError(
          "Unable to connect to the server. Please try again."
        );
      } else {
        setError(
          "Unable to create your short URL. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const copyLink = async (link) => {
    if (!link) return;

    try {
      await navigator.clipboard.writeText(link);

      setCopied(link);

      setTimeout(() => {
        setCopied("");
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
      setError("Unable to copy the link. Please copy it manually.");
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
              onChange={(e) => {
                seturl(e.target.value);
                setError("");
                setExistingUrl("");
              }}
              disabled={loading}
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
                onChange={(e) => {
                  setshorturl(e.target.value);
                  setError("");
                  setExistingUrl("");
                }}
                disabled={loading}
                className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-slate-800 outline-none placeholder:text-slate-400 sm:px-4"
              />

            </div>
          </div>

          {/* Error / Existing URL */}
          {error && (
            <div
              className={`mt-4 rounded-xl border px-4 py-3 text-sm font-medium ${
                existingUrl
                  ? "border-amber-100 bg-amber-50 text-amber-700"
                  : "border-red-100 bg-red-50 text-red-600"
              }`}
            >
              <div>{error}</div>

              {existingUrl && (
                <div className="mt-3 flex flex-col gap-2 sm:flex-row">

                  <Link
                    href={existingUrl}
                    target="_blank"
                    className="flex-1 rounded-lg bg-white px-4 py-2 text-center text-sm font-bold text-teal-600 shadow-sm transition hover:bg-teal-50"
                  >
                    Open existing link →
                  </Link>

                  <button
                    onClick={() => copyLink(existingUrl)}
                    className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-teal-700"
                  >
                    {copied === existingUrl ? "Copied ✓" : "Copy"}
                  </button>

                </div>
              )}
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
                  onClick={() => copyLink(generated)}
                  className="rounded-xl bg-teal-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-teal-700"
                >
                  {copied === generated ? "Copied ✓" : "Copy"}
                </button>

              </div>

            </div>
          )}

          {/* Generated links history */}
          {generatedLinks.length > 1 && (
            <div className="mt-6">

              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700">
                  Recent links
                </span>

                <span className="text-xs font-medium text-slate-400">
                  {generatedLinks.length} links
                </span>
              </div>

              <div className="flex flex-col gap-2">

                {generatedLinks.slice(1).map((link, index) => (
                  <div
                    key={`${link.shortUrl}-${index}`}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2"
                  >

                    <Link
                      href={link.shortUrl}
                      target="_blank"
                      className="min-w-0 flex-1 truncate px-2 py-2 text-sm font-semibold text-teal-600 transition hover:text-teal-700"
                    >
                      {link.shortUrl}
                    </Link>

                    <button
                      onClick={() => copyLink(link.shortUrl)}
                      className="shrink-0 rounded-lg bg-white px-3 py-2 text-xs font-bold text-slate-600 shadow-sm transition hover:bg-teal-600 hover:text-white"
                    >
                      {copied === link.shortUrl ? "Copied ✓" : "Copy"}
                    </button>

                  </div>
                ))}

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