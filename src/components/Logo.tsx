import { Link } from "react-router-dom";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`inline-flex flex-col leading-none text-ink ${className}`}
      aria-label="Asoschilar Consulting"
    >
      <span className="text-[1.25rem] font-extrabold tracking-[-0.03em] md:text-[1.4rem]">
        Asoschilar
      </span>
      <span className="mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-cobalt md:text-[0.7rem]">
        Consulting
      </span>
    </Link>
  );
}
