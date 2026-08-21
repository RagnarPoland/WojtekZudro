export const SITE_NAME = "Wojciech Zudro";
export const SITE_TAGLINE = "Büroservice";

export const SITE_NAV = [
  { href: "/uslugi", label: "Usługi", highlight: true },
  { href: "/o-mnie", label: "O mnie" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const SITE_CONTACT = {
  email: "kontakt@wojciechzudro.pl",
  phone: "+4915510084276",
  whatsappUrl: "https://wa.me/4915510084276",
  messengerUrl: "https://m.me/wojciechzudro",
} as const;

export const SITE_CTA = {
  footerLead: "Potrzebujesz pomocy w swojej sprawie?",
  footerText:
    "Opowiedz o mieszkaniu, pracy, świadczeniach, kredycie, tłumaczeniu albo urzędzie — odpowiem i ustalimy zakres.",
  homeTitle: "Masz sprawę mieszkaniową, urzędową albo zawodową?",
  homeText:
    "Opowiedz krótko, czego dotyczy — dopasuję Büroservice do Twojej sytuacji, bez lania wody.",
  contactTitle: "Porozmawiajmy o Twojej sprawie",
  buttonPrimary: "Porozmawiajmy",
  buttonMenu: "Umów rozmowę",
  buttonSecondary: "Napisz wiadomość",
} as const;

export const SITE_SERVICES = [
  {
    menuLabel: "Mieszkania i domy",
    menuDescription: "Szukanie lokalu, kontakt z właścicielem, najem, meldunek i media.",
    title: "Mieszkania i domy",
    description:
      "Od szukania mieszkania albo domu, przez oględziny i umowę, aż po meldunek, prąd i kontakt z wynajmującym.",
    tag: "Mieszkanie",
    slug: "mieszkania-i-domy",
    excerpt: "Sprawy mieszkaniowe poukładane: od umowy po korespondencję z właścicielem.",
  },
  {
    menuLabel: "Praca i sprawy zawodowe",
    menuDescription: "Praca, Gewerbe, zatrudnienie i dokumenty zawodowe.",
    title: "Praca i sprawy zawodowe",
    description:
      "Od szukania pracy i założenia Gewerbe, przez sprawy zatrudnienia, aż po dokumenty i formalności zawodowe.",
    tag: "Praca",
    slug: "praca-i-sprawy-zawodowe",
    excerpt: "Praca, Gewerbe i papiery zawodowe ogarnięte spokojnie i na czas.",
  },
  {
    menuLabel: "Świadczenia socjalne",
    menuDescription: "Arbeitslosengeld, Bürgergeld, Wohngeld, Kindergeld i inne wnioski.",
    title: "Świadczenia socjalne",
    description:
      "Od Arbeitslosengeld i Bürgergeld, przez Wohngeld i Kindergeld, aż po wypełnianie wniosków i kompletowanie dokumentów.",
    tag: "Świadczenia",
    slug: "swiadczenia-socjalne",
    excerpt: "Wnioski o świadczenia i załączniki prowadzone krok po kroku.",
  },
  {
    menuLabel: "Kredyty i ubezpieczenia",
    menuDescription: "Kredyt, ubezpieczenie i dokumenty do banku albo ubezpieczyciela.",
    title: "Kredyty i ubezpieczenia",
    description:
      "Od wniosku kredytowego i spraw ubezpieczeniowych, aż po formalności i dokumenty do banku albo towarzystwa.",
    tag: "Finanse",
    slug: "kredyty-i-ubezpieczenia",
    excerpt: "Kredyt i polisa bez stosu nieczytelnych pism.",
  },
  {
    menuLabel: "Tłumaczenia",
    menuDescription: "Ustne, pisemne i telefoniczne — u notariusza, lekarza, urzędu i banku.",
    title: "Tłumaczenia",
    description:
      "Tłumaczenia polsko-niemieckie: ustne, pisemne i telefoniczne — u notariusza, prawnika, lekarza, urzędu, banku i spółdzielni.",
    tag: "Tłumaczenia",
    slug: "tlumaczenia",
    excerpt: "Dokumenty w jasnym języku, gotowe do złożenia.",
  },
  {
    menuLabel: "Urzędy i formalności",
    menuDescription: "Kontakt z urzędem, wnioski, meldunek i rozmowy z instytucjami.",
    title: "Urzędy i formalności",
    description:
      "Od kontaktu z urzędem i wypełniania wniosków, przez meldunek i dokumenty, aż po rozmowy z niemieckimi instytucjami.",
    tag: "Urzędy",
    slug: "urzedy-i-formalnosci",
    excerpt: "Urząd, wniosek i termin — ogarnięte zanim zrobią się problemem.",
  },
] as const;

export const SITE_OFFER_MENU_ORDER = [
  "mieszkania-i-domy",
  "praca-i-sprawy-zawodowe",
  "swiadczenia-socjalne",
  "kredyty-i-ubezpieczenia",
  "tlumaczenia",
  "urzedy-i-formalnosci",
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

export const SERVICE_DETAILS = {
  "mieszkania-i-domy": [
    {
      slug: "szukanie-mieszkan-na-wynajem-lub-kupno",
      title: "Szukanie mieszkań na wynajem lub kupno",
      text: "Przeglądam oferty i wybieram mieszkania do wynajęcia albo zakupu według Twoich kryteriów.",
    },
    {
      slug: "szukanie-domow-na-wynajem-lub-kupno",
      title: "Szukanie domów na wynajem lub kupno",
      text: "To samo dla domów — najem albo zakup, bez przekopywania ogłoszeń samemu.",
    },
    {
      slug: "szukanie-mieszkan-pracowniczych-dla-firm",
      title: "Szukanie mieszkań pracowniczych dla firm",
      text: "Pomagam firmie znaleźć lokale dla pracowników: lokalizacja, budżet i szybki kontakt z ogłoszeniodawcą.",
    },
    {
      slug: "kontakt-z-wlascicielami-mieszkan",
      title: "Kontakt z właścicielami mieszkań",
      text: "Dzwonię i piszę do właściciela w Twoim imieniu — pytania, terminy oględzin, pierwsze ustalenia.",
    },
    {
      slug: "kontakt-z-zarzadcami-nieruchomosci",
      title: "Kontakt z zarządcami nieruchomości",
      text: "Ustalam sprawy lokalu z zarządcą: formalności, terminy i korespondencja.",
    },
    {
      slug: "kontakt-ze-spoldzielniami-mieszkaniowymi",
      title: "Kontakt ze spółdzielniami mieszkaniowymi",
      text: "Prowadzę kontakt ze spółdzielnią, gdy potrzebne są pisma, zgody albo wyjaśnienia.",
    },
    {
      slug: "pomoc-w-przygotowaniu-dokumentow-do-wynajmu",
      title: "Pomoc w przygotowaniu dokumentów do wynajmu",
      text: "Zbieram i porządkuję dokumenty, których wymaga wynajem, żeby nic nie brakowało przy umowie.",
    },
    {
      slug: "pomoc-w-znalezieniu-mieszkania-na-podstawie-polskich-dochodow",
      title: "Pomoc w znalezieniu mieszkania na podstawie polskich dochodów",
      text: "Szukam lokalu i prowadzę rozmowy, gdy dochód jest z Polski i trzeba to jasno przedstawić.",
    },
    {
      slug: "pomoc-przy-ogladaniu-mieszkania",
      title: "Pomoc przy oglądaniu mieszkania",
      text: "Jestem przy oględzinach, tłumaczę i pomagam dopytać o to, co ważne przed decyzją.",
    },
    {
      slug: "tlumaczenie-umowy-najmu",
      title: "Tłumaczenie umowy najmu",
      text: "Tłumaczę umowę najmu na bieżąco, żebyś wiedział, co podpisujesz.",
    },
    {
      slug: "tlumaczenie-przy-przekazaniu-mieszkania",
      title: "Tłumaczenie przy przekazaniu mieszkania",
      text: "Tłumaczę spotkanie przy przekazaniu kluczy — ustalenia, usterki i odbiór lokalu.",
    },
    {
      slug: "tlumaczenie-protokolu-przekazania",
      title: "Tłumaczenie protokołu przekazania",
      text: "Tłumaczę protokół zdawczo-odbiorczy, żeby stan mieszkania był zapisany jasno.",
    },
    {
      slug: "pomoc-przy-meldunku",
      title: "Pomoc przy meldunku",
      text: "Pomagam ogarnąć meldunek: co złożyć, gdzie i w jakiej kolejności.",
    },
    {
      slug: "pomoc-przy-zgloszeniu-pradu-i-internetu",
      title: "Pomoc przy zgłoszeniu prądu i internetu",
      text: "Pomagam zgłosić prąd i internet po wprowadzeniu, żeby media ruszyły bez zgadywania.",
    },
    {
      slug: "kontakt-z-wynajmujacym-podczas-trwania-najmu",
      title: "Kontakt z wynajmującym podczas trwania najmu",
      text: "Gdy umowa już trwa, prowadzę kontakt z wynajmującym: usterki, terminy, pisma.",
    },
  ],
  "praca-i-sprawy-zawodowe": [
    {
      slug: "pomoc-w-znalezieniu-pracy",
      title: "Pomoc w znalezieniu pracy",
      text: "Przeglądam oferty, porządkuję CV i pomagam dotrzeć do pracodawcy — krok po kroku, bez gubienia terminów.",
    },
    {
      slug: "pomoc-przy-zalozeniu-gewerbe",
      title: "Pomoc przy założeniu Gewerbe",
      text: "Pomagam założyć Gewerbe: jakie formularze, gdzie złożyć i co przygotować przed startem działalności.",
    },
    {
      slug: "pomoc-w-sprawach-zwiazanych-z-zatrudnieniem",
      title: "Pomoc w sprawach związanych z zatrudnieniem",
      text: "Kontakt z pracodawcą, umowa, wypowiedzenie albo zaświadczenia — prowadzę sprawę, żeby dokumenty były kompletne.",
    },
    {
      slug: "pomoc-przy-dokumentach-i-formalnosciach-zawodowych",
      title: "Pomoc przy dokumentach i formalnościach zawodowych",
      text: "Zbieram i porządkuję papiery zawodowe: zaświadczenia, formularze urzędowe i korespondencję z pracodawcą.",
    },
  ],
  "swiadczenia-socjalne": [
    {
      slug: "arbeitslosengeld",
      title: "Arbeitslosengeld",
      text: "Pomagam ogarnąć wniosek o zasiłek dla bezrobotnych: formularze, terminy i brakujące dokumenty.",
    },
    {
      slug: "burgergeld",
      title: "Bürgergeld",
      text: "Przygotowuję wniosek o Bürgergeld — dochody, załączniki i korespondencja z urzędem bez chaosu.",
    },
    {
      slug: "wohngeld",
      title: "Wohngeld",
      text: "Pomagam złożyć wniosek o dopłatę do czynszu: dane o lokalu, dochodach i wymagane zaświadczenia.",
    },
    {
      slug: "kindergeld",
      title: "Kindergeld",
      text: "Wniosek o Kindergeld i ewentualne uzupełnienia — żeby świadczenie ruszyło bez zbędnych opóźnień.",
    },
    {
      slug: "kinderzuschlag",
      title: "Kinderzuschlag",
      text: "Pomagam przy Kinderzuschlag: sprawdzam warunki, kompletuję dokumenty i pilnuję terminów.",
    },
    {
      slug: "elterngeld",
      title: "Elterngeld",
      text: "Przygotowuję wniosek o Elterngeld — terminy, załączniki od pracodawcy i jasne ustalenia co złożyć.",
    },
    {
      slug: "pomoc-przy-wypelnianiu-wnioskow",
      title: "Pomoc przy wypełnianiu wniosków",
      text: "Wypełniam wnioski o świadczenia razem z Tobą — pole po polu, bez zgadywania i pomyłek.",
    },
    {
      slug: "pomoc-w-przygotowaniu-wymaganych-dokumentow",
      title: "Pomoc w przygotowaniu wymaganych dokumentów",
      text: "Zbieram i porządkuję załączniki do wniosku, żeby urząd nie odesłał go z powodu braków.",
    },
  ],
  "kredyty-i-ubezpieczenia": [
    {
      slug: "pomoc-przy-uzyskaniu-kredytu",
      title: "Pomoc przy uzyskaniu kredytu",
      text: "Pomagam przy wniosku kredytowym: dokumenty, korespondencja z bankiem i terminy bez zbędnego stresu.",
    },
    {
      slug: "pomoc-w-sprawach-ubezpieczeniowych",
      title: "Pomoc w sprawach ubezpieczeniowych",
      text: "Polisa, zmiana umowy albo roszczenie — prowadzę korespondencję z ubezpieczycielem i pilnuję formalności.",
    },
    {
      slug: "pomoc-przy-formalnosciach-i-dokumentach",
      title: "Pomoc przy formalnościach i dokumentach",
      text: "Zbieram i porządkuję papiery do banku albo ubezpieczyciela, żeby sprawa poszła dalej bez braków.",
    },
  ],
  "tlumaczenia": [
    {
      slug: "tlumaczenia-ustne-polski-niemiecki",
      title: "Tłumaczenia ustne polski niemiecki",
      text: "Tłumaczę na żywo z polskiego na niemiecki i z powrotem — jasno, bez gubienia sensu rozmowy.",
    },
    {
      slug: "tlumaczenia-pisemne",
      title: "Tłumaczenia pisemne",
      text: "Tłumaczę pisma, umowy i dokumenty — gotowe do złożenia albo podpisania.",
    },
    {
      slug: "tlumaczenia-telefoniczne",
      title: "Tłumaczenia telefoniczne",
      text: "Jestem przy rozmowie telefonicznej i tłumaczę w obie strony, gdy trzeba coś ustalić od razu.",
    },
    {
      slug: "tlumaczenia-podczas-wizyt-u-notariusza",
      title: "Tłumaczenia podczas wizyt u notariusza",
      text: "Tłumaczę spotkanie u notariusza, żebyś wiedział, co podpisujesz i o czym mówicie.",
    },
    {
      slug: "tlumaczenia-podczas-wizyt-u-prawnikow",
      title: "Tłumaczenia podczas wizyt u prawników",
      text: "Przy wizycie u prawnika tłumaczę pytania, odpowiedzi i ustalenia — bez zgadywania.",
    },
    {
      slug: "tlumaczenia-podczas-wizyt-u-lekarzy",
      title: "Tłumaczenia podczas wizyt u lekarzy",
      text: "Tłumaczę rozmowę z lekarzem: objawy, diagnozę i zalecenia w zrozumiałym języku.",
    },
    {
      slug: "tlumaczenia-w-szpitalach",
      title: "Tłumaczenia w szpitalach",
      text: "Pomagam w szpitalu — rozmowy z personelem, procedury i informacje dla pacjenta.",
    },
    {
      slug: "tlumaczenia-w-urzedach",
      title: "Tłumaczenia w urzędach",
      text: "Tłumaczę wizytę urzędową, żeby sprawa poszła dalej bez nieporozumień.",
    },
    {
      slug: "tlumaczenia-w-bankach",
      title: "Tłumaczenia w bankach",
      text: "Przy spotkaniu w banku tłumaczę warunki, pytania i ustalenia dotyczące konta albo kredytu.",
    },
    {
      slug: "tlumaczenia-w-spoldzielniach-mieszkaniowych",
      title: "Tłumaczenia w spółdzielniach mieszkaniowych",
      text: "Tłumaczę rozmowę ze spółdzielnią: formalności, usterki i korespondencję związaną z lokalem.",
    },
  ],
  "urzedy-i-formalnosci": [
    {
      slug: "pomoc-w-kontaktach-z-urzedami",
      title: "Pomoc w kontaktach z urzędami",
      text: "Piszę, dzwonię i umawiam wizyty w urzędzie w Twoim imieniu — terminy, pisma i odpowiedzi bez chaosu.",
    },
    {
      slug: "wypelnianie-formularzy-i-wnioskow",
      title: "Wypełnianie formularzy i wniosków",
      text: "Wypełniam formularze i wnioski urzędowe razem z Tobą — pole po polu, bez pomyłek i braków.",
    },
    {
      slug: "przygotowanie-dokumentow",
      title: "Przygotowanie dokumentów",
      text: "Zbieram i porządkuję dokumenty do urzędu, żeby sprawa poszła dalej za pierwszym razem.",
    },
    {
      slug: "pomoc-przy-meldunku",
      title: "Pomoc przy meldunku",
      text: "Pomagam ogarnąć meldunek: co złożyć, gdzie i w jakiej kolejności — bez zbędnych wizyt.",
    },
    {
      slug: "pomoc-w-sprawach-administracyjnych",
      title: "Pomoc w sprawach administracyjnych",
      text: "Prowadzę sprawy administracyjne krok po kroku: terminy, pisma i korespondencja z instytucjami.",
    },
    {
      slug: "kontakt-telefoniczny-z-niemieckimi-instytucjami",
      title: "Kontakt telefoniczny z niemieckimi instytucjami",
      text: "Dzwonię do niemieckich urzędów i instytucji, tłumaczę rozmowę i ustalam, co dalej zrobić.",
    },
  ],
} as const;

export function getServiceDetails(slug: string) {
  return slug in SERVICE_DETAILS
    ? SERVICE_DETAILS[slug as keyof typeof SERVICE_DETAILS]
    : [];
}

export const HOME_FEATURED = {
  eyebrow: "Wyróżnione",
  title: "Sprawy, które działają spokojnie — bez chaosu i zaległości",
  text: "Wojciech Zudro prowadzi Büroservice: mieszkanie, praca, świadczenia, kredyty, tłumaczenia i urzędy. Dyskrecja, porządek i terminy, które są dotrzymane.",
} as const;

export const HOME_LATEST = [
  {
    slug: "mieszkania-i-domy",
    tag: "Mieszkanie",
    title: "Mieszkania i domy bez zgadywania",
    text: "Najem, zakup i korespondencja z właścicielem — poukładane, zanim zrobią się problemem.",
  },
  {
    slug: "praca-i-sprawy-zawodowe",
    tag: "Praca",
    title: "Praca i sprawy zawodowe na czas",
    text: "Umowy, zaświadczenia i kontakt z pracodawcą bez gubienia dokumentów.",
  },
  {
    slug: "urzedy-i-formalnosci",
    tag: "Urzędy",
    title: "Urzędy i formalności pod kontrolą",
    text: "Pisma i terminy ogarnięte, zamiast odkładania na później.",
  },
] as const;

export const HOME_STATS = [
  { value: "Dyskrecja", label: "Twoje sprawy zostają między nami" },
  { value: "Porządek", label: "Dokumenty, terminy i pisma w jednym miejscu" },
  { value: "Terminowość", label: "Urząd, wynajmujący i pracodawca — na czas" },
] as const;

export const HOME_POPULAR = [
  {
    slug: "mieszkania-i-domy",
    tag: "Mieszkanie",
    title: "Umowa najmu, która jest czytelna",
  },
  {
    slug: "praca-i-sprawy-zawodowe",
    tag: "Praca",
    title: "Dokumenty od pracodawcy bez zaległości",
  },
  {
    slug: "swiadczenia-socjalne",
    tag: "Świadczenia",
    title: "Wniosek, który nie wraca z powodu braków",
  },
  {
    slug: "kredyty-i-ubezpieczenia",
    tag: "Finanse",
    title: "Kredyt i polisa w jednym porządku",
  },
  {
    slug: "tlumaczenia",
    tag: "Tłumaczenia",
    title: "Dokument gotowy do złożenia",
  },
  {
    slug: "urzedy-i-formalnosci",
    tag: "Urzędy",
    title: "Pismo urzędowe, które nie czeka w szufladzie",
  },
] as const;

export const HOME_CATEGORIES = [
  {
    title: "Życie i dom",
    items: [
      {
        slug: "mieszkania-i-domy",
        tag: "Mieszkanie",
        title: "Mieszkania i domy",
        text: "Najem, zakup i korespondencja związana z lokum.",
      },
      {
        slug: "swiadczenia-socjalne",
        tag: "Świadczenia",
        title: "Świadczenia socjalne",
        text: "Wnioski i załączniki poukładane przed terminem.",
      },
      {
        slug: "urzedy-i-formalnosci",
        tag: "Urzędy",
        title: "Urzędy i formalności",
        text: "Pisma i terminy prowadzone spokojnie, bez chaosu.",
      },
    ],
  },
  {
    title: "Praca i sprawy",
    items: [
      {
        slug: "praca-i-sprawy-zawodowe",
        tag: "Praca",
        title: "Praca i sprawy zawodowe",
        text: "Umowy i zaświadczenia, które muszą być kompletne.",
      },
      {
        slug: "kredyty-i-ubezpieczenia",
        tag: "Finanse",
        title: "Kredyty i ubezpieczenia",
        text: "Korespondencja z bankiem i ubezpieczycielem w jednym miejscu.",
      },
      {
        slug: "tlumaczenia",
        tag: "Tłumaczenia",
        title: "Tłumaczenia",
        text: "Dokument zrozumiały i gotowy do urzędu albo umowy.",
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
