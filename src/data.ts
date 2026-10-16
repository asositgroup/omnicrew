export type Agent = {
  id: string;
  name: string;
  blurb: string;
  image: string;
  tone: string;
  goodFor: string[];
  does: string;
  used: string;
  gets: string;
  cta: string;
};

export const agents: Agent[] = [
  {
    id: "assistant",
    name: "Assistant",
    blurb: "Biznesingizning savol, eslatma va hujjatlar bo‘yicha AI agenti",
    image: "/images/agent-assistant.png",
    tone: "#e8f1ff",
    goodFor: ["Savol-javob", "Eslatma", "Hujjat", "Xulosa"],
    does: "Ichki hujjatlar, qarorlar va biznes jarayonlarini biladi. Savolga javob beradi va vazifani kerakli agentga yo‘naltiradi.",
    used: "Har bir biznes tizimi Assistant bilan boshlanadi: umumiy kanal, chat va kundalik takroriy jarayonlar.",
    gets: "Biznes bo‘yicha savol-javob, uchrashuv xulosasi, eslatma va hujjatlar tahlili.",
    cta: "Assistant agentini ochish",
  },
  {
    id: "hr",
    name: "Rekruting",
    blurb: "Nomzod, suhbat va yollash jarayonini avtomatlashtiradi",
    image: "/images/agent-hr.png",
    tone: "#f3e8de",
    goodFor: ["Nomzod", "Suhbat", "Vakansiya", "HR"],
    does: "Rezyume, vakansiya va suhbatlarni yig‘ib, qisqa xulosa va keyingi qadamni tayyorlaydi.",
    used: "Vakansiya, nomzod ma’lumotlari, kalendar va korporativ pochtani ulang.",
    gets: "Nomzod xulosasi, xatlar, suhbat tayyorgarligi va yollash eslatmalari.",
    cta: "Rekruting agentini ochish",
  },
  {
    id: "moliya",
    name: "Moliya",
    blurb: "Hisobot, byudjet va biznes pul oqimini nazorat qiladi",
    image: "/images/agent-moliya.png",
    tone: "#d7e6ff",
    goodFor: ["Byudjet", "Hisobot", "Kassa", "Prognoz"],
    does: "Moliyaviy hujjatlar, to‘lovlar va hisobotlarni yig‘ib, biznes rahbariyatiga tushunarli xulosa beradi.",
    used: "Bank, Excel, 1C yoki buxgalteriya tizimini ulang. Agent kechasi ham raqamlarni tartibga soladi.",
    gets: "Kunlik kassa, oylik P&L, to‘lov eslatmalari va byudjet ogohlantirishlari.",
    cta: "Moliya agentini ochish",
  },
  {
    id: "marketing",
    name: "Marketing",
    blurb: "G‘oya va tahlilni sotuv olib keladigan kontentga aylantiradi",
    image: "/images/agent-marketing.png",
    tone: "#e4ddff",
    goodFor: ["Kampaniya", "Kontent", "SMM", "Brif"],
    does: "Brend uslubi, bozor tahlili va kalendarni bir joyga yig‘ib, post, email va kampaniya rejasini yozadi.",
    used: "Docs, kalendar, brend qoidalari va marketing kanallarini ulang.",
    gets: "Kontent-kalendar, post matnlari, kampaniya briefi va tayyor marketing materiallari.",
    cta: "Marketing agentini ochish",
  },
  {
    id: "sotuv",
    name: "Sotuv",
    blurb: "Lidlarni tekshiradi va keyingi savdo xatini tayyorlaydi",
    image: "/images/agent-sotuv.png",
    tone: "#d4f0ff",
    goodFor: ["Lidlar", "CRM", "Xat", "Kuzatuv"],
    does: "Mijozni o‘rganadi, tijorat taklifini qisqacha yozadi va keyingi follow-up xatni tayyorlab qo‘yadi.",
    used: "CRM, pochta, savdo hujjatlari va mijozlar bazasini ulang.",
    gets: "Lid tahlili, mijoz xulosasi, xat qoralamasi va savdo eslatmalari.",
    cta: "Sotuv agentini ochish",
  },
  {
    id: "boshqaruv",
    name: "Boshqaruv",
    blurb: "Biznes jarayonlari, reja va kun tartibini bir joyda ushlab turadi",
    image: "/images/agent-boshqaruv.png",
    tone: "#e8eef7",
    goodFor: ["Reja", "Uchrashuv", "Pochta", "Nazorat"],
    does: "Kalendar, vazifa va qarorlarni kuzatib, biznes rahbariga ertalabki brifing beradi.",
    used: "Pochta, kalendar, hujjatlar va ishchi kanallarni ulang.",
    gets: "Kunlik brif, uchrashuv qaydlari, vazifalar nazorati va eslatmalar.",
    cta: "Boshqaruv agentini ochish",
  },
  {
    id: "yurist",
    name: "Yurist",
    blurb: "Shartnoma, risk va huquqiy muvofiqlikni tekshiradi",
    image: "/images/agent-yurist.png",
    tone: "#dde4f2",
    goodFor: ["Shartnoma", "Risk", "Muvofiqlik", "Qoida"],
    does: "Hujjatlarni o‘qiydi, biznes uchun xavfli bandlarni belgilaydi va aniq huquqiy xulosa beradi.",
    used: "Shartnoma papkasi, qoidalar va kompaniya siyosatini ulang.",
    gets: "Risk xulosasi, redline izohlar, checklist va eslatmalar.",
    cta: "Yurist agentini ochish",
  },
  {
    id: "analist",
    name: "Analist",
    blurb: "Bozor qidiruvi va raqamlarni aniq biznes xulosaga aylantiradi",
    image: "/images/agent-analist.png",
    tone: "#d5f3ea",
    goodFor: ["Qidiruv", "Tahlil", "Brief", "Trend"],
    does: "Sayt, hujjat va ma’lumotlarni o‘qib, bozor yoki biznes savoliga aniq javob yig‘adi.",
    used: "Manba, dashboard va tahlil maqsadini bering.",
    gets: "Bozor tahlili, raqobatchi xulosasi, trendlar va biznes tavsiyalar.",
    cta: "Analist agentini ochish",
  },
];

export const faqs = [
  {
    q: "AI agent oddiy chatbotdan nimasi bilan farq qiladi?",
    a: "Chatbot faqat savolga javob yozadi. AI agent esa ish bajaradi: CRM va jadvallardan ma’lumot yig‘adi, hisobot tayyorlaydi, xodimlarga eslatma yuboradi va natijani sizga chiqarib beradi.",
  },
  {
    q: "Biznesimga AI kerakligini qanday bilaman?",
    a: "Agar sizda har kuni takrorlanadigan ishlar bo‘lsa — hisobot yig‘ish, ma’lumot ko‘chirish, xodimlarni eslatish — demak, AI yordam bera oladi. Aniq qaysi jarayonlarda foyda berishini bepul auditda ko‘rsatamiz.",
  },
  {
    q: "Bepul auditda nima qilinadi?",
    a: "Biznes jarayonlaringiz va ishlatayotgan dasturlaringizni ko‘rib chiqamiz. Qaysi ishlar ko‘p vaqt va pul olayotganini aniqlab, ulardan qaysi birini AI agentga topshirish mumkinligini aytib beramiz.",
  },
  {
    q: "AI agent xodimlarimning o‘rnini egallaydimi?",
    a: "Yo‘q. Agent takroriy va texnik ishlarni oladi, xodimlaringiz esa mijoz bilan ishlash va qaror qabul qilishga ko‘proq vaqt ajratadi. Yakuniy qaror doim insonda qoladi.",
  },
  {
    q: "Hozirgi dasturlarimiz bilan ishlaydimi?",
    a: "amoCRM, Bitrix24, 1C, Telegram, Google Sheets va Excel kabi dasturlarga ulash mumkin. Sizdagi tizimlarni ulash imkoniyati audit paytida aniq tekshiriladi.",
  },
  {
    q: "Natijani qachon ko‘ramiz?",
    a: "Bitta muhim jarayondan boshlaymiz, shuning uchun birinchi natija tez ko‘rinadi. Aniq muddat avtomatlashtiriladigan jarayonga qarab auditdan keyin aytiladi.",
  },
  {
    q: "Narxi qancha turadi?",
    a: "Narx jarayonlar soni va murakkabligiga bog‘liq. Auditdan keyin aniq taklif va tejaladigan vaqt hisob-kitobini beramiz, shundan keyin qaror qilasiz.",
  },
  {
    q: "Ma’lumotlarimiz xavfsizmi?",
    a: "Agent faqat siz ruxsat bergan tizim va ma’lumotlarga kiradi. Muhim amallar inson tasdig‘isiz bajarilmaydi, ma’lumotlaringiz uchinchi shaxslarga berilmaydi.",
  },
];

export const apps = [
  { name: "Slack", src: "/icons/slack.svg" },
  { name: "Microsoft Teams", src: "/icons/microsoft-teams.svg" },
  { name: "Google", src: "/icons/google.svg" },
  { name: "Notion", src: "/icons/notion.svg" },
  { name: "Salesforce", src: "/icons/salesforce.svg" },
  { name: "Asana", src: "/icons/asana.svg" },
  { name: "Telegram", src: "/icons/telegram.svg" },
  { name: "Zoom", src: "/icons/zoom.svg" },
  { name: "LinkedIn", src: "/icons/linkedin.svg" },
  { name: "Linear", src: "/icons/linear.svg" },
  { name: "GitHub", src: "/icons/github.svg" },
  { name: "Gmail", src: "/icons/gmail.svg" },
];

export const chats = [
  {
    title: "Sotuv agenti",
    channel: "#sales",
    messages: [
      {
        who: "Sotuv",
        body: "3 ta issiq lidni tekshirdim. Keyingi xatlar CRM da turibdi.",
      },
      {
        who: "Laylo",
        body: "Ikkinchisini qisqaroq qil.",
      },
    ],
  },
  {
    title: "Moliya agenti",
    channel: "#finance",
    messages: [
      {
        who: "Moliya",
        body: "Kecha 12 ta to'lov keldi. 2 tasi kechikkan. Hisobotni yubordim.",
      },
      {
        who: "Samir",
        body: "Kechikkan ikkalasini menga ber.",
      },
    ],
  },
  {
    title: "Yurist agenti",
    channel: "#legal",
    messages: [
      {
        who: "Yurist",
        body: "Yangi NDA da 4 ta xavfli band bor. Qisqa xulosa hujjatda.",
      },
      {
        who: "Mina",
        body: "14:00 dan keyin ko'raman.",
      },
    ],
  },
];

export const scenarios = [
  {
    title: "Hisobot olish uchun hammani quvlaysizmi?",
    hook: "Hisobot kerak bo‘lsa, hammaga birma-bir yozib chiqasizmi?",
    problem: "Sotuvchi o‘z raqamini yuboradi, hisobchi esa hali tayyorlamagan. Kelgan ma’lumotlarni ham o‘zingiz birlashtirib chiqasiz.",
    impact: "Biznesni boshqarish o‘rniga raqam yig‘ishga vaqtingiz ketadi. Qaror qilishga kelganda esa hali ham to‘liq manzara yo‘q.",
    cause: "Chunki ma’lumotlar turli joyda, ularni yig‘ish esa sizga bog‘liq.",
    solution: "Biz AI yordamchini ulangan manbalardan raqamlarni jamlab, sizga tushunarli hisobot tayyorlashga sozlaymiz.",
    cta: "Hisobotni yig‘ishga emas, undan foydalanishga vaqt ajratmoqchi bo‘lsangiz, biz bilan bog‘laning.",
  },
  {
    title: "Xodimga doim eslatish kerak",
    hook: "Vazifa berdingiz, endi eslatib yurish ham sizning ishingizmi?",
    problem: "Ertalab topshiriq berasiz, kechqurun natijasini o‘zingiz so‘raysiz. «Esimdan chiqibdi» degan javobdan keyin muddatni yana eslatasiz.",
    impact: "O‘z ishingiz qolib, boshqalarning vazifasini kuzatib yurasiz. Eslatmay qo‘ysangiz, kechikkan ishni mijoz so‘raganda bilib qolasiz.",
    cause: "Chunki vazifa, muddat va natijani kuzatishning aniq tartibi yo‘q.",
    solution: "Biz AI yordamchini belgilangan vazifalarni kuzatish, eslatish va kechikkan ishlarni sizga chiqarishga sozlaymiz.",
    cta: "Har bir topshiriqni boshingizda olib yurishni kamaytirish uchun biz bilan bog‘laning.",
  },
  {
    title: "Kompyuterdagi takroriy ishlar",
    hook: "Har kuni kompyuterda bir xil ishni qaytaryapsizmi?",
    problem: "Bir dasturdagi ma’lumotni ikkinchisiga ko‘chirasiz, jadval to‘ldirasiz. Keyin shu ma’lumotdan yana hujjat yoki hisobot tayyorlaysiz.",
    impact: "Mayda ko‘ringan bu ishlar kun davomida vaqtingizni oladi. Bitta raqam noto‘g‘ri ko‘chsa, xatoni qidirib, hammasini qayta tekshirasiz.",
    cause: "Chunki takrorlanadigan ishlar uchun avtomatik jarayon qurilmagan.",
    solution: "Biz shu vazifalarni ajratib, texnik imkoniga qarab avtomatlashtiramiz, kerakli joylarga esa tekshiruv qo‘yamiz.",
    cta: "Qaysi takroriy ishlaringizni avtomatlashtirish mumkinligini bilish uchun biz bilan bog‘laning.",
  },
  {
    title: "Har bir vazifaga yangi xodimmi?",
    hook: "Har bir vazifaga yangi odam yollash shartmi?",
    problem: "Hisob-kitob ko‘paydi, yana bir xodim kerakdek ko‘rinadi. Nomzodlar bilan ishlashga ham, reklama hisobotiga ham alohida odam izlayapsiz.",
    impact: "Lekin hammasining oyligiga hozir byudjet yetmaydi. Natijada bu ishlarni o‘zingiz yoki mavjud jamoangiz ortiqcha yuk bilan bajaryapsiz.",
    cause: "Chunki mutaxassisning qarori kerak bo‘lgan vazifalar takroriy tayyorlov ishlaridan ajratilmagan.",
    solution: "Biz ma’lumot yig‘ish, saralash va qoralama tayyorlashni AI yordamchiga berib, mutaxassisga tekshirish va qaror qilishni qoldiramiz.",
    cta: "Yangi xodim yollashdan oldin qaysi ishlarni yengillashtirish mumkinligini bilish uchun biz bilan bog‘laning.",
  },
  {
    title: "Sotuv ko‘p, foyda noma’lum",
    hook: "Buyurtma ko‘p, lekin foyda qani?",
    problem: "Sotuv hisobotida raqamlar o‘sib boryapti. Lekin har bir buyurtmaga ketgan xarajatni hisobga olganingizda qancha qolayotganini bilmaysiz.",
    impact: "Foydasi kam ishga ko‘proq vaqt va odam ajratishingiz mumkin. Yaxshi daromad berayotgan yo‘nalish esa e’tibordan chetda qoladi.",
    cause: "Chunki tushum bilan unga tegishli xarajatlar birga solishtirilmayapti.",
    solution: "Biz tushum va xarajat hisobini bog‘lab, AI yordamchini foyda farqlarini tushuntirish va yetishmayotgan ma’lumotni ko‘rsatishga sozlaymiz.",
    cta: "Faqat sotuvni emas, buyurtmalarning foydasini ham ko‘rish uchun biz bilan bog‘laning.",
  },
];
