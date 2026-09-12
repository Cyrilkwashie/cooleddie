"use client";

import { useState } from "react";

export function ShopNewsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="container-cd pb-10">
      <div className="relative overflow-hidden rounded-[22px] bg-[#0c0e10] px-6 py-8 text-white md:px-10">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_right,rgba(50,70,140,0.35),transparent_60%)]" />
        <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-[28px] font-semibold tracking-[-0.03em]">
              Stay in the Loop
            </h2>
            <p className="mt-1 text-[13.5px] text-[#c2c3c7]">
              Get the latest deals, new arrivals and exclusives.
            </p>
          </div>
          {done ? (
            <p className="text-[14px] font-medium">You&apos;re subscribed.</p>
          ) : (
            <form
              className="flex w-full max-w-[460px] flex-col gap-2 rounded-[22px] bg-white p-1 sm:flex-row sm:items-center sm:gap-0 sm:rounded-full"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setDone(true);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-12 min-w-0 flex-1 rounded-full px-4 text-[13.5px] text-cd-ink outline-none placeholder:text-[#9aa0a8]"
              />
              <button
                type="submit"
                className="btn btn-blue shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
