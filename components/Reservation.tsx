"use client";

import { useState } from "react";

const field =
  "w-full rounded-lg border border-cream/15 bg-coal px-4 py-3 text-sm placeholder:text-cream/40 outline-none focus:border-ember focus:ring-1 focus:ring-ember [color-scheme:dark]";

export default function Reservation() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="reserve" className="scroll-mt-4 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">Reservations</p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Save your seat by the <em className="text-ember">fire.</em>
          </h2>
          <p className="mt-6 max-w-md text-cream/75">
            Tables fill quickly on weekends. Send a request and we&apos;ll confirm within a few
            hours. For groups of 8 or more, please call us.
          </p>
        </div>

        {sent ? (
          <div className="flex items-center rounded-2xl bg-coal p-10">
            <div>
              <h3 className="font-display text-2xl">Thank you.</h3>
              <p className="mt-3 text-cream/75">
                Your request is in. We&apos;ll be in touch shortly to confirm your table.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl bg-coal p-6 sm:grid-cols-2 sm:p-8">
            <label className="sm:col-span-2">
              <span className="mb-2 block text-xs uppercase tracking-widest text-cream/60">Name</span>
              <input required name="name" type="text" placeholder="Your name" className={field} />
            </label>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-xs uppercase tracking-widest text-cream/60">Email</span>
              <input required name="email" type="email" placeholder="you@example.com" className={field} />
            </label>
            <label>
              <span className="mb-2 block text-xs uppercase tracking-widest text-cream/60">Date</span>
              <input
  required
  name="date"
  type="date"
  min={new Date().toISOString().split("T")[0]}
  className={field}
/>
            </label>
            <label>
              <span className="mb-2 block text-xs uppercase tracking-widest text-cream/60">Time</span>
              <input required name="time" type="time" className={field} />
            </label>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-xs uppercase tracking-widest text-cream/60">Guests</span>
              <select name="guests" className={field} defaultValue="2">
                {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
            </label>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-xs uppercase tracking-widest text-cream/60">Notes</span>
              <textarea name="notes" rows={3} placeholder="Allergies, occasions, seating…" className={field} />
            </label>
            <button
              type="submit"
              className="rounded-full bg-ember px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal transition hover:bg-gold sm:col-span-2"
            >
              Request a table
            </button>
          </form>
        )}
      </div>
    </section>
  );
}