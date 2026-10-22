// =====================================================
//   SINF O'QUVCHILARI
// =====================================================
const OQUVCHILAR = [
  "Abdijalilova G.", "Akbarova S.", "Akramova F.", "Amanillayeva S.",
  "Axmatova O.", "Ikromov D.", "Ismatov S.", "Ismoilov M.",
  "Maxamadaliyeva M.", "Murodov E.", "Muxamatguliyeva G.", "Nurmatova M.",
  "Qulboyev A.", "Rasuljanova F.", "Ravshanov S.", "Raxmonova R.",
  "Safaraliyeva S.", "Tillaboyev A.", "Valijonov B.", "Yusupov D.",
  "Zokirov Z.", "Zokirova F.", "Zulhaydarova S.", "Sherqo'ziyev K.",
  "Abbosov K.", "Abdulqosimova Sh.", "Abdurashidova M.", "Ashirov A.",
  "Bekmirzayeva M.", "Umarov S.", "Hakimov A.", "Xudoyorxonova E.",
];

// =====================================================
//   SAVOLLAR — 7-sinf darsliklari mavzulari bo'yicha
//   Har bir savol: ["Savol matni", "TO'G'RI javob", "noto'g'ri", "noto'g'ri", "noto'g'ri"]
//   O'yinda javoblar aralashtirib ko'rsatiladi.
//   Yangi savol qo'shish uchun xuddi shu shaklda yozing!
// =====================================================
const FAN_BELGI = {
  "Matematika": "🔢", "Ona tili": "✏️", "Adabiyot": "📖", "Biologiya": "🧬",
  "Fizika": "⚡", "Tarix": "🏛️", "Geografiya": "🌍", "Ingliz tili": "🇬🇧",
};

const SAVOLLAR = {
  // ---------- ALGEBRA VA GEOMETRIYA (7-sinf) ----------
  "Matematika": [
    ["(a + b)² = ?", "a² + 2ab + b²", "a² + b²", "a² − 2ab + b²", "2a + 2b"],
    ["(a − b)(a + b) = ?", "a² − b²", "a² + b²", "(a − b)²", "a² − 2ab + b²"],
    ["(x − 3)² ni qavslarni ochib yozing", "x² − 6x + 9", "x² − 9", "x² + 6x + 9", "x² − 3x + 9"],
    ["a³ · a⁴ = ?", "a⁷", "a¹²", "a¹", "2a⁷"],
    ["a⁸ : a² = ?", "a⁶", "a⁴", "a¹⁰", "a¹⁶"],
    ["(a²)³ = ?", "a⁶", "a⁵", "a⁸", "a⁹"],
    ["Noldan farqli istalgan sonning nolinchi darajasi nechaga teng?", "1", "0", "Sonning o'ziga", "Mavjud emas"],
    ["−3x²y⁵ birhadning darajasi nechaga teng?", "7", "5", "2", "10"],
    ["y = 2x + 3 funksiyada x = 4 bo'lsa, y = ?", "11", "9", "14", "5"],
    ["y = kx + b chiziqli funksiyada k nima deb ataladi?", "Burchak koeffitsiyenti", "Ozod had", "Argument", "Funksiya qiymati"],
    ["x + y = 10 va x − y = 2 tenglamalar sistemasida x = ?", "6", "4", "8", "5"],
    ["3x − 7 = 2x + 5 bo'lsa, x = ?", "12", "−2", "2", "−12"],
    ["Qo'shni burchaklarning yig'indisi necha gradus?", "180°", "90°", "360°", "270°"],
    ["Vertikal burchaklar haqida qaysi gap to'g'ri?", "Ular teng", "Yig'indisi 90°", "Yig'indisi 180°", "Biri ikkinchisidan 2 marta katta"],
    ["Teng yonli uchburchakning asosidagi burchaklari qanday?", "Teng", "Biri to'g'ri burchak", "Yig'indisi 90°", "Har doim har xil"],
    ["Uchburchakning ikki burchagi 50° va 60°. Uchinchi burchagi necha gradus?", "70°", "80°", "90°", "110°"],
    ["Ikki parallel to'g'ri chiziq kesuvchi bilan kesilganda ichki almashinuvchi burchaklar qanday bo'ladi?", "Teng", "Yig'indisi 90°", "Yig'indisi 360°", "Har doim to'g'ri burchak"],
    ["Uchburchakning eng katta tomoni qarshisida qanday burchak yotadi?", "Eng katta burchak", "Eng kichik burchak", "Har doim to'g'ri burchak", "Har doim o'tkir burchak"],
  ],

  // ---------- ONA TILI (7-sinf: fe'l va uning shakllari, yordamchi so'zlar) ----------
  "Ona tili": [
    ["Fe'l qaysi so'roqlarga javob bo'ladi?", "Nima qildi? Nima qilyapti?", "Kim? Nima?", "Qanday? Qanaqa?", "Qancha? Nechta?"],
    ["«O'qigan bola» birikmasida «o'qigan» so'zi qaysi shakl?", "Sifatdosh", "Ravishdosh", "Harakat nomi", "Ravish"],
    ["«Kulib gapirdi» birikmasida «kulib» so'zi qaysi shakl?", "Ravishdosh", "Sifatdosh", "Harakat nomi", "Sifat"],
    ["«O'qish — foydali» gapida «o'qish» so'zi qaysi shakl?", "Harakat nomi", "Sifatdosh", "Ravishdosh", "Ravish"],
    ["«Yozdirmoq» fe'li qaysi nisbatda?", "Orttirma nisbat", "O'zlik nisbat", "Majhul nisbat", "Birgalik nisbat"],
    ["«Yozilmoq» fe'li qaysi nisbatda?", "Majhul nisbat", "Orttirma nisbat", "Birgalik nisbat", "Aniq nisbat"],
    ["«Kulishmoq» fe'li qaysi nisbatda?", "Birgalik nisbat", "Majhul nisbat", "O'zlik nisbat", "Orttirma nisbat"],
    ["«Bor! O'qi!» fe'llari qaysi maylda?", "Buyruq-istak mayli", "Shart mayli", "Xabar mayli", "Maqsad mayli"],
    ["«Kelsang» fe'li qaysi maylda?", "Shart mayli", "Buyruq-istak mayli", "Xabar mayli", "Maqsad mayli"],
    ["«Yozdi» fe'li qaysi zamonda?", "O'tgan zamon", "Hozirgi zamon", "Kelasi zamon", "Zamonsiz"],
    ["Quyidagi so'zlardan qaysi biri ravish?", "Ertalab", "Qizil", "Kitob", "Yugurdi"],
    ["«Voy!», «Obbo!» so'zlari qaysi turkumga kiradi?", "Undov", "Yuklama", "Ko'makchi", "Taqlid so'z"],
    ["«Taq-tuq», «g'ing'-g'ing'» qanday so'zlar?", "Taqlid so'zlar", "Undov so'zlar", "Modal so'zlar", "Yuklamalar"],
    ["«Albatta», «ehtimol» qanday so'zlar?", "Modal so'zlar", "Undovlar", "Taqlid so'zlar", "Ko'makchilar"],
    ["Quyidagilardan qaysi biri bog'lovchi?", "Lekin", "Uchun", "Juda", "Kitob"],
    ["Quyidagilardan qaysi biri ko'makchi?", "Uchun", "Lekin", "Tez", "Qizil"],
  ],

  // ---------- ADABIYOT ----------
  "Adabiyot": [
    ["«O'tkan kunlar» romanining muallifi kim?", "Abdulla Qodiriy", "Cho'lpon", "G'afur G'ulom", "Abdulla Qahhor"],
    ["«Mehrobdan chayon» romanining muallifi kim?", "Abdulla Qodiriy", "Oybek", "Cho'lpon", "Pirimqul Qodirov"],
    ["«Bolalik» qissasining muallifi kim?", "Oybek", "G'afur G'ulom", "Abdulla Qahhor", "Said Ahmad"],
    ["«Shum bola» qissasining muallifi kim?", "G'afur G'ulom", "Abdulla Qahhor", "Oybek", "Hamza"],
    ["«Shum bola» qissasining bosh qahramoni kim?", "Qoravoy", "Alpomish", "Otabek", "Anvar"],
    ["«O'g'ri» hikoyasining muallifi kim?", "Abdulla Qahhor", "Abdulla Qodiriy", "Oybek", "Cho'lpon"],
    ["«Bemor» hikoyasining muallifi kim?", "Abdulla Qahhor", "G'afur G'ulom", "Said Ahmad", "O'tkir Hoshimov"],
    ["«Kecha va kunduz» romanining muallifi kim?", "Cho'lpon", "Abdulla Qodiriy", "Oybek", "Erkin Vohidov"],
    ["«Farhod va Shirin» dostonining muallifi kim?", "Alisher Navoiy", "Bobur", "Ogahiy", "Furqat"],
    ["Alisher Navoiy fors tilidagi she'rlarini qaysi taxallus bilan yozgan?", "Foniy", "Bobur", "Nodira", "Uvaysiy"],
    ["«Mahbub ul-qulub» asarining muallifi kim?", "Alisher Navoiy", "Zahiriddin Muhammad Bobur", "Ogahiy", "Muqimiy"],
    ["«Alpomish» dostonida Alpomishning otining nomi nima?", "Boychibor", "G'irot", "Qorabayir", "Duldul"],
    ["«Alpomish» dostonida Alpomishning yori kim?", "Barchin", "Shirin", "Layli", "Kumush"],
    ["«Boy ila xizmatchi» dramasining muallifi kim?", "Hamza Hakimzoda Niyoziy", "Abdulla Qodiriy", "Cho'lpon", "Fitrat"],
    ["«Dunyoning ishlari» asarining muallifi kim?", "O'tkir Hoshimov", "Said Ahmad", "Tohir Malik", "Xudoyberdi To'xtaboyev"],
    ["«Sariq devni minib» asarining muallifi kim?", "Xudoyberdi To'xtaboyev", "Anvar Obidjon", "Tohir Malik", "Hojiakbar Shayxov"],
  ],

  // ---------- BIOLOGIYA (7-sinf: Zoologiya) ----------
  "Biologiya": [
    ["Hayvonlarni o'rganadigan fan qanday ataladi?", "Zoologiya", "Botanika", "Anatomiya", "Mikologiya"],
    ["Soxta oyoqlar yordamida harakatlanadigan bir hujayrali hayvon qaysi?", "Amyoba", "Infuzoriya-tufelka", "Yashil evglena", "Gidra"],
    ["Kiprikchalar yordamida harakatlanadigan bir hujayrali hayvon qaysi?", "Infuzoriya-tufelka", "Amyoba", "Gidra", "Planariya"],
    ["Xlorofilli, yorug'likda fotosintez qila oladigan bir hujayrali qaysi?", "Yashil evglena", "Amyoba", "Infuzoriya-tufelka", "Bezgak paraziti"],
    ["Bezgak kasalligini qaysi hasharot tarqatadi?", "Bezgak chivini (anofeles)", "Uy pashshasi", "Asalari", "Kapalak"],
    ["Gidra qaysi tipga kiradi?", "Bo'shliqichlilar", "Chuvalchanglar", "Mollyuskalar", "Bo'g'imoyoqlilar"],
    ["Yomg'ir chuvalchangi qaysi tipga kiradi?", "Halqali chuvalchanglar", "Yassi chuvalchanglar", "To'garak chuvalchanglar", "Mollyuskalar"],
    ["Askarida qayerda yashaydi?", "Odam ichagida parazitlik qiladi", "Tuproqda erkin yashaydi", "Dengiz tubida", "Daraxt po'stlog'ida"],
    ["Tishsiz baqachanoq qaysi tipga kiradi?", "Mollyuskalar", "Bo'g'imoyoqlilar", "Chuvalchanglar", "Bo'shliqichlilar"],
    ["Hasharotlarning tanasi necha qismdan iborat?", "3 ta: bosh, ko'krak, qorin", "2 ta", "4 ta", "5 ta"],
    ["Kapalak rivojlanishining to'g'ri tartibi qaysi?", "Tuxum → qurt → g'umbak → kapalak", "Tuxum → g'umbak → qurt → kapalak", "Qurt → tuxum → kapalak → g'umbak", "Tuxum → kapalak → qurt → g'umbak"],
    ["Baliqlar nima bilan nafas oladi?", "Jabra bilan", "O'pka bilan", "Faqat teri bilan", "Traxeya bilan"],
    ["Baliqlarning yuragi necha kamerali?", "2", "3", "4", "1"],
    ["Baqaning itbalig'i nima bilan nafas oladi?", "Jabra bilan", "O'pka bilan", "Traxeya bilan", "Nafas olmaydi"],
    ["Quyidagilardan qaysi biri sudralib yuruvchi?", "Toshbaqa", "Baqa", "Delfin", "Ko'rshapalak"],
    ["Ko'rshapalak qaysi sinfga kiradi?", "Sutemizuvchilar", "Qushlar", "Hasharotlar", "Sudralib yuruvchilar"],
    ["Kit qaysi sinfga kiradi?", "Sutemizuvchilar", "Baliqlar", "Suvda hamda quruqlikda yashovchilar", "Sudralib yuruvchilar"],
    ["Qushlar va sutemizuvchilarning tana harorati qanday?", "Doimiy", "O'zgaruvchan", "Atrof muhitga bog'liq", "Juda past"],
  ],

  // ---------- FIZIKA (7-sinf) ----------
  "Fizika": [
    ["Uzunlikning XBS dagi asosiy birligi qaysi?", "Metr", "Santimetr", "Kilometr", "Dyuym"],
    ["Vaqtning XBS dagi asosiy birligi qaysi?", "Sekund", "Minut", "Soat", "Sutka"],
    ["Jism vaziyatining boshqa jismlarga nisbatan vaqt o'tishi bilan o'zgarishi nima deyiladi?", "Mexanik harakat", "Diffuziya", "Inersiya", "Bosim"],
    ["Moddalar molekulalarining o'z-o'zidan bir-biriga aralashib ketishi nima deyiladi?", "Diffuziya", "Bug'lanish", "Erish", "Kondensatsiya"],
    ["Jismning tezligini saqlash xossasi nima deyiladi?", "Inersiya", "Ishqalanish", "Deformatsiya", "Diffuziya"],
    ["Tezlik formulasi qaysi?", "v = s / t", "v = s · t", "v = t / s", "v = m / V"],
    ["Avtomobil 2 soatda 120 km yo'l bosdi. Uning tezligi qancha?", "60 km/soat", "240 km/soat", "120 km/soat", "30 km/soat"],
    ["Zichlik formulasi qaysi?", "ρ = m / V", "ρ = m · V", "ρ = V / m", "ρ = F / S"],
    ["Og'irlik kuchi formulasi qaysi?", "F = m · g", "F = m / g", "F = g / m", "F = p · S"],
    ["Massasi 5 kg bo'lgan jismning og'irlik kuchi qancha? (g = 10 N/kg)", "50 N", "5 N", "0,5 N", "500 N"],
    ["Kuchni o'lchaydigan asbob qaysi?", "Dinamometr", "Termometr", "Barometr", "Spidometr"],
    ["Suyuqlik hajmini o'lchaydigan idish qaysi?", "Menzurka", "Barometr", "Dinamometr", "Tarozi"],
    ["Bosim formulasi qaysi?", "p = F / S", "p = F · S", "p = m / V", "p = S / F"],
    ["Atmosfera bosimini o'lchaydigan asbob qaysi?", "Barometr", "Dinamometr", "Ampermetr", "Menzurka"],
    ["Atmosfera bosimini birinchi bo'lib kim o'lchagan?", "Torrichelli", "Nyuton", "Arximed", "Paskal"],
    ["Paskal qonuniga ko'ra suyuqlik bosimni qanday uzatadi?", "Barcha yo'nalishlarda bir xil", "Faqat pastga", "Faqat yuqoriga", "Faqat yon tomonlarga"],
    ["Mexanik ish formulasi qaysi?", "A = F · s", "A = F / s", "A = m · v", "A = p · S"],
    ["20 N kuch jismni 3 m ga siljitdi. Bajarilgan ish qancha?", "60 J", "23 J", "6,7 J", "600 J"],
    ["Quvvatning o'lchov birligi qaysi?", "Vatt", "Joul", "Nyuton", "Paskal"],
    ["Tayanch atrofida aylana oladigan qattiq jism qanday oddiy mexanizm?", "Richag", "Qiya tekislik", "Pona", "Vint"],
  ],

  // ---------- TARIX (7-sinf: O'zbekiston tarixi) ----------
  "Tarix": [
    ["Somoniylar davlatining poytaxti qaysi shahar edi?", "Buxoro", "Samarqand", "Xiva", "Termiz"],
    ["Somoniylar sulolasining mashhur hukmdori kim?", "Ismoil Somoniy", "Mahmud G'aznaviy", "Chingizxon", "Bobur"],
    ["Mo'g'ullar Movarounnahr va Xorazmga qaysi yillarda bostirib kirgan?", "1219–1221-yillar", "1370-yil", "1500-yil", "999-yil"],
    ["Mo'g'ullarga qarshi qahramonona kurashgan Xorazmshoh kim?", "Jaloliddin Manguberdi", "Mahmud G'aznaviy", "Ismoil Somoniy", "Amir Temur"],
    ["Xo'jand mudofaasiga kim boshchilik qilgan?", "Temur Malik", "Jaloliddin Manguberdi", "Najmiddin Kubro", "Inolchiq"],
    ["Urganch mudofaasida halok bo'lgan mashhur alloma kim?", "Najmiddin Kubro", "Ibn Sino", "Beruniy", "Al-Xorazmiy"],
    ["Amir Temur o'z davlatiga qaysi yili asos solgan?", "1370-yil", "1336-yil", "1405-yil", "1220-yil"],
    ["Amir Temur davlatining poytaxti qaysi shahar edi?", "Samarqand", "Buxoro", "Toshkent", "Hirot"],
    ["Algebra faniga asos solgan alloma kim?", "Al-Xorazmiy", "Ibn Sino", "Beruniy", "Farg'oniy"],
    ["«Tib qonunlari» asarini kim yozgan?", "Ibn Sino", "Al-Xorazmiy", "Beruniy", "Forobiy"],
    ["Abu Rayhon Beruniy qaysi hududda tug'ilgan?", "Xorazm", "Farg'ona", "Buxoro", "Toshkent"],
    ["Mirzo Ulug'bek rasadxonasi qaysi shaharda?", "Samarqand", "Buxoro", "Toshkent", "Xiva"],
  ],

  // ---------- GEOGRAFIYA (7-sinf: materiklar va okeanlar) ----------
  "Geografiya": [
    ["Eng katta materik qaysi?", "Yevrosiyo", "Afrika", "Shimoliy Amerika", "Antarktida"],
    ["Eng kichik materik qaysi?", "Avstraliya", "Antarktida", "Janubiy Amerika", "Afrika"],
    ["Eng sovuq materik qaysi?", "Antarktida", "Yevrosiyo", "Shimoliy Amerika", "Avstraliya"],
    ["Eng issiq materik qaysi?", "Afrika", "Avstraliya", "Janubiy Amerika", "Yevrosiyo"],
    ["Dunyodagi eng katta issiq cho'l qaysi?", "Sahroi Kabir", "Qizilqum", "Gobi", "Atakama"],
    ["Dunyodagi eng baland cho'qqi qaysi?", "Jomolungma (Everest)", "Kilimanjaro", "Elbrus", "Akonkagua"],
    ["Kilimanjaro tog'i qaysi materikda?", "Afrika", "Janubiy Amerika", "Avstraliya", "Yevrosiyo"],
    ["Amazonka daryosi qaysi materikda?", "Janubiy Amerika", "Afrika", "Avstraliya", "Yevrosiyo"],
    ["And tog'lari qaysi materikda?", "Janubiy Amerika", "Shimoliy Amerika", "Afrika", "Avstraliya"],
    ["Kenguru tabiatda qaysi materikda yashaydi?", "Avstraliya", "Afrika", "Janubiy Amerika", "Yevrosiyo"],
    ["Dunyodagi eng katta va eng chuqur okean qaysi?", "Tinch okeani", "Atlantika okeani", "Hind okeani", "Shimoliy Muz okeani"],
    ["Dunyo okeanining eng chuqur joyi qaysi?", "Mariana botig'i", "Baykal ko'li", "Kaspiy dengizi", "O'lik dengiz"],
    ["Dunyodagi eng chuqur ko'l qaysi?", "Baykal", "Kaspiy", "Viktoriya", "Orol"],
    ["Sirdaryo viloyatining markazi qaysi shahar?", "Guliston", "Yangiyer", "Shirin", "Jizzax"],
  ],

  // ---------- INGLIZ TILI ----------
  "Ingliz tili": [
    ["«Go» fe'lining o'tgan zamon shakli qaysi?", "Went", "Goed", "Gone", "Going"],
    ["«Buy» fe'lining o'tgan zamon shakli qaysi?", "Bought", "Buyed", "Buy", "Brought"],
    ["«Child» so'zining ko'plik shakli qaysi?", "Children", "Childs", "Childes", "Childrens"],
    ["«Mouse» so'zining ko'plik shakli qaysi?", "Mice", "Mouses", "Mices", "Mousees"],
    ["«Good» so'zining qiyosiy darajasi qaysi?", "Better", "Gooder", "Best", "More good"],
    ["«Big» so'zining orttirma darajasi qaysi?", "The biggest", "The bigger", "The most big", "The bigest"],
    ["She ___ to school every day.", "goes", "go", "going", "gone"],
    ["I ___ a student.", "am", "is", "are", "be"],
    ["They ___ football now.", "are playing", "plays", "is playing", "play"],
    ["«Yesterday» so'zining tarjimasi nima?", "Kecha", "Bugun", "Ertaga", "Hozir"],
    ["«Qishloq» ingliz tilida qanday bo'ladi?", "Village", "City", "Street", "Market"],
  ],
};

// =====================================================
//   O'YIN KODI — bu yerni o'zgartirish shart emas
// =====================================================

const HARFLAR = ["A", "B", "C", "D"];
const BALL = 10;
const STANDART_NOMLAR = ["Burgutlar 🦅", "Sherlar 🦁", "Yo'lbarslar 🐯", "Bo'rilar 🐺"];
const MEDALLAR = ["🥇", "🥈", "🥉", "🏅"];

let jamoaSoni = 2;
let jamoalar = [];
let jamoaNomlari = [];
let ballar = [];
let navbatlar = [];
let yordamQoldi = [];
let togriJavoblar = {};
let oyinSavollari = [];
let joriy = 0;
let navbatJamoa = 0;
let javobBeruvchi = "";
let taymer = null;
let qolganVaqt = 0;
let vaqtLimit = 30;
let javobBerildi = false;

const $ = id => document.getElementById(id);

function aralashtir(royxat) {
  const a = [...royxat];
  for (let i = a.length - 1; i > 0; i--) {
    const k = Math.floor(Math.random() * (i + 1));
    [a[i], a[k]] = [a[k], a[i]];
  }
  return a;
}

function ekranKorsat(id) {
  document.querySelectorAll(".ekran").forEach(e => e.classList.remove("faol"));
  $(id).classList.add("faol");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---------- O'QUVCHILAR ----------
function royxatChiz() {
  const div = $("oquvchilarRoyxat");
  div.innerHTML = "";
  OQUVCHILAR.forEach((ism, i) => {
    const label = document.createElement("label");
    label.className = "oquvchi";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = true;
    cb.dataset.i = i;
    cb.addEventListener("change", oquvchiOzgardi);
    label.append(cb, document.createTextNode(ism));
    div.appendChild(label);
  });
  kelganSoniYangila();
}

function kelganlar() {
  return [...document.querySelectorAll("#oquvchilarRoyxat input:checked")]
    .map(cb => OQUVCHILAR[cb.dataset.i]);
}

function kelganSoniYangila() {
  $("kelganSoni").textContent = `Kelgan: ${kelganlar().length} / ${OQUVCHILAR.length}`;
}

function oquvchiOzgardi() {
  kelganSoniYangila();
  jamoalarniTozala();
}

function hammaOquvchi(holat) {
  document.querySelectorAll("#oquvchilarRoyxat input").forEach(cb => cb.checked = holat);
  oquvchiOzgardi();
}

// ---------- FANLAR ----------
function fanlarChiz() {
  const div = $("fanlarRoyxat");
  div.innerHTML = "";
  Object.keys(SAVOLLAR).forEach(fan => {
    const label = document.createElement("label");
    label.className = "fan-chip";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = true;
    cb.value = fan;
    cb.addEventListener("change", fanOzgardi);
    const soni = document.createElement("small");
    soni.textContent = SAVOLLAR[fan].length + " ta";
    label.append(cb, document.createTextNode(`${FAN_BELGI[fan] || "📚"} ${fan}`), soni);
    div.appendChild(label);
  });
  fanOzgardi();
}

function tanlanganFanlar() {
  return [...document.querySelectorAll("#fanlarRoyxat input:checked")].map(cb => cb.value);
}

function fanOzgardi() {
  const jami = tanlanganFanlar().reduce((s, f) => s + SAVOLLAR[f].length, 0);
  $("savollarJami").textContent = `Tanlangan: ${jami} ta savol`;
  tekshir();
}

function hammaFan(holat) {
  document.querySelectorAll("#fanlarRoyxat input").forEach(cb => cb.checked = holat);
  fanOzgardi();
}

// ---------- JAMOALAR ----------
function nomlarChiz() {
  jamoaSoni = Number($("jamoaSoni").value);
  const div = $("jamoaNomlariDiv");
  const eski = [...div.querySelectorAll("input")].map(i => i.value);
  div.innerHTML = "";
  for (let i = 0; i < jamoaSoni; i++) {
    const label = document.createElement("label");
    label.textContent = `${i + 1}-jamoa nomi`;
    const input = document.createElement("input");
    input.type = "text";
    input.maxLength = 25;
    input.className = "nom-input";
    input.dataset.i = i;
    input.value = eski[i] ?? STANDART_NOMLAR[i];
    input.addEventListener("input", () => {
      if (jamoalar.length === jamoaSoni) jamoaKorinishChiz();
    });
    label.appendChild(input);
    div.appendChild(label);
  }
  jamoalarniTozala();
}

function jamoaNomi(i) {
  const input = document.querySelector(`.nom-input[data-i="${i}"]`);
  return (input && input.value.trim()) || `${i + 1}-jamoa`;
}

function jamoalarniTozala() {
  jamoalar = [];
  $("jamoalarKorinish").innerHTML = "";
  $("jamoaMaslahat").classList.add("yashirin");
  tekshir();
}

function jamoalargaBol() {
  const bor = aralashtir(kelganlar());
  if (bor.length < jamoaSoni) {
    alert(`Kamida ${jamoaSoni} ta o'quvchini belgilang!`);
    return;
  }
  jamoalar = Array.from({ length: jamoaSoni }, () => []);
  bor.forEach((ism, i) => jamoalar[i % jamoaSoni].push(ism));
  jamoaKorinishChiz();
}

function jamoaKorinishChiz() {
  const div = $("jamoalarKorinish");
  div.innerHTML = "";
  jamoalar.forEach((azolar, j) => {
    const quti = document.createElement("div");
    quti.className = "jamoa-quti j" + j;
    const h3 = document.createElement("h3");
    h3.textContent = `${jamoaNomi(j)} (${azolar.length})`;
    const ul = document.createElement("ul");
    azolar.forEach(ism => {
      const li = document.createElement("li");
      li.className = "azo";
      li.title = "Bosing — keyingi jamoaga o'tadi";
      li.textContent = "• " + ism;
      li.addEventListener("click", () => otkaz(ism, j));
      ul.appendChild(li);
    });
    quti.append(h3, ul);
    div.appendChild(quti);
  });
  $("jamoaMaslahat").classList.remove("yashirin");
  tekshir();
}

function otkaz(ism, j) {
  jamoalar[j] = jamoalar[j].filter(x => x !== ism);
  jamoalar[(j + 1) % jamoaSoni].push(ism);
  jamoaKorinishChiz();
}

function tekshir() {
  const tayyor = jamoalar.length === jamoaSoni &&
                 jamoalar.every(a => a.length > 0) &&
                 tanlanganFanlar().length > 0;
  $("boshlashTugma").disabled = !tayyor;
}

// ---------- O'YIN ----------
function oyinniBoshla() {
  jamoaNomlari = jamoalar.map((_, j) => jamoaNomi(j));
  ballar = jamoalar.map(() => 0);
  yordamQoldi = jamoalar.map(() => true);
  navbatlar = jamoalar.map(a => aralashtir(a));
  togriJavoblar = {};
  joriy = 0;
  vaqtLimit = Number($("vaqtTanlash").value);

  const hammasi = tanlanganFanlar().flatMap(fan =>
    SAVOLLAR[fan].map(([s, ...j]) => ({ fan, s, j }))
  );
  const tanlov = $("savolSoni").value;
  let soni = tanlov === "all" ? hammasi.length : Math.min(Number(tanlov), hammasi.length);
  // Har bir jamoaga teng miqdorda savol tushishi uchun
  if (soni >= jamoaSoni) soni -= soni % jamoaSoni;

  oyinSavollari = aralashtir(hammasi).slice(0, soni).map(sv => {
    const javoblar = aralashtir(sv.j);
    return { fan: sv.fan, s: sv.s, javoblar, togri: javoblar.indexOf(sv.j[0]) };
  });

  hisobChiz();
  ekranKorsat("oyin");
  savolKorsat();
}

function hisobChiz() {
  const div = $("hisob");
  div.innerHTML = "";
  jamoaNomlari.forEach((nom, j) => {
    const quti = document.createElement("div");
    quti.className = "jamoa-hisob j" + j;
    quti.id = "hisob" + j;
    const n = document.createElement("div");
    n.className = "j-nom";
    n.textContent = nom;
    const b = document.createElement("div");
    b.className = "j-ball";
    b.textContent = "0";
    quti.append(n, b);
    div.appendChild(quti);
  });
}

function keyingiOquvchi(j) {
  if (navbatlar[j].length === 0) navbatlar[j] = aralashtir(jamoalar[j]);
  return navbatlar[j].shift();
}

function hisobYangila(osganJamoa = -1) {
  jamoaNomlari.forEach((_, j) => {
    const quti = $("hisob" + j);
    quti.classList.toggle("faol", j === navbatJamoa);
    const ball = quti.querySelector(".j-ball");
    ball.textContent = ballar[j];
    if (j === osganJamoa) {
      ball.classList.remove("osdi");
      void ball.offsetWidth;
      ball.classList.add("osdi");
    }
  });
  $("savolRaqam").textContent = `Savol ${joriy + 1} / ${oyinSavollari.length}`;
}

function savolKorsat() {
  const sv = oyinSavollari[joriy];
  navbatJamoa = joriy % jamoaSoni;
  javobBerildi = false;
  javobBeruvchi = keyingiOquvchi(navbatJamoa);
  hisobYangila();

  const navbat = $("navbat");
  navbat.innerHTML = "";
  const belgi = document.createElement("span");
  belgi.className = "belgi j" + navbatJamoa;
  belgi.textContent = jamoaNomlari[navbatJamoa];
  const ism = document.createElement("b");
  ism.textContent = javobBeruvchi;
  navbat.append(belgi, document.createTextNode(" javob beradi: "), ism);

  $("fan").textContent = `${FAN_BELGI[sv.fan] || "📚"} ${sv.fan}`;
  $("savolMatn").textContent = sv.s;

  const div = $("javoblar");
  div.innerHTML = "";
  sv.javoblar.forEach((matn, i) => {
    const btn = document.createElement("button");
    btn.className = "javob";
    const harf = document.createElement("span");
    harf.className = "harf";
    harf.textContent = HARFLAR[i];
    btn.append(harf, document.createTextNode(matn));
    btn.addEventListener("click", () => javobTanla(i));
    div.appendChild(btn);
  });

  $("natijaXabar").textContent = "";
  $("natijaXabar").className = "natija-xabar";
  $("yordamTugma").disabled = !yordamQoldi[navbatJamoa];
  $("yordamTugma").classList.remove("yashirin");
  $("keyingiTugma").classList.add("yashirin");

  taymerBoshla();
}

function taymerBoshla() {
  clearInterval(taymer);
  qolganVaqt = vaqtLimit;
  vaqtYangila();
  taymer = setInterval(() => {
    qolganVaqt--;
    vaqtYangila();
    if (qolganVaqt <= 0) {
      clearInterval(taymer);
      javobTanla(-1);
    }
  }, 1000);
}

function vaqtYangila() {
  const xavf = qolganVaqt <= 5;
  $("vaqtSon").textContent = qolganVaqt;
  $("vaqtSon").classList.toggle("xavf", xavf);
  $("vaqtChiziq").style.width = (qolganVaqt / vaqtLimit * 100) + "%";
  $("vaqtChiziq").classList.toggle("xavf", xavf);
}

function javobTanla(i) {
  if (javobBerildi) return;
  javobBerildi = true;
  clearInterval(taymer);

  const sv = oyinSavollari[joriy];
  const tugmalar = document.querySelectorAll(".javob");
  tugmalar.forEach(b => b.disabled = true);
  tugmalar[sv.togri].classList.add("togri");

  const xabar = $("natijaXabar");
  if (i === sv.togri) {
    ballar[navbatJamoa] += BALL;
    togriJavoblar[javobBeruvchi] = (togriJavoblar[javobBeruvchi] || 0) + 1;
    xabar.textContent = `✅ To'g'ri! Barakalla, ${javobBeruvchi}! +${BALL} ball`;
    xabar.classList.add("togri");
    konfetti(70);
  } else {
    if (i >= 0) tugmalar[i].classList.add("notogri");
    xabar.textContent = i === -1
      ? `⏰ Vaqt tugadi! To'g'ri javob: ${sv.javoblar[sv.togri]}`
      : `❌ Afsus, noto'g'ri. To'g'ri javob: ${sv.javoblar[sv.togri]}`;
    xabar.classList.add("notogri");
  }

  hisobYangila(i === sv.togri ? navbatJamoa : -1);
  $("yordamTugma").classList.add("yashirin");
  const keyingi = $("keyingiTugma");
  keyingi.textContent = joriy === oyinSavollari.length - 1 ? "Natijalarni ko'rish 🏆" : "Keyingi savol ➜";
  keyingi.classList.remove("yashirin");
}

function yordam() {
  if (javobBerildi || !yordamQoldi[navbatJamoa]) return;
  yordamQoldi[navbatJamoa] = false;
  $("yordamTugma").disabled = true;

  const sv = oyinSavollari[joriy];
  const notogrilar = aralashtir([0, 1, 2, 3].filter(i => i !== sv.togri)).slice(0, 2);
  const tugmalar = document.querySelectorAll(".javob");
  notogrilar.forEach(i => {
    tugmalar[i].disabled = true;
    tugmalar[i].classList.add("ochirilgan");
  });
}

function keyingiSavol() {
  joriy++;
  if (joriy >= oyinSavollari.length) yakunla();
  else savolKorsat();
}

// ---------- YAKUN ----------
function yakunla() {
  clearInterval(taymer);
  ekranKorsat("yakun");

  const tartib = jamoaNomlari.map((_, j) => j).sort((a, b) => ballar[b] - ballar[a]);
  const eng = ballar[tartib[0]];
  const golib = tartib.filter(j => ballar[j] === eng);

  if (golib.length === jamoaSoni) {
    $("golib").textContent = "Durrang! 🤝 Hamma jamoa zo'r!";
  } else if (golib.length > 1) {
    $("golib").textContent = `${golib.map(j => jamoaNomlari[j]).join(" va ")} teng g'olib! 🎉`;
  } else {
    $("golib").textContent = `${jamoaNomlari[golib[0]]} g'olib! 🎉`;
  }

  const div = $("yakunHisob");
  div.innerHTML = "";
  tartib.forEach((j, o) => {
    const quti = document.createElement("div");
    quti.className = "jamoa-hisob j" + j;
    const nom = document.createElement("div");
    nom.className = "j-nom";
    nom.textContent = `${MEDALLAR[o]} ${jamoaNomlari[j]}`;
    const ball = document.createElement("div");
    ball.className = "j-ball";
    ball.textContent = ballar[j];
    quti.append(nom, ball);
    div.appendChild(quti);
  });

  const yulduz = $("yulduzlar");
  yulduz.textContent = "";
  const engKop = Math.max(0, ...Object.values(togriJavoblar));
  if (engKop > 0) {
    const ismlar = Object.keys(togriJavoblar).filter(k => togriJavoblar[k] === engKop);
    yulduz.textContent = `⭐ O'yin yulduzi: ${ismlar.join(", ")} (${engKop} ta to'g'ri javob)`;
  }

  konfetti(250);
}

// ---------- KONFETTI ----------
function konfetti(soni) {
  const canvas = $("konfetti");
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  const ranglar = ["#ff6b6b", "#ffd43b", "#51cf66", "#339af0", "#cc5de8", "#ff922b"];

  const bolaklar = Array.from({ length: soni }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height * 0.6,
    w: 6 + Math.random() * 6,
    h: 10 + Math.random() * 8,
    rang: ranglar[Math.floor(Math.random() * ranglar.length)],
    tezlik: 3 + Math.random() * 4,
    burchak: Math.random() * 360,
    aylanish: -6 + Math.random() * 12,
  }));

  let kadr = 0;
  (function chiz() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bolaklar.forEach(b => {
      b.y += b.tezlik;
      b.x += Math.sin((kadr + b.y) / 25);
      b.burchak += b.aylanish;
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(b.burchak * Math.PI / 180);
      ctx.fillStyle = b.rang;
      ctx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h);
      ctx.restore();
    });
    if (++kadr < 220) requestAnimationFrame(chiz);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  })();
}

// ---------- TUGMALAR VA KLAVIATURA ----------
$("hammasiTugma").addEventListener("click", () => hammaOquvchi(true));
$("hechkimTugma").addEventListener("click", () => hammaOquvchi(false));
$("fanHammasi").addEventListener("click", () => hammaFan(true));
$("fanHechbiri").addEventListener("click", () => hammaFan(false));
$("jamoaSoni").addEventListener("change", nomlarChiz);
$("bolishTugma").addEventListener("click", jamoalargaBol);
$("boshlashTugma").addEventListener("click", oyinniBoshla);
$("yordamTugma").addEventListener("click", yordam);
$("keyingiTugma").addEventListener("click", keyingiSavol);
$("qaytaTugma").addEventListener("click", () => ekranKorsat("sozlash"));

document.addEventListener("keydown", e => {
  if (!$("oyin").classList.contains("faol")) return;
  if (["1", "2", "3", "4"].includes(e.key)) {
    const btn = document.querySelectorAll(".javob")[Number(e.key) - 1];
    if (btn && !btn.disabled) javobTanla(Number(e.key) - 1);
  }
  if (e.key === "Enter" && javobBerildi) keyingiSavol();
});

royxatChiz();
fanlarChiz();
nomlarChiz();