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
    q: "AsosAI agentlari nima?",
    a: "Biznesingiz uchun haqiqiy ish qiladigan avtonom AI agentlar. Kun-tun o‘z virtual kompyuterida ishlaydi va 3 000+ biznes vositalariga ulanadi.",
  },
  {
    q: "Biznesda qanday ishlarni qila oladi?",
    a: "Moliya hisoboti, marketing, sotuv, rekruting, assistant, shartnoma tekshiruvi, bozor tahlili va boshqaruv brifi. Biznesingizga xos jarayon bo‘lsa, agentni aynan shu vazifaga moslab sozlab beramiz.",
  },
  {
    q: "Qaysi vositalar ulanadi?",
    a: "CRM, Slack, Google Workspace, Calendar, pochta, 1C va boshqalar. Biznesingiz ishlatadigan dastur bo‘lsa, odatda tayyor ulanishi bor.",
  },
  {
    q: "Nega AsosAI?",
    a: "Oddiy chatbotlar faqat matn yozadi. AsosAI esa biznesingizni audit qilib, ichki jarayonlaringizga moslab sozlangan va real tizimlarda ish bajaradigan AI agentlarni taqdim etadi.",
  },
  {
    q: "Agentlar biznesimga qanday moslashtiriladi?",
    a: "Avval biznes jarayonlaringiz audit qilinadi. So‘ngra har bir agent alohida bo‘lim, kanal yoki ichki tizimlaringizga moslab sozlanadi va integratsiya qilinadi.",
  },
  {
    q: "Agent uchun alohida kompyuter kerakmi?",
    a: "Yo‘q. Har bir AsosAI agenti butunlay bulutda, o‘z virtual muhitida ishlaydi. O‘rnatish talab qilinmaydi.",
  },
  {
    q: "Biznes ma’lumotlari qanday himoyalanadi?",
    a: "Har bir agent alohida izolyatsiyalangan muhitda ishlaydi va faqat siz ruxsat bergan tizimlarga kira oladi. Maxfiy ma’lumotlar ruxsatsiz ulashilmaydi.",
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
    title: "ERPga pul yetmayapti",
    hook: "Dasturlar ko‘p, lekin ular orasida o‘zingiz yugurib yuribsizmi?",
    problem: "Buyurtma Telegramda, mijozlar bazasi boshqa dasturda, to‘lovlar Excelda. Hammasini bir joyga yig‘adigan ERP olishga esa hozir byudjet yetmaydi.",
    impact: "Bir ma’lumotni qayta-qayta kiritishga vaqt ketadi. Bir joyini yangilash esdan chiqsa, raqamlar bir-biriga mos kelmay qoladi.",
    cause: "Chunki dasturlar orasidagi ma’lumot almashinuvi hali ham sizning qo‘lingizda.",
    solution: "Biz mavjud dasturlaringizni tekshirib, ulash mumkin bo‘lgan jarayonlarga AI yordamchi va avtomatlashtirishni joriy qilamiz.",
    cta: "Qaysi ishlarni katta tizim sotib olmasdan yengillashtirish mumkinligini bilish uchun biz bilan bog‘laning.",
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
    title: "Alohida rahbarlarga byudjet yo‘q",
    hook: "Ham rahbarsiz, ham hisobchi, ham marketolog?",
    problem: "Xarajatlarni o‘zingiz tekshirasiz, yangi xodimga nomzodlarni ham o‘zingiz ko‘rasiz. Reklama natijasini tahlil qilish kerak, lekin har yo‘nalishga alohida mutaxassis yollashga byudjet yetmaydi.",
    impact: "Bir ishni qilsangiz, ikkinchisi kutib qoladi. Muhim qarorlarni esa tayyor ma’lumotsiz, shoshilib qabul qilasiz.",
    cause: "Chunki mutaxassis qarorini talab qiladigan ish bilan oddiy tayyorlov ishlari ajratilmagan.",
    solution: "Biz AI yordamchiga ma’lumot yig‘ish, dastlabki saralash va hisobot tayyorlashni topshiramiz, yakuniy qaror esa sizda qoladi.",
    cta: "Jamoangizdagi qaysi ishlarni shu yo‘l bilan yengillashtirish mumkinligini bilish uchun biz bilan bog‘laning.",
  },
  {
    title: "Bandsiz, lekin muhim ishlar qolmoqda",
    hook: "Kun bo‘yi ishlaysiz, lekin asosiy ishga vaqt yetmaydimi?",
    problem: "Uchrashuv belgilaysiz, kerakli hujjatni qidirasiz, kelgan savollarga javob tayyorlaysiz. Kechga borib rejangizdagi eng muhim vazifa yana ertaga qoladi.",
    impact: "Biznesni rivojlantirishga kuchingiz ham, vaqtingiz ham kamayadi. Mayda ishlarni tugatasiz, lekin katta ishlar joyidan siljimaydi.",
    cause: "Chunki yordamchiga topshirish mumkin bo‘lgan kundalik ishlar ham sizning zimmangizda.",
    solution: "Biz biznesingizga mos AI yordamchini uchrashuvlarni tartiblash, kerakli ma’lumotni topish va javob qoralamalarini tayyorlashga sozlaymiz.",
    cta: "Vaqtingizni qaysi ishlar olayotganini aniqlash uchun biz bilan bog‘laning.",
  },
  {
    title: "Raqamlar bor, xulosa yo‘q",
    hook: "Hisobot bor, lekin undan qanday qaror chiqarishni bilmaysizmi?",
    problem: "Jadvalda sotuv ham, xarajat ham, reklama natijasi ham turibdi. Lekin qayerda o‘sish bor, qayerda pul yo‘qolyapti, buni tushunish uchun yana o‘tirib tahlil qilish kerak.",
    impact: "Natijada qarorni ko‘pincha sezgingiz bilan qilasiz. Muammoni esa zarar kattalashgandan keyin payqashingiz mumkin.",
    cause: "Chunki raqamlarni yig‘ishning o‘zi ularning ma’nosini tushuntirib bermaydi.",
    solution: "Biz AI yordamchini tekshirilgan ma’lumotlarni solishtirib, muhim o‘zgarishlar va tekshirish kerak bo‘lgan nuqtalarni ko‘rsatishga sozlaymiz.",
    cta: "Hisobotdan tushunarli xulosa olishni xohlasangiz, biz bilan bog‘laning.",
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
    title: "Hisobot keldi, lekin kech",
    hook: "Hisobot keldi, lekin qaror kecha kerak edi.",
    problem: "Siz bugungi holatni so‘raysiz, xodimlar esa hali kechagi raqamlarni yig‘ishyapti. Ma’lumot tayyor bo‘lguncha vaziyat yana o‘zgaradi.",
    impact: "Siz kechikkan raqamlar bilan bugungi ishni rejalashtirasiz. Tuzatish mumkin bo‘lgan muammoni esa vaqtida ko‘rmay qolasiz.",
    cause: "Chunki hisobot belgilangan vaqtda emas, kimdir so‘raganidan keyin tayyorlanadi.",
    solution: "Biz AI yordamchini ulangan manbalardagi ma’lumotlarni belgilangan vaqtda jamlab, yangilanish sanasi bilan hisobot berishga sozlaymiz.",
    cta: "Hisobotni so‘rab kutish o‘rniga o‘z vaqtida olish uchun biz bilan bog‘laning.",
  },
  {
    title: "Bir buyurtmaning uch xil nusxasi",
    hook: "Bir buyurtma, uchta dastur, uch xil ma’lumot.",
    problem: "Mijoz buyurtmani o‘zgartirdi, menejer Telegramda belgilab qo‘ydi. Lekin jadvalda ham, hisob-kitobda ham eski ma’lumot turibdi.",
    impact: "Jamoa eski buyurtma bo‘yicha ish boshlaydi. Keyin qayta qilishga vaqt ketadi, mijozga esa vaziyatni tushuntirish kerak bo‘ladi.",
    cause: "Chunki bir joydagi o‘zgarish qolgan dasturlarga avtomatik o‘tmaydi.",
    solution: "Biz avval ma’lumotning asosiy manbasini belgilab, ulash mumkin bo‘lgan dasturlar orasida yangilanishni avtomatlashtiramiz.",
    cta: "Yangi ERP olishdan oldin mavjud dasturlaringizni ulash imkonini bilish uchun biz bilan bog‘laning.",
  },
  {
    title: "«Bajarildi» hali tayyor degani emas",
    hook: "«Bajarildi» degan xabar bor, tayyor ish esa yo‘q.",
    problem: "Xodim vazifani yopdi, lekin kerakli faylni biriktirmadi. Natijani ochib ko‘rsangiz, kelishilgan ishning bir qismi qolib ketgan.",
    impact: "Siz vazifani qayta ochib, yana tushuntirasiz. Mijozga topshirish muddati esa suriladi.",
    cause: "Chunki ish qachon tayyor hisoblanishi va qanday topshirilishi oldindan aniq belgilanmagan.",
    solution: "Biz topshirish mezonlarini belgilab, AI yordamchini kerakli fayl va javoblarni yig‘ish hamda tekshiruvga chiqarishga sozlaymiz.",
    cta: "«Bajarildi» degan xabar emas, tekshiriladigan natija olish uchun biz bilan bog‘laning.",
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
    title: "Hamma javob faqat sizda",
    hook: "Siz javob bermasangiz, ish to‘xtaydimi?",
    problem: "Biri hujjatni qayerdan olishni, boshqasi mijoz bilan nima kelishilganini so‘raydi. Kerakli javoblar esa sizning xotirangizda yoki shaxsiy chatlaringizda qolgan.",
    impact: "Uchrashuvda bo‘lsangiz ham, telefonni tekshirib turasiz. Jamoa oddiy savolning javobi uchun sizning bo‘shashingizni kutadi.",
    cause: "Chunki ish uchun kerakli ma’lumotlarni jamoa mustaqil topa oladigan tartib yo‘q.",
    solution: "Biz tasdiqlangan ichki ma’lumotlarni tartiblab, AI yordamchini har bir xodimga faqat ruxsat etilgan javoblarni topib berishga sozlaymiz.",
    cta: "Oddiy savollar uchun doim sizga yozishlarini kamaytirish uchun biz bilan bog‘laning.",
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
  {
    title: "Buyurtma ko‘paydi, ish tiqilib qoldi",
    hook: "Buyurtma ko‘paydi, ish esa tiqilib qoldimi?",
    problem: "Avval bitta xodim buyurtmalarni jadvalga kiritishga ulgurardi. Endi ma’lumot ko‘chirish, hujjat tayyorlash va yuborish navbat bo‘lib yig‘ilyapti.",
    impact: "Mijozlar javobni uzoqroq kutadi. Jamoa esa yangi ish o‘rniga kechagi navbatni tugatish bilan band.",
    cause: "Chunki buyurtma soni oshgan, lekin har birini qayta ishlash hali ham qo‘lda bajariladi.",
    solution: "Biz buyurtmadan hujjatgacha bo‘lgan takroriy bosqichlarning mos qismini avtomatlashtirib, istisno va xatolarni xodim tekshiruviga chiqaramiz.",
    cta: "Ko‘proq buyurtmani eski usulda bajarishga urinmaslik uchun biz bilan bog‘laning.",
  },
];
