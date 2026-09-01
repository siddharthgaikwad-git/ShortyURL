import React from "react";
import Image from "next/image";
import Link from "next/link";

const features = [
    {
        icon: "⚡",
        title: "Fast & Simple",
        description:
            "Shorten your links in seconds. No complexity, just speed.",
    },
    {
        icon: "🔓",
        title: "No Login Required",
        description:
            "Start shortening instantly. No signup or account required.",
    },
    {
        icon: "🛡️",
        title: "Secure & Reliable",
        description:
            "Built with reliability and security in mind, so your links stay dependable.",
    },
    {
        icon: "📊",
        title: "Track & Analyze",
        description:
            "Understand how your links perform with useful click insights and analytics.",
    },
];

const About = () => {
    return (
        <main className="min-h-screen overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50">

            {/* Background Decorations */}
            <div className="pointer-events-none fixed left-[-120px] top-32 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
            <div className="pointer-events-none fixed right-[-120px] top-[45%] h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

            {/* Hero Section */}
            <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-28 sm:px-8 lg:px-12">

                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">

                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm backdrop-blur">
                            <span className="h-2 w-2 rounded-full bg-teal-500" />
                            Simple by design
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            About{" "}
                            <span className="text-teal-500">
                                ShortyURL
                            </span>
                        </h1>

                        {/* Main statement */}
                        <p className="mt-6 text-xl font-semibold leading-8 text-slate-700 sm:text-2xl">
                            We built ShortyURL with a simple goal in mind:
                        </p>

                        <p className="mt-2 text-xl font-semibold leading-8 text-teal-600 sm:text-2xl">
                            make link shortening fast, easy and completely hassle-free.
                        </p>

                        {/* Description */}
                        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 lg:mx-0">
                            Most URL shorteners make you jump through hoops before you can
                            even shorten a link. We believe it should be simple. Paste your
                            URL, shorten it, and get back to what matters.
                        </p>

                        {/* Small highlights */}
                        <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600 lg:justify-start">
                            <span className="flex items-center gap-2">
                                <span className="text-teal-500">✓</span>
                                No signup
                            </span>

                            <span className="flex items-center gap-2">
                                <span className="text-teal-500">✓</span>
                                Instant shortening
                            </span>

                            <span className="flex items-center gap-2">
                                <span className="text-teal-500">✓</span>
                                Easy to use
                            </span>
                        </div>

                    </div>

                    {/* Illustration */}
                    <div className="relative mx-auto h-[320px] w-full max-w-lg sm:h-[400px] lg:h-[470px]">

                        {/* Illustration Glow */}
                        <div className="absolute inset-10 rounded-full bg-teal-300/20 blur-3xl" />

                        <Image
                            src="/vector2.png"
                            alt="Illustration showing ShortyURL"
                            fill
                            priority
                            className="relative z-10 object-contain drop-shadow-xl"
                        />

                    </div>

                </div>
            </section>

            {/* Features Section */}
            <section className="relative border-y border-slate-200/70 bg-white/60 px-6 py-16 backdrop-blur-xl sm:px-8 lg:px-12">

                <div className="mx-auto max-w-6xl">

                    {/* Section Heading */}
                    <div className="mx-auto max-w-2xl text-center">

                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-500">
                            Why ShortyURL?
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            Everything you need.
                        </h2>

                        <p className="mt-4 text-slate-600">
                            We keep URL shortening focused on what actually matters:
                            speed, simplicity and reliability.
                        </p>

                    </div>

                    {/* Feature Cards */}
                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5"
                            >

                                {/* Icon */}
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl transition-transform duration-300 group-hover:scale-110">
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="mt-5 text-lg font-bold text-slate-900">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    {feature.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* Bottom CTA */}
            <section className="relative px-6 py-20 sm:px-8">

                <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 px-6 py-12 text-center shadow-2xl sm:px-12">

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
                        Ready to simplify your links?
                    </p>

                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        Shorten your first URL.
                    </h2>

                    <p className="mx-auto mt-4 max-w-lg text-slate-400">
                        No account. No complicated setup. Just paste your URL and
                        get your short link.
                    </p>

                    <Link href="/shorten">
                        <button className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-teal-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-teal-500/20 transition-all duration-200 hover:-translate-y-1 hover:bg-teal-400">
                            Try ShortyURL
                            <span className="transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </button>
                    </Link>

                </div>

            </section>

        </main>
    );
};

export default About;