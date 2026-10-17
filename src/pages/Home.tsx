import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  LockKey,
  Plus,
  X,
  ShieldCheck,
  UsersThree,
  Wall,
} from "@phosphor-icons/react";
import { Reveal } from "../components/Reveal";
import { AgentCarousel } from "../components/AgentCarousel";
import { Logo } from "../components/Logo";
import { PhoneInput } from "../components/PhoneInput";
import { faqs, scenarios } from "../data";


function Media({
  src,
  poster,
  alt,
  className = "",
}: {
  src: string;
  poster: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const play = () => {
      el.muted = true;
      void el.play().catch(() => {});
    };
    play();
    const onVis = () => {
      if (!document.hidden) play();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      aria-label={alt}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  function onRegisterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const company = String(data.get("company") || "").trim();

    if (!name || !contact) {
      setFormStatus("error");
      setFormMessage(
        name && data.get("contactPartial")
          ? "Telefon raqamni to‘liq kiriting."
          : "Iltimos, ismingiz va telefon raqamingizni kiriting.",
      );
      return;
    }

    setFormStatus("loading");
    setFormMessage("");
    window.setTimeout(() => {
      setFormStatus("ok");
      setFormMessage(
        company
          ? `${company} uchun ro‘yxatdan o‘tish so‘rovi qabul qilindi! Tez orada bog‘lanamiz.`
          : "Ro‘yxatdan o‘tish so‘rovi qabul qilindi! Tez orada siz bilan bog‘lanamiz.",
      );
    }, 600);
  }

  return (
    <main>
      <section className="mx-auto grid max-w-[1180px] px-4 pb-4 pt-4 text-center md:pt-8 lg:grid-cols-[1.25fr_0.75fr] lg:grid-rows-[1fr_auto_auto_auto_1fr] lg:gap-x-14 lg:px-5 lg:pt-12 lg:text-left">
        <h2 className="mx-auto max-w-4xl text-3xl font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl lg:col-start-1 lg:row-start-2 lg:mx-0 lg:text-[2.6rem] xl:text-[3.25rem]">
          Biznesingizda <span className="text-cobalt">AI<br className="hidden lg:block" /> o‘rnatishni</span> bilmayapsizmi?
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed text-balance text-muted md:mt-5 md:text-xl lg:col-start-1 lg:row-start-3 lg:mx-0">
          Audit o‘tkazib, sun’iy intellekt eng ko‘p foyda keltiradigan jarayonlarni aniqlab beramiz. Vaqtingizni va xarajatlaringizni tejang!
        </p>
        <div className="mx-auto mt-5 w-full max-w-[330px] overflow-hidden rounded-t-full bg-gradient-to-b from-[#cfe2ff] via-[#7eb6ff] to-[#1d6fff] pt-4 md:mt-10 md:max-w-[420px] md:pt-10 lg:col-start-2 lg:row-span-5 lg:row-start-1 lg:mt-0 lg:self-center">
          <img
            src="/images/founder.png"
            alt="Asoschilar Consulting asoschisi"
            width={640}
            height={567}
            className="block w-full"
          />
        </div>
        <a
          href="#register"
          className="relative z-10 mx-auto mt-3 flex h-14 w-full max-w-[420px] items-center lg:col-start-1 lg:row-start-4 lg:mx-0 lg:mt-8 lg:w-fit lg:px-10 justify-center rounded-full bg-cobalt px-7 text-[1.35rem] font-semibold text-white btn-3d md:text-2xl"
        >
          Bepul auditga yozilish
        </a>
      </section>

      <section className="px-4 pb-6 pt-5 md:pt-6">
        <div className="mx-auto max-w-[1240px] md:relative md:overflow-hidden md:rounded-[28px]">
          <img
            src="/images/hero-crew.jpg"
            alt="Asoschilar Consulting AI agentlari biznes jarayonlarini boshqarmoqda"
            className="aspect-[16/9] w-full rounded-[28px] object-cover object-center md:rounded-none"
          />
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-tr from-ink/20 via-transparent to-transparent md:block" />
          <div className="mt-4 rounded-[24px] bg-white p-5 shadow-[0_16px_50px_rgba(20,24,32,0.14)] md:absolute md:bottom-8 md:left-8 md:right-auto md:mt-0 md:max-w-xl md:bg-white/96 md:p-8">
            <div className="mb-4">
              <Logo />
            </div>
            <h1 className="text-3xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl">
              Biznesingiz uchun
              <br />
              AI agentlar
            </h1>
            <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-muted md:text-base">
              Biznes jarayonlaringizga mos AI agentlarni ishga tushiring. Butun kompaniya uchun xavfsiz.
            </p>
            <div className="mt-5">
              <a
                href="#register"
                className="btn-3d flex h-14 w-full items-center justify-center rounded-full bg-cobalt px-6 text-xl font-semibold text-white"
              >
                Agentlarni ishga tushirish
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-20">
        <Reveal className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            Natijaga ishlaydigan <span className="text-cobalt">AI agentlar</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-base leading-relaxed text-muted md:text-lg">
            Biznesingizga moslanadi va jarayonlarni tez hamda oson qiladi.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { src: "/icons/badge-secure.svg", label: "Xavfsiz" },
              { src: "/icons/badge-customizable.svg", label: "Moslanadi" },
              { src: "/icons/badge-easy.svg", label: "Oson" },
              { src: "/icons/badge-teams.svg", label: "Biznes uchun" },
            ].map((item) => (
              <div key={item.label} className="grid justify-items-center gap-3">
                <img
                  src={item.src}
                  alt=""
                  className="h-11 w-11 object-contain md:h-12 md:w-12"
                />
                <p className="text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <img
          src="/images/crew-banner.png?v=2"
          alt="To'rtta Asoschilar Consulting AI agenti biznes vazifalarni bajarmoqda"
          width={1168}
          height={266}
          className="mx-auto mt-8 block h-auto w-full max-w-[1168px] px-4"
        />
      </section>

      <section id="agents" className="bg-[#1a2332] py-14 text-white md:py-20">
        <Reveal className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-6xl">
            Biznes{" "}
            <span className="text-sky">agentlarimiz</span>
          </h2>
        </Reveal>
        <AgentCarousel />
      </section>

      <section className="px-4 py-16">
        <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[32px] bg-[#152033]">
          <img
            src="/images/always-on.jpg?v=2"
            alt="Agent tunda noutbukda ishlayapti, orqasida grafklar va raqamlar"
            className="aspect-[16/9] w-full object-cover md:aspect-auto md:h-[520px] md:object-[center_right]"
          />
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#152033] from-0% via-[#152033]/88 via-[38%] to-transparent to-[72%] md:block" />
          <div className="relative z-10 p-7 pt-6 text-white md:absolute md:inset-y-0 md:left-0 md:flex md:max-w-[34rem] md:items-center md:p-14">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Doim <span className="text-sky">ishda</span>
              </h2>
              <p className="mt-5 max-w-[32ch] text-lg leading-relaxed text-white/75">
                Siz uchrashuvda, safarda yoki dam olayotganingizda ham AI agentlar biznes jarayonlarini to‘xtovsiz yuritadi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef4fb] px-5 py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Biznes auditi va <span className="text-cobalt">maxsus sozlash</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[48ch] text-lg text-muted">
            Avval biznes jarayonlaringizni audit qilamiz, so‘ngra har bir AI agentni kompaniyangiz ish tizimiga moslab sozlab beramiz.
          </p>
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-[980px] items-start gap-8 md:grid-cols-3">
          <div className="text-center">
            <img
              src="/images/skills-create.jpg?v=2"
              alt="Biznes jarayonlarini audit qilish"
              className="mx-auto aspect-square w-full max-w-[240px] rounded-[28px] object-cover"
            />
            <h3 className="mt-5 text-lg font-semibold">Biznesni audit qilamiz</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Sotuv, moliya va ichki jarayonlaringizni o‘rganib, qaysi nuqtalarni AI agentlar bilan tezlashtirish mumkinligini aniqlaymiz.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/skills-packs.jpg?v=2"
              alt="Agentlarni biznesga moslab sozlash"
              className="mx-auto aspect-square w-full max-w-[280px] rounded-[28px] object-cover"
            />
            <h3 className="mt-5 text-lg font-semibold">Agentlarni biznesga sozlaymiz</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              AI agentlarni kompaniyangiz qoidalari, hujjatlari hamda CRM, 1C va Telegram kabi tizimlaringizga moslab sozlaymiz.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/skills-share.jpg?v=2"
              alt="Agentlarni biznesga joriy qilish"
              className="mx-auto aspect-square w-full max-w-[240px] rounded-[28px] object-cover"
            />
            <h3 className="mt-5 text-lg font-semibold">Ishga tushiramiz va rivojlantiramiz</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Sozlangan AI agentlar barcha bo‘limlaringizda ishga tushadi va biznesingiz o‘sgani sari yangi vazifalarga moslashadi.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Qattiq <span className="text-cobalt">xavfsizlik</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-lg text-muted">
            Kalitni siz berasiz, agent saqlaydi. Parollar maxfiy seyfda turadi, muhim biznes amallar esa tasdiq so‘raydi.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="mx-auto mt-10 max-w-[720px]">
          <Media
            src="/video/security-key.mp4"
            poster="/images/security-key.jpg"
            alt="Odam kalitni Asoschilar Consulting agentiga topshirayapti"
            className="w-full rounded-[28px]"
          />
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-[1080px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: UsersThree,
              title: "Rahbar nazorati",
              body: "Qaysi agent ishlashi, qanday vazifa bajarishi va qaysi biznes dasturlarga ulanishini siz belgilaysiz.",
            },
            {
              icon: LockKey,
              title: "Maxsus seyf",
              body: "Login va tokenlar alohida seyfda. Muhim biznes amaliga inson tasdig‘i talab qilinadi.",
            },
            {
              icon: Wall,
              title: "Ma’lumot ajratilgan",
              body: "Har bir agentning o‘z virtual kompyuteri va alohida fayl ombori bor.",
            },
            {
              icon: ShieldCheck,
              title: "SOC 2 Type II",
              body: "Biznes xavfsizligi SOC 2 Type II sertifikati bilan tasdiqlangan.",
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <item.icon size={28} className="mx-auto text-cobalt" />
              <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="scenarios" className="bg-fog px-5 py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Tanish <span className="text-cobalt">muammolar</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-lg text-muted">
            Biznes egalari har kuni duch keladigan 5 ta vaziyat va AI yordamchi ularni qanday yengillashtiradi.
          </p>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-[1180px] items-start gap-5 md:grid-cols-2">
          {scenarios.map((item, i) => (
            <details
              key={item.title}
              className="group rounded-[28px] border border-line bg-white p-6 md:p-7"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="text-xs font-semibold tracking-wider text-cobalt">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block text-xl font-semibold tracking-tight text-ink">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-[15px] leading-relaxed text-muted">
                    {item.hook}
                  </span>
                </span>
                <Plus
                  size={20}
                  weight="bold"
                  className="mt-1 shrink-0 text-cobalt transition-transform group-open:rotate-45"
                />
              </summary>
              <dl className="mt-5 grid gap-4 border-t border-line pt-5">
                {[
                  { label: "Muammo", text: item.problem },
                  { label: "Oqibat", text: item.impact },
                  { label: "Sabab", text: item.cause },
                  { label: "Yechim", text: item.solution },
                ].map((row) => (
                  <div key={row.label}>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-cobalt">
                      {row.label}
                    </dt>
                    <dd className="mt-1 text-[15px] leading-relaxed text-ink">{row.text}</dd>
                  </div>
                ))}
              </dl>
              <a
                href="#register"
                className="mt-5 block rounded-2xl bg-fog p-4 text-sm font-medium leading-relaxed text-cobalt-deep hover:text-cobalt"
              >
                {item.cta} →
              </a>
            </details>
          ))}
        </div>
      </section>

      <section
        id="faq"
        className="bg-[#8ec4ea] bg-cover bg-center px-4 py-20 md:px-6"
        style={{ backgroundImage: "url('/images/faq-bg.jpg')" }}
      >
        <div className="mx-auto grid max-w-[760px] gap-4">
          {faqs.map((item, i) => {
            const open = openFaq === i;
            return (
              <article
                key={item.q}
                className="rounded-[22px] bg-white px-6 py-5 shadow-[0_10px_30px_rgba(20,50,80,0.08)] md:px-7"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-6 text-left"
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className="text-lg font-semibold tracking-tight text-ink md:text-[1.35rem]">
                    {item.q}
                  </span>
                  <span className="mt-1 grid size-7 shrink-0 place-items-center text-cobalt">
                    {open ? <X size={20} weight="bold" /> : <Plus size={20} weight="bold" />}
                  </span>
                </button>
                {open ? (
                  <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-muted">
                    {item.a}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-[980px] items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Ro‘yxatdan <span className="text-cobalt">o‘tish</span>
            </h2>
            <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-muted">
              Biznesingiz uchun mos AI agentlarni ishga tushirish uchun ma’lumot qoldiring. Sotuv, moliya, marketing va boshqaruv jarayonlarini avtomatlashtiring.
            </p>
            <img
              src="/images/agent-setup.jpg"
              alt="Asoschilar Consulting biznes AI agenti"
              className="mt-8 w-full max-w-sm rounded-[28px]"
            />
          </div>
          <form
            id="register"
            onSubmit={onRegisterSubmit}
            className="grid gap-4 rounded-[28px] border border-line bg-fog p-6 md:p-8"
            noValidate
          >
            <h3 className="text-2xl font-semibold tracking-tight text-ink">
              Ro‘yxatdan o‘tish
            </h3>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Ismingiz
              <input
                name="name"
                placeholder="Masalan: Sardor Aliyev"
                className="h-12 rounded-xl border border-line bg-white px-3.5 text-[18px] outline-none ring-cobalt/30 focus:ring-4"
              />
            </label>
            <div className="grid gap-2 text-sm font-medium text-ink">
              Telefon raqam
              <PhoneInput name="contact" />
            </div>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Biznes yoki kompaniya nomi
              <input
                name="company"
                placeholder="Kompaniya nomi"
                className="h-12 rounded-xl border border-line bg-white px-3.5 text-[18px] outline-none ring-cobalt/30 focus:ring-4"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Xodimlar soni
              <select
                name="employees"
                defaultValue=""
                className="h-12 rounded-xl border border-line bg-white px-3 text-[18px] outline-none ring-cobalt/30 invalid:text-muted focus:ring-4"
                required
              >
                <option value="" disabled>
                  Tanlang
                </option>
                <option value="1-5">1–5 nafar</option>
                <option value="6-20">6–20 nafar</option>
                <option value="21-50">21–50 nafar</option>
                <option value="51-200">51–200 nafar</option>
                <option value="200+">200 nafardan ko‘p</option>
              </select>
            </label>
            {formStatus === "error" ? (
              <p className="text-sm text-red-600" role="alert">
                {formMessage}
              </p>
            ) : null}
            {formStatus === "ok" ? (
              <p className="text-sm font-medium text-cobalt-deep" role="status">
                {formMessage}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={formStatus === "loading" || formStatus === "ok"}
              className="btn-3d mt-2 h-14 rounded-full bg-cobalt text-xl font-semibold text-white disabled:opacity-60"
            >
              {formStatus === "loading"
                ? "Yuborilmoqda..."
                : formStatus === "ok"
                  ? "Ro‘yxatdan o‘tildi"
                  : "Ro‘yxatdan o‘tish"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
