import Link from "next/link";

export const metadata = {
  title: "Hvala | UP Consulting",
  description: "Vaš upit je uspješno zaprimljen.",
};

export default function HvalaPage() {
  return (
    <main className="min-h-screen  flex flex-col">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-100 opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-50 opacity-60 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-10 py-7 flex items-center border-b border-gray-100">
        <Link href="/">
          <img
            src="/logo.jpeg"
            alt="UP Consulting"
            className="h-9 object-contain"
          />
        </Link>
      </header>

      {/* Main content */}
      <section className="relative z-10 flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-xl w-full text-center">

          {/* Check icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-blue-200 bg-blue-50 mb-10">
            <svg
              className="w-9 h-9 text-blue-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="4,13 9,18 20,7" />
            </svg>
          </div>

          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">
            Upit primljen
          </p>

          {/* Heading */}
          <h1 className="font-serif text-5xl sm:text-6xl font-light text-gray-900 leading-tight mb-6">
            Hvala vam na{" "}
            <span className="italic text-blue-600">povjerenju.</span>
          </h1>

          {/* Body copy */}
          <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-md mx-auto">
            Vaša poruka uspješno je zaprimljena. Naš tim obično odgovori{" "}
            <span className="font-medium text-gray-700">unutar 24 sata</span>{" "}
            — za hitne upite slobodno nas nazovite.
          </p>

          {/* Info pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <a
              href="tel:+385915708476"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-100 bg-blue-50 text-sm text-gray-600 hover:border-blue-300 hover:bg-blue-100 transition-colors"
            >
              <PhoneIcon />
              +385 91 5708 476
            </a>
            <a
              href="mailto:info@up-consulting.hr"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-100 bg-blue-50 text-sm text-gray-600 hover:border-blue-300 hover:bg-blue-100 transition-colors"
            >
              <MailIcon />
              info@up-consulting.hr
            </a>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-100 bg-blue-50 text-sm text-gray-600">
              <ClockIcon />
              Odgovor unutar 24h
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/"
            className="inline-block px-10 py-3.5 bg-blue-600 text-white text-sm font-medium tracking-wide rounded-sm hover:bg-blue-700 transition-colors"
          >
            Povratak na početnu
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-10 py-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs text-gray-400">
          2026 © UP Consulting, sva prava zadržana
        </span>
        <div className="flex gap-6">
          <Link
            href="/uvjeti-koristenja"
            className="text-xs text-gray-400 hover:text-blue-600 transition-colors"
          >
            Uvjeti korištenja
          </Link>
          <Link
            href="/politika-privatnosti"
            className="text-xs text-gray-400 hover:text-blue-600 transition-colors"
          >
            Politika privatnosti
          </Link>
        </div>
      </footer>
    </main>
  );
}

/* ── Icon components ─────────────────────────────── */

function PhoneIcon() {
  return (
    <svg
      className="w-4 h-4 text-blue-500 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.95 5.95l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="w-4 h-4 text-blue-500 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="w-4 h-4 text-blue-500 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}