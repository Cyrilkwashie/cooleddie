import Link from "next/link";

export function PlaceholderPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-white">
      <div className="container-cd py-16 md:py-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#9aa0a8]">
          Cooleddie
        </p>
        <h1 className="mt-3 font-display text-[40px] font-semibold tracking-[-0.04em] text-cd-ink md:text-[52px]">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-[16px] leading-7 text-cd-muted">
          {description}
        </p>
        <p className="mt-3 text-[14px] text-cd-subtle">
          This catalog page is coming next. The homepage and design system are
          ready.
        </p>
        <Link
          href="/"
          className="pill mt-8 h-12 bg-cd-ink px-6 text-[14px] text-white"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
