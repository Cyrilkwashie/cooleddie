"use client";

import Image from "next/image";
import { useState } from "react";
import { officialPhotos } from "@/lib/assets";
import { HandwrittenNote } from "@/components/ui/handwritten-note";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="bg-white pb-10 md:pb-14">
      <div className="container-cd">
        <div className="relative overflow-hidden rounded-[28px] bg-[#f4f5f7] px-6 py-10 md:px-12 md:py-14">
          <div className="relative z-10 max-w-[420px]">
            <h2 className="font-display text-[28px] font-semibold tracking-[-0.035em] text-cd-ink sm:text-[32px] md:text-[40px]">
              Stay in the Loop
            </h2>
            <p className="mt-3 text-[14.5px] leading-6 text-cd-muted">
              Be the first to know about new arrivals, exclusive deals, and tech
              updates.
            </p>
            {done ? (
              <p className="mt-6 text-[14px] font-medium text-cd-ink">
                You&apos;re in. Watch your inbox for the next drop.
              </p>
            ) : (
              <form
                className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
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
                  placeholder="Enter your email address"
                  className="h-12 w-full rounded-full border border-transparent bg-white px-5 text-[14px] outline-none placeholder:text-[#9aa0a8] focus:ring-2 focus:ring-cd-blue/20 sm:max-w-[280px]"
                />
                <button
                  type="submit"
                  className="pill h-12 w-full bg-cd-ink px-6 text-[14px] text-white sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <HandwrittenNote
            lines={["Better Tech", "Days Ahead."]}
            arrow="down"
            align="right"
            tone="ink"
            className="absolute right-[28%] top-8 z-10 hidden md:block"
          />

          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] md:block">
            <div className="absolute bottom-8 left-[6%] h-[92px] w-[150px] -rotate-[8deg] overflow-hidden rounded-[14px] shadow-md">
              <Image src={officialPhotos.accessories} alt="" fill className="object-cover" sizes="150px" />
            </div>
            <div className="absolute left-[26%] top-1/2 h-[120px] w-[190px] -translate-y-1/2 rotate-[8deg] overflow-hidden rounded-[16px] shadow-md">
              <Image src={officialPhotos.iphonesLineup} alt="" fill className="object-cover" sizes="190px" />
            </div>
            <div className="absolute bottom-6 right-6 h-[110px] w-[176px] rotate-[6deg] overflow-hidden rounded-[16px] shadow-md">
              <Image src={officialPhotos.macbooks} alt="" fill className="object-cover" sizes="176px" />
            </div>
            <div className="absolute right-6 top-6 h-[128px] w-[104px] overflow-hidden rounded-[16px] shadow-md">
              <Image src={officialPhotos.ps5} alt="" fill className="object-cover" sizes="104px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
