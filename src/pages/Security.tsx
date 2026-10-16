import { LockKey, ShieldCheck, UsersThree, Wall } from "@phosphor-icons/react";

const items = [
  {
    icon: UsersThree,
    title: "Admin boshqaruvi",
    body: "Qaysi agentlar ishlashi, qanday skill o‘rnatishi va qaysi biznes dasturlarga ulanishini siz belgilaysiz. Har bir o‘zgarish yozib qolinadi.",
  },
  {
    icon: LockKey,
    title: "Tasdiqlanadigan seyf",
    body: "Parol va tokenlar alohida seyfda turadi. Muhim biznes amaliga mas’ul shaxs ruxsati talab qilinadi.",
  },
  {
    icon: Wall,
    title: "Alohida kompyuterlar",
    body: "Har bir agentning o‘z virtual mashinasi va fayl ombori bor. Ruxsat bermasangiz, boshqa bo‘limlar ma’lumotni ko‘rmaydi.",
  },
  {
    icon: ShieldCheck,
    title: "SOC 2 Type II",
    body: "Nazorat mustaqil auditdan o‘tgan. Korporativ xarid uchun hisobot kerak bo‘lsa, so‘rang.",
  },
];

export function Security() {
  return (
    <main className="pb-20">
      <section className="px-4 pb-6 pt-5 md:pt-6">
        <div className="mx-auto max-w-[1240px] md:relative md:overflow-hidden md:rounded-[28px]">
          <img
            src="/images/security-key.jpg"
            alt="Odam kalitni AsosAI agentiga topshirayapti"
            className="aspect-[16/9] w-full rounded-[28px] object-cover object-center md:rounded-none"
          />
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-tr from-ink/20 via-transparent to-transparent md:block" />
          <div className="mt-4 rounded-[24px] bg-white p-5 shadow-[0_16px_50px_rgba(20,24,32,0.14)] md:absolute md:bottom-8 md:left-8 md:right-auto md:mt-0 md:max-w-xl md:bg-white/96 md:p-8">
            <h1 className="text-3xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl">
              Biznesingizda AI agentlarni xavfsiz ishlatish uchun qurilgan
            </h1>
            <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-muted md:text-base">
              Oddiy AI vositalarning o‘zi yetarli emas. AsosAI biznesga kerak bo‘lgan izolyatsiya, seyf va admin qatlamini qo‘shadi.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 grid max-w-[1240px] gap-5 px-4 sm:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-[24px] bg-white p-6 md:p-7">
            <item.icon size={26} className="text-cobalt" />
            <h2 className="mt-3 text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
