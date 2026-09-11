export const SITE_NAME = "Wojciech Zudro";
export const SITE_TAGLINE = "Büroservice";

export const SITE_NAV = [
  { href: "/uslugi", label: "Usługi", highlight: true },
  { href: "/o-mnie", label: "O mnie" },
  { href: "/cennik", label: "Cennik" },
] as const;

export const SITE_CONTACT = {
  email: "wzudro@gmail.com",
  phone: "+4915510084276",
  phoneDisplay: "+49 155 10084276",
  whatsappUrl: "https://wa.me/4915510084276",
  messengerUrl: "https://m.me/wojciechzudro",
  googleBusinessUrl:
    "https://www.google.com/searchviewer/10?svid=CAwSHRIbCgNwdnESFENnMHZaeTh4TVhScVgyaHFOM0p3GAo",
  facebookUrl: "https://www.facebook.com/p/B%C3%BCroservice-Zudro-61592739958994/",
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

export const SITE_PRICING = {
  lead:
    "Poniżej przykładowy cennik orientacyjny. Dokładną wycenę ustalimy po krótkiej rozmowie — zakres każdej sprawy bywa inny.",
  note:
    "Ceny przykładowe, netto. Pierwsza rozmowa wstępna jest bezpłatna i niezobowiązująca. Przy większych sprawach możliwy pakiet lub stała współpraca.",
  categories: [
    {
      title: "Konsultacja",
      items: [
        {
          name: "Pierwsza rozmowa wstępna",
          price: "Bezpłatnie",
          detail: "Telefon, WhatsApp, Messenger lub spotkanie online — ustalamy zakres sprawy.",
        },
        {
          name: "Konsultacja rozszerzona",
          price: "od 49 €",
          detail: "Szczegółowa analiza dokumentów i plan działania (do ok. 1 godz.).",
        },
      ],
    },
    {
      title: "Mieszkania i domy",
      items: [
        {
          name: "Pomoc przy szukaniu mieszkania lub domu",
          price: "od 299 €",
          detail: "Przykładowa stawka startowa — wycena zależy od lokalizacji, terminu i zakresu.",
        },
        {
          name: "Obecność przy oględzinach i negocjacjach",
          price: "od 79 €",
          detail: "Tłumaczenie na miejscu, pytania do wynajmującego, ustalenia wstępne.",
        },
        {
          name: "Meldunek, prąd, internet",
          price: "od 69 €",
          detail: "Formalności po wprowadzeniu — formularze, kontakt z dostawcami.",
        },
        {
          name: "Tłumaczenie umowy najmu",
          price: "od 59 €",
          detail: "Omówienie warunków i tłumaczenie kluczowych zapisów przed podpisem.",
        },
      ],
    },
    {
      title: "Praca i formalności zawodowe",
      items: [
        {
          name: "Założenie Gewerbe",
          price: "od 149 €",
          detail: "Przygotowanie do rejestracji, formularze, kontakt z Gewerbeamt.",
        },
        {
          name: "Freistellungsbescheinigung (§ 48b EStG)",
          price: "od 199 €",
          detail: "Wniosek do Finanzamt, dokumenty, korespondencja dla firm budowlanych.",
        },
        {
          name: "Dokumenty zawodowe i kontakt z pracodawcą",
          price: "od 65 € / godz.",
          detail: "Umowy, zaświadczenia, wypowiedzenia — według czasu pracy.",
        },
      ],
    },
    {
      title: "Świadczenia socjalne",
      items: [
        {
          name: "Wypełnienie wniosku o świadczenie",
          price: "od 89 €",
          detail: "Arbeitslosengeld, Bürgergeld, Kindergeld, Wohngeld i inne — pojedynczy wniosek.",
        },
        {
          name: "Kompletowanie dokumentów do wniosku",
          price: "od 59 €",
          detail: "Zebranie załączników, porządek w pismach, checklista braków.",
        },
      ],
    },
    {
      title: "Tłumaczenia",
      items: [
        {
          name: "Tłumaczenie ustne (PL ↔ DE)",
          price: "od 45 € / godz.",
          detail: "Urząd, lekarz, bank, notariusz, telefon — stawka za rozpoczętą godzinę.",
        },
        {
          name: "Tłumaczenie pisemne",
          price: "od 0,12 € / słowo",
          detail: "Pisma, umowy, formularze — wycena po obejrzeniu dokumentu.",
        },
      ],
    },
    {
      title: "Urzędy i formalności",
      items: [
        {
          name: "Kontakt z urzędem w Twoim imieniu",
          price: "od 65 € / godz.",
          detail: "Telefon, e-mail, umawianie terminów, ustalenia z instytucją.",
        },
        {
          name: "Wypełnianie formularzy urzędowych",
          price: "od 79 €",
          detail: "Formularze i wnioski — w zależności od liczby stron i złożoności.",
        },
      ],
    },
  ],
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
    menuDescription: "Praca, Gewerbe, Freistellung § 48b, BAB i dokumenty zawodowe.",
    title: "Praca i sprawy zawodowe",
    description:
      "Od szukania pracy i założenia Gewerbe, przez Freistellungsbescheinigung, BAB i sprawy zatrudnienia, aż po dokumenty i formalności zawodowe.",
    tag: "Praca",
    slug: "praca-i-sprawy-zawodowe",
    excerpt: "Praca, Gewerbe i papiery zawodowe ogarnięte spokojnie i na czas.",
  },
  {
    menuLabel: "Świadczenia socjalne",
    menuDescription: "Arbeitslosengeld, Bürgergeld, Kindergeld, BuT, BAföG i inne wnioski.",
    title: "Świadczenia socjalne",
    description:
      "Od Arbeitslosengeld i Bürgergeld, przez Kindergeld, BuT i BAföG, aż po wnioski o opiekę, alimenty i kompletowanie dokumentów.",
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
    menuDescription: "Zwykłe i przysięgłe — ustne, pisemne i telefoniczne, u notariusza, lekarza, w urzędzie i banku.",
    title: "Tłumaczenia",
    description:
      "Tłumaczenia polsko-niemieckie — zwykłe i przysięgłe: ustne, pisemne i telefoniczne — u notariusza, prawnika, lekarza, w urzędzie, banku i spółdzielni.",
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
      text: "Gewerbe to samodzielna działalność rejestrowana w Gewerbeamt (Gewerbeanmeldung) — informacja trafia m.in. do Finanzamt. Nebengewerbe to ta sama forma, ale prowadzona dodatkowo obok etatu, np. sprzątanie czy handel po pracy. Pomagam wybrać właściwy wariant, wypełnić formularze i przygotować się przed startem — bez mylenia z Kleingewerbe czy Kleinunternehmerregelung.",
    },
    {
      slug: "pomoc-w-sprawach-zwiazanych-z-zatrudnieniem",
      title: "Pomoc w sprawach związanych z zatrudnieniem",
      text: "Kontakt z pracodawcą, umowa, wypowiedzenie albo zaświadczenia — prowadzę sprawę, żeby dokumenty były kompletne.",
    },
    {
      slug: "freistellungsbescheinigung-48b-estg",
      title: "Freistellungsbescheinigung (§ 48b EStG)",
      text: "Pomoc w uzyskaniu dla polskich firm i podwykonawców wykonujących prace budowlane w Niemczech. Freistellungsbescheinigung nach § 48b EStG to zaświadczenie wydawane przez niemiecki Finanzamt — dzięki niemu zleceniodawca zasadniczo nie potrąca 15% Bauabzugsteuer z wynagrodzenia polskiej firmy za usługi budowlane. Bez ważnego Freistellung zleceniodawca jest co do zasady zobowiązany do takiego potrącenia. Finanzamt może wymagać m.in. polskiego zaświadczenia o rezydencji podatkowej oraz dodatkowych informacji dotyczących działalności budowlanej. Pomagam złożyć wniosek, kompletować dokumenty i prowadzić korespondencję z urzędem skarbowym.",
    },
    {
      slug: "berufsausbildungsbeihilfe-bab",
      title: "Berufsausbildungsbeihilfe (BAB)",
      text: "Berufsausbildungsbeihilfe (BAB) to pomoc finansowa dla osób odbywających Ausbildung, gdy wynagrodzenie z nauki zawodu nie wystarcza na utrzymanie. Wniosek składa się np. w Agentur für Arbeit — zależy od sytuacji rodzinnej i dochodów. Pomagam sprawdzić warunki, wypełnić wniosek i kompletować dokumenty.",
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
      text: "Arbeitslosengeld I to zasiłek po utracie pracy dla osób, które opłacały składki na ubezpieczenie od bezrobocia — zwykle potrzeba 12 miesięcy ubezpieczenia w ostatnich 30 miesiącach. Wypłaca Agentur für Arbeit, wysokość to ok. 60% wynagrodzenia netto (67% przy dziecku). Pomagam złożyć wniosek, dokumenty i terminy.",
    },
    {
      slug: "burgergeld",
      title: "Bürgergeld",
      text: "Bürgergeld (Grundsicherungsgeld) to zabezpieczenie, gdy dochody i środki nie wystarczają na utrzymanie — także gdy pracujesz, ale zarobki są za niskie. Jobcenter bierze pod uwagę dochody, majątek i całe gospodarstwo domowe; może pokrywać koszty mieszkania i ogrzewania. W ramach Grundsicherung mogą też przysługiwać Mehrbedarf (np. w ciąży) oraz jednorazowe świadczenia na szczególne potrzeby. Pomagam z wnioskiem, załącznikami i korespondencją.",
    },
    {
      slug: "wohngeld",
      title: "Wohngeld",
      text: "Wohngeld to dopłata do kosztów mieszkania dla osób o niższych dochodach, które same się utrzymują, ale czynsz stanowi duże obciążenie. Najemcy otrzymują Mietzuschuss, właściciele mieszkający we własnej nieruchomości — Lastenzuschuss. Wysokość zależy od dochodów, liczby osób i kosztów lokalu; zwykle nie łączy się ze świadczeniem obejmującym już mieszkanie. Pomagam złożyć wniosek i kompletować dokumenty.",
    },
    {
      slug: "kindergeld",
      title: "Kindergeld",
      text: "Kindergeld to zasiłek rodzinny na utrzymanie dziecka — w 2026 roku 259 € miesięcznie na każde dziecko. Przysługuje do 18. roku życia, a przy nauce czy studiach do 25 lat; nie zależy bezpośrednio od wysokości zarobków rodziców. Pomagam z wnioskiem i ewentualnymi uzupełnieniami.",
    },
    {
      slug: "kinderzuschlag",
      title: "Kinderzuschlag",
      text: "Kinderzuschlag (KiZ) to dodatek dla rodzin, których dochody wystarczają na utrzymanie rodziców, ale nie na pełne potrzeby całej rodziny — warunkiem jest pobieranie Kindergeld. Można go łączyć z Wohngeld; wysokość zależy od sytuacji finansowej. Sprawdzam warunki, kompletuję dokumenty i pilnuję terminów.",
    },
    {
      slug: "elterngeld",
      title: "Elterngeld",
      text: "Elterngeld to świadczenie rodzicielskie po narodzinach dziecka — częściowo rekompensuje utracone dochody, gdy ograniczasz pracę lub z niej rezygnujesz, by opiekować się maluchem. Są warianty Basiselterngeld, ElterngeldPlus i Partnerschaftsbonus; można je dostać także bez wcześniejszych dochodów, pracując max. 32 h tygodniowo. Pomagam wybrać wariant, terminy i załączniki od pracodawcy.",
    },
    {
      slug: "mutterschaftsgeld",
      title: "Mutterschaftsgeld",
      text: "Mutterschaftsgeld to świadczenie związane z okresem ochronnym przed i po porodzie — dla kobiet spełniających warunki ubezpieczenia. Wypłaca je zazwyczaj ubezpieczalnia; wysokość i terminy zależą od sytuacji. Pomagam z wnioskiem, zaświadczeniami i kontaktem z instytucją.",
    },
    {
      slug: "unterhaltsvorschuss",
      title: "Unterhaltsvorschuss",
      text: "Unterhaltsvorschuss to zaliczka na alimenty dla dziecka wychowywanego przez jednego rodzica, gdy drugi rodzic nie płaci, płaci nieregularnie albo za mało. Wniosek składa się zazwyczaj w Jugendamt. Pomagam złożyć wniosek, dokumenty i korespondencją z urzędem.",
    },
    {
      slug: "bildung-und-teilhabe",
      title: "Bildung und Teilhabe (BuT)",
      text: "Bildung und Teilhabe (BuT) to pomoc dla dzieci z rodzin o niższych dochodach — na wycieczki szkolne, obiady, zajęcia dodatkowe i wybrane wydatki związane ze szkołą. Mogą z niej korzystać m.in. dzieci z rodzin pobierających Wohngeld lub Kinderzuschlag. Pomagam sprawdzić uprawnienia i złożyć wniosek.",
    },
    {
      slug: "bafog",
      title: "BAföG",
      text: "BAföG to pomoc finansowa dla uczniów i studentów — wysokość i warunki zależą od sytuacji rodziny, dochodów i formy nauki. Pomagam ustalić, czy przysługuje, wypełnić wniosek i przygotować wymagane dokumenty.",
    },
    {
      slug: "grundsicherung-im-alter",
      title: "Grundsicherung im Alter und bei Erwerbsminderung",
      text: "Grundsicherung im Alter und bei Erwerbsminderung to zabezpieczenie podstawowych potrzeb dla osób w wieku emerytalnym oraz osób trwale całkowicie niezdolnych do pracy, gdy własne środki są niewystarczające. Pomagam z wnioskiem, dochodami, majątkiem i korespondencją z urzędem.",
    },
    {
      slug: "hilfe-zum-lebensunterhalt",
      title: "Hilfe zum Lebensunterhalt (Sozialhilfe)",
      text: "Hilfe zum Lebensunterhalt (Sozialhilfe) to pomoc dla osób w trudnej sytuacji finansowej, które nie kwalifikują się do podstawowego zabezpieczenia dla osób zdolnych do pracy. Pomagam ustalić właściwy tryb, wypełnić wniosek i zebrać dokumenty.",
    },
    {
      slug: "hilfe-zur-pflege",
      title: "Hilfe zur Pflege",
      text: "Hilfe zur Pflege to pomoc w kosztach opieki dla osób wymagających opieki, gdy własne środki i inne świadczenia nie wystarczają. Zależy od stopnia opieki i sytuacji finansowej. Pomagam z wnioskiem, załącznikami i kontaktem z urzędem opieki.",
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
      slug: "tlumaczenia-na-policji",
      title: "Tłumaczenia na policji",
      text: "Tłumaczę rozmowę na komisariacie — zeznania, wyjaśnienia i ustalenia z policją, żebyś wiedział, o co chodzi i co podpisujesz.",
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
