import { Logo } from "./Logo";

const links = [
  { href: "#agents", label: "Agentlar" },
  { href: "#scenarios", label: "Muammolar" },
  { href: "#faq", label: "Savollar" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-2 md:pt-4">
      <div className="mx-auto flex h-12 max-w-[1240px] items-center justify-between rounded-full border border-white/80 bg-white/85 pl-4 pr-1.5 shadow-[0_8px_30px_rgba(20,24,32,0.06)] backdrop-blur-md md:h-16 md:pl-5 md:pr-3">
        <Logo />
        <nav className="hidden items-center gap-7 text-[15px] text-ink/80 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#register"
          className="inline-flex h-9 items-center rounded-full bg-cobalt px-4 text-[13px] md:h-11 md:px-5 font-medium text-white btn-3d md:text-[15px]"
        >
          Bepul audit
        </a>
      </div>
    </header>
  );
}
