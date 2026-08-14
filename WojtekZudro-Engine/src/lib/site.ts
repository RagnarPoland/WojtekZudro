export const SITE_NAME = "Wojciech Zudro";
export const SITE_TAGLINE = "Büroservice";

export const SITE_NAV = [
  { href: "/uslugi", label: "Usługi", highlight: true },
  { href: "/o-mnie", label: "O mnie" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const SITE_CONTACT = {
  email: "kontakt@wojciechzudro.pl",
} as const;

export const SITE_SERVICES = [
  {
    menuLabel: "Sekretariat",
    menuDescription: "Korespondencja, telefony i kalendarz — biuro, które odpowiada za Ciebie.",
    title: "Sekretariat i korespondencja",
    description:
      "Prowadzenie korespondencji, obsługa telefonów i kalendarza, żeby dzień pracy toczył się spokojnie i bez zaległości.",
    tag: "Sekretariat",
    slug: "sekretariat",
    excerpt: "Kto odbiera telefony, pilnuje terminów i prowadzi korespondencję, gdy Ty zajmujesz się firmą.",
  },
  {
    menuLabel: "Dokumentacja",
    menuDescription: "Obieg dokumentów, archiwum i porządek w papierach oraz plikach.",
    title: "Dokumentacja i archiwum",
    description:
      "Porządek w dokumentach: obieg, archiwizacja i przygotowanie teczek, które da się znaleźć od ręki.",
    tag: "Dokumenty",
    slug: "dokumentacja",
    excerpt: "Papiery i pliki w jednym, spokojnym obiegu — bez szukania i bez chaosu na biurku.",
  },
  {
    menuLabel: "Administracja",
    menuDescription: "Sprawy urzędowe, organizacja i bieżąca obsługa administracyjna.",
    title: "Administracja biurowa",
    description:
      "Bieżąca administracja i sprawy urzędowe, które odciągają od właściwej pracy — ogarnięte dyskretnie i terminowo.",
    tag: "Administracja",
    slug: "administracja",
    excerpt: "Urzędy, formalności i bieżąca administracja bez odkładania na później.",
  },
  {
    menuLabel: "Organizacja",
    menuDescription: "Porządek w procesach biura: terminy, zadania i rytm tygodnia.",
    title: "Organizacja pracy biura",
    description:
      "Układ dnia, tygodnia i zadań biurowych tak, żeby nic nie ginęło między mailami a kartkami.",
    tag: "Organizacja",
    slug: "organizacja",
    excerpt: "Rytm biura, terminy i zadania ułożone tak, żeby praca szła do przodu.",
  },
] as const;

export const SITE_OFFER_MENU_ORDER = [
  "sekretariat",
  "dokumentacja",
  "administracja",
  "organizacja",
] as const;

export function getOfferMenuItems() {
  const bySlug = new Map(SITE_SERVICES.map((service) => [service.slug, service]));
  return SITE_OFFER_MENU_ORDER.map((slug) => bySlug.get(slug)).filter(
    (service): service is (typeof SITE_SERVICES)[number] => Boolean(service),
  );
}

export function getServiceBySlug(slug: string) {
  return SITE_SERVICES.find((service) => service.slug === slug);
}

export const HOME_FEATURED = {
  eyebrow: "Wyróżnione",
  title: "Biuro, które działa spokojnie — bez chaosu i zaległości",
  text: "Wojciech Zudro prowadzi Büroservice: sekretariat, dokumentację i organizację pracy biura. Dyskrecja, porządek i terminy, które są dotrzymane.",
} as const;

export const HOME_LATEST = [
  {
    slug: "sekretariat",
    tag: "Sekretariat",
    title: "Sekretariat, który odciąża dzień",
    text: "Telefony, korespondencja i kalendarz prowadzone tak, żebyś nie musiał pilnować każdej wiadomości sam.",
  },
  {
    slug: "dokumentacja",
    tag: "Dokumenty",
    title: "Dokumenty w jednym, spokojnym obiegu",
    text: "Archiwum, teczki i pliki ułożone tak, żeby dało się je znaleźć — dziś i za pół roku.",
  },
  {
    slug: "organizacja",
    tag: "Organizacja",
    title: "Organizacja biura bez zgadywania",
    text: "Terminy, zadania i rytm tygodnia poukładane, zanim zaczną się piętrzyć.",
  },
] as const;

export const HOME_STATS = [
  { value: "Dyskrecja", label: "Sprawy biura zostają w biurze" },
  { value: "Porządek", label: "Dokumenty i terminy w jednym miejscu" },
  { value: "Terminowość", label: "Obietnice, których da się dotrzymać" },
] as const;

export const HOME_POPULAR = [
  {
    slug: "sekretariat",
    tag: "Sekretariat",
    title: "Korespondencja, która nie czeka na biurku",
  },
  {
    slug: "dokumentacja",
    tag: "Dokumenty",
    title: "Archiwum, z którego da się korzystać",
  },
  {
    slug: "administracja",
    tag: "Administracja",
    title: "Sprawy urzędowe bez odkładania",
  },
  {
    slug: "organizacja",
    tag: "Organizacja",
    title: "Kalendarz, który naprawdę trzyma rytm",
  },
  {
    slug: "sekretariat",
    tag: "Obsługa",
    title: "Jeden spokojny punkt kontaktu dla biura",
  },
  {
    slug: "dokumentacja",
    tag: "Porządek",
    title: "Papiery i pliki bez wiecznego szukania",
  },
] as const;

export const HOME_CATEGORIES = [
  {
    title: "Sekretariat",
    items: [
      {
        slug: "sekretariat",
        tag: "Sekretariat",
        title: "Sekretariat, który odciąża dzień",
        text: "Telefony, korespondencja i kalendarz prowadzone spokojnie, w ustalonym rytmie.",
      },
      {
        slug: "sekretariat",
        tag: "Korespondencja",
        title: "Poczta i telefony pod kontrolą",
        text: "Odbieranie, porządkowanie i odpowiadanie — według ustalonego rytmu.",
      },
      {
        slug: "organizacja",
        tag: "Kalendarz",
        title: "Terminy, które nie giną w skrzynce",
        text: "Spotkania i terminy zebrane w jednym, czytelnym układzie.",
      },
    ],
  },
  {
    title: "Dokumentacja",
    items: [
      {
        slug: "dokumentacja",
        tag: "Archiwum",
        title: "Teczki gotowe, gdy są potrzebne",
        text: "Porządek w dokumentach firmowych — od bieżących pism po archiwum.",
      },
      {
        slug: "administracja",
        tag: "Formalności",
        title: "Papierologia, która nie zjada tygodnia",
        text: "Przygotowanie i obieg dokumentów zamiast wiecznego „zajmę się tym jutro”.",
      },
      {
        slug: "dokumentacja",
        tag: "Obieg",
        title: "Jeden system zamiast stosów kartek",
        text: "Ustalony sposób przechowywania, żeby nic nie ginęło między biurkiem a szufladą.",
      },
    ],
  },
  {
    title: "Organizacja biura",
    items: [
      {
        slug: "organizacja",
        tag: "Rytm",
        title: "Tydzień ułożony zanim się zacznie",
        text: "Zadania i priorytety, które widać — nie tylko w głowie.",
      },
      {
        slug: "administracja",
        tag: "Wsparcie",
        title: "Bieżąca administracja w tle",
        text: "To, co musi być zrobione, dzieje się równolegle z Twoją właściwą pracą.",
      },
      {
        slug: "sekretariat",
        tag: "Spokój",
        title: "Biuro, które nie hałasuje problemami",
        text: "Porządek w sprawach, zanim zdążą stać się nagłymi.",
      },
    ],
  },
] as const;

export function withBase(path = "/") {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  if (!path || path === "/") return `${base}/` || "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function withoutBase(pathname: string) {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  if (!base) return pathname;
  if (pathname === base || pathname === `${base}/`) return "/";
  return pathname.startsWith(`${base}/`) ? pathname.slice(base.length) : pathname;
}
