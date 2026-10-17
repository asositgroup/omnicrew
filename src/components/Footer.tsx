import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line/70 bg-fog">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Biznesingiz uchun AI agentlar. Biznes tizimlaringizga ulanib, real ishlarni bajaradigan agentlar.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <a href="#agents" className="text-muted hover:text-ink">
            Agentlar
          </a>
          <a href="#scenarios" className="text-muted hover:text-ink">
            Muammolar
          </a>
          <a href="#faq" className="text-muted hover:text-ink">
            Savollar
          </a>
          <a
            href="#register"
            className="btn-3d inline-flex h-12 items-center rounded-full bg-cobalt px-6 text-lg font-semibold text-white"
          >
            Ro‘yxatdan o‘tish
          </a>
        </div>
      </div>
      <div className="border-t border-line/70">
        <p className="mx-auto max-w-[1180px] px-5 py-5 text-xs text-muted">
          © {new Date().getFullYear()} Asoschilar Consulting. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
}
