import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50">

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-12">

        {/* Background decoration */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm backdrop-blur">
              {/* Ripple dot */}
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-green-400"></span>
              </span>

              {/* Text */}
              No login required
            </div>


            {/* Heading */}
            <h1
              className={`max-w-2xl text-4xl leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl ${poppins.className}`}
            >
              Shorten URLs.
              <br />
              <span className="text-teal-500">
                Keep it simple.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Create short, shareable links instantly — without creating
              an account or giving away unnecessary personal information.
            </p>

            {/* Benefits */}
            <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-slate-600 lg:justify-start">
              <span className="flex items-center gap-1.5">
                <span className="text-teal-500">✓</span>
                No Login
              </span>

              <span className="flex items-center gap-1.5">
                <span className="text-teal-500">✓</span>
                No Signup
              </span>

              <span className="flex items-center gap-1.5">
                <span className="text-teal-500">✓</span>
                Free to Use
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

              <Link href="/shorten">
                <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 font-semibold text-white shadow-xl shadow-slate-900/15 transition-all duration-200 hover:-translate-y-1 hover:bg-teal-600 sm:w-auto">
                  Try Now
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </Link>

              <a
                  href="https://github.com/siddharthgaikwad-git/ShortyURL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 transition hover:text-teal-600"
                >
                <button className="w-full rounded-xl border border-slate-200 bg-white/80 px-7 py-3.5 font-semibold text-slate-700 shadow-sm backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:bg-white sm:w-auto">
                  View on GitHub
                </button>
              </a>

            </div>

          </div>

          {/* Right Illustration */}
          <div className="relative mx-auto h-[280px] w-full max-w-md sm:h-[360px] lg:h-[500px] lg:max-w-xl">

            {/* Glow */}
            <div className="absolute inset-10 rounded-full bg-teal-300/20 blur-3xl" />

            <Image
              src="/vector.png"
              alt="URL shortening illustration"
              fill
              priority
              className="relative z-10 object-contain drop-shadow-2xl"
            />

          </div>

        </div>
      </section>

      {/* Features */}
      <section className="relative border-t border-slate-200/70 bg-white/70 px-6 py-16 backdrop-blur-xl">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-2 text-2xl">🚫</div>
            <h3 className="font-bold text-slate-900">
              No Login
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Start shortening instantly.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-2 text-2xl">⚡</div>
            <h3 className="font-bold text-slate-900">
              Instant
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Fast and straightforward.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-2 text-2xl">🔒</div>
            <h3 className="font-bold text-slate-900">
              Privacy First
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              No unnecessary account details.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}