import { SITE_CONTACT as SHARED_CONTACT } from "../../lib/site";
import type { SiteStrings } from "../types";

const aboutBody = [
  "Ich weiß genau, wie es ist, in einem fremden Land anzukommen und einen Stapel amtlicher Schreiben in der Hand zu halten, die wie in Geheimschrift verfasst wirken.",
  "Seit 2010 lebe ich im Ausland, und seit 2018 ist Deutschland meine Heimat. Bevor ich mich hier niederließ, bereiste ich einen großen Teil Europas, sammelte Erfahrungen, lernte Menschen kennen und vor allem Sprachen — eine Leidenschaft, die mich schon lange begleitet. Heute kommuniziere ich fließend auf Deutsch, Englisch und Niederländisch; in meiner Freizeit lerne ich Arabisch.",
  "Menschen zu helfen begann bei mir ganz selbstverständlich: zuerst Nachbarschaftshilfe bei der Wohnungssuche oder einer Garage, dann gemeinsame Wege zu Ämtern, um die bekannte deutsche Papierarbeit zu bewältigen, schließlich Dolmetschen beim Notar, beim Anwalt oder bei der Polizei. Aus dieser Leidenschaft wurde mein offiziell geführtes Büroservice. Schwerpunkt ist die Unterstützung bei der Suche nach Mietwohnungen oder Häusern in Deutschland. Ich habe bereits Menschen vieler Nationalitäten geholfen — vor allem Polen, aber auch Ukrainern, Kurden, Algeriern, Marokkanern, Vietnamesen und auch Deutschen. Es freut mich sehr, dass so viele Nationalitäten in Deutschland leben möchten; ich helfe gern bei den ersten Schritten — vom Termin bei Ausländer- und Meldebehörde bis zur ersten Wohnung und einem neuen Job.",
  "Ich vermittle Mietwohnungen und -häuser für Menschen, die bereits in Deutschland sind, und für Menschen im Ausland. Eine Anmietung auf Grundlage von Einkommen aus den letzten drei Monaten außerhalb Deutschlands ist möglich. Ich habe bereits Singles, Paare und Familien aus Polen, Frankreich, Island, den Niederlanden, Belgien und Norwegen nach Deutschland begleitet.",
  "Mein Büro befindet sich in Bebertal, etwa 30 km von Magdeburg entfernt; ich betreue Anliegen jedoch in ganz Deutschland.",
  "Wenn Sie sehen möchten, wie das in der Praxis funktioniert: besuchen Sie mich auf einen Kaffee im Büro, wir sprechen per Video oder telefonisch. Das erste Gespräch ist stets unverbindlich und kostenlos. Wenn ich nicht sofort erreichbar bin, bin ich vermutlich in einem Termin oder ohne Empfang — ich rufe so schnell wie möglich zurück.",
] as const;

export const deContent: SiteStrings = {
  locale: "de",
  htmlLang: "de",
  ogLocale: "de_DE",
  metaDescriptionDefault:
    "Wojciech Zudro Büroservice: Wohnung, Arbeit, Leistungen, Kredite, Dolmetschen und Ämter in Deutschland. Diskretion, Ordnung und eingehaltene Fristen.",
  SITE_NAV: [
    { href: "/de/leistungen/", label: "Leistungen", highlight: true },
    { href: "/de/ueber-mich/", label: "Über mich" },
    { href: "/de/preise/", label: "Preise" },
  ],
  SITE_CTA: {
    footerLead: "Brauchen Sie Hilfe in Ihrer Angelegenheit?",
    footerText:
      "Schreiben Sie mir zu Wohnung, Arbeit, Leistungen, Kredit, Dolmetschen oder einem Amt — ich melde mich und wir klären den Umfang.",
    homeTitle: "Wohnung, Amt oder Arbeit?",
    homeText:
      "Beschreiben Sie kurz Ihre Situation — ich richte das Büroservice auf Ihren Bedarf aus, ohne leere Worte.",
    contactTitle: "Sprechen wir über Ihr Anliegen",
    buttonPrimary: "Sprechen wir",
    buttonMenu: "Termin vereinbaren",
    buttonSecondary: "Nachricht senden",
  },
  SITE_CONTACT: {
    ...SHARED_CONTACT,
    officeHoursWeekdays: "Mo–Fr: 8–16 Uhr",
    officeHoursWeekend: "Sa–So: nur nach Vereinbarung",
  },
  labels: {
    contactKicker: "Kontakt",
    contactLead:
      "Schildern Sie, wobei Sie Hilfe brauchen — Wohnung, Arbeit, Leistungen, Kredit, Dolmetschen oder ein Amt. Ich rufe an oder schreibe zurück, um den Umfang zu klären.",
    phone: "Telefon:",
    email: "E-Mail:",
    office: "Büroadresse:",
    hours: "Öffnungszeiten:",
    tax: "Steuernummer:",
    contactAsideLabel: "Schnellste Antwort",
    contactAsideText: "Am schnellsten erreichen Sie mich hier — WhatsApp, Messenger oder die Fanpage.",
    mapTitle: "Büro in Bebertal",
    pricingKicker: "Preise",
    pricingTitle: "Beispielpreise",
    servicesKicker: "Leistungen",
    servicesTitle: "Wobei ich helfen kann",
    servicesLead: "Sechs Bereiche des Büroservice. Wählen Sie, was zu Ihrem Anliegen passt.",
    aboutKicker: "Über mich",
    aboutGreeting: "Guten Tag!",
    aboutTaglineSuffix: "— seit Jahren Unterstützung für Menschen in Deutschland.",
    aboutCloser:
      "Gern nehme ich Ihnen unnötigen Stress ab und begleite Ihr Anliegen bis zu einem guten Ergebnis.",
    readMore: "Mehr lesen →",
    seeServices: "Leistungen ansehen",
    latestTitle: "Neu auf der Website",
    popularTitle: "Beliebt in der Praxis",
    statsAria: "So arbeite ich",
    cardReadMore: "Ansehen →",
    serviceEmpty:
      "Eine ausführliche Beschreibung dieser Leistung folgt im nächsten Schritt. Vereinbaren Sie vorerst ein Gespräch und schildern Sie Ihr Anliegen.",
    offerDropdownLead: "Wählen Sie den Bereich, der",
    offerDropdownLeadHighlight: "am besten passt",
    footerWriteEmail: "Schreiben Sie an",
    footerOrGoTo: "oder gehen Sie zur",
    footerContactPage: "Kontaktseite",
    brandAria: "Wojciech Zudro — Büroservice",
    mainNavAria: "Hauptnavigation",
    menuOpen: "Navigationsmenü öffnen",
    menuClose: "Navigationsmenü schließen",
    offerDropdownSuffix: " zu Ihrem Anliegen",
    galleryAria: "Fotogalerie",
    socialWhatsApp: "Nachricht per WhatsApp",
    socialMessenger: "Nachricht per Messenger",
    socialFacebook: "Facebook-Seite besuchen",
    socialGoogle: "Google-Unternehmensprofil ansehen",
    socialLinkedIn: "LinkedIn-Profil",
    socialInstagram: "Instagram-Profil",
    socialTikTok: "TikTok-Profil",
    socialYouTube: "YouTube-Kanal",
    langMenuAria: "Sprache wählen",
    langTriggerAria: "Sprache der Website: Deutsch. Weitere Sprachen anzeigen",
    langDeutschSoon: "Deutsch",
    langDutchSoon: "Nederlands",
    footerContactSectionAria: "Kontakt",
  },
  HOME_FEATURED: {
    eyebrow: "Im Fokus",
    title: "Anliegen mit Ruhe — ohne Chaos und ohne Aufschieben",
    text:
      "Wojciech Zudro führt Ihr Büroservice: Wohnung, Arbeit, Leistungen, Kredite, Dolmetschen und Ämter. Diskretion, Ordnung und eingehaltene Fristen.",
  },
  HOME_LATEST: [
    {
      slug: "mieszkania-i-domy",
      tag: "Wohnung",
      title: "Wohnen ohne Rätselraten",
      text: "Miete, Kauf und Schriftverkehr mit dem Vermieter — bevor daraus Probleme werden.",
    },
    {
      slug: "praca-i-sprawy-zawodowe",
      tag: "Arbeit",
      title: "Arbeit und Beschäftigung termingerecht",
      text: "Verträge, Bescheinigungen und Kontakt mit dem Arbeitgeber — ohne verlorene Unterlagen.",
    },
    {
      slug: "urzedy-i-formalnosci",
      tag: "Ämter",
      title: "Ämter und Formalitäten im Griff",
      text: "Briefe und Fristen werden erledigt statt verschoben.",
    },
  ],
  HOME_STATS: [
    { value: "Diskretion", label: "Ihre Anliegen bleiben zwischen uns" },
    { value: "Ordnung", label: "Unterlagen, Fristen und Briefe an einem Ort" },
    { value: "Pünktlichkeit", label: "Amt, Vermieter, Arbeitgeber — fristgerecht" },
  ],
  HOME_POPULAR: [
    { slug: "mieszkania-i-domy", tag: "Wohnung", title: "Ein Mietvertrag, den Sie verstehen" },
    { slug: "praca-i-sprawy-zawodowe", tag: "Arbeit", title: "Arbeitgeberunterlagen ohne Rückstau" },
    { slug: "swiadczenia-socjalne", tag: "Leistungen", title: "Ein Antrag ohne Lückenrückläufer" },
    { slug: "kredyty-i-ubezpieczenia", tag: "Finanzen", title: "Kredit und Versicherung aus einer Hand" },
    { slug: "tlumaczenia", tag: "Dolmetschen", title: "Ein Dokument, abgabebereit" },
    { slug: "urzedy-i-formalnosci", tag: "Ämter", title: "Ein amtlicher Brief, der nicht in der Schublade liegt" },
  ],
  HOME_CATEGORIES: [
    {
      title: "Leben und Wohnen",
      items: [
        {
          slug: "mieszkania-i-domy",
          tag: "Wohnung",
          title: "Wohnungen und Häuser",
          text: "Miete, Kauf und Schriftverkehr rund ums Zuhause.",
        },
        {
          slug: "swiadczenia-socjalne",
          tag: "Leistungen",
          title: "Sozialleistungen",
          text: "Anträge und Anlagen vor der Frist geordnet.",
        },
        {
          slug: "urzedy-i-formalnosci",
          tag: "Ämter",
          title: "Ämter und Formalitäten",
          text: "Briefe und Fristen ruhig und ohne Chaos.",
        },
      ],
    },
    {
      title: "Arbeit und Geschäft",
      items: [
        {
          slug: "praca-i-sprawy-zawodowe",
          tag: "Arbeit",
          title: "Arbeit und Beschäftigung",
          text: "Verträge und Bescheinigungen — vollständig und korrekt.",
        },
        {
          slug: "kredyty-i-ubezpieczenia",
          tag: "Finanzen",
          title: "Kredite und Versicherungen",
          text: "Schriftverkehr mit Bank und Versicherer an einem Ort.",
        },
        {
          slug: "tlumaczenia",
          tag: "Dolmetschen",
          title: "Dolmetschen",
          text: "Dokumente verständlich und bereit für Amt oder Vertrag.",
        },
      ],
    },
  ],
  SITE_PRICING: {
    lead:
      "Nachfolgend Beispielpreise. Die genauen Honorare klären wir in einem kurzen Gespräch — jedes Anliegen hat einen anderen Umfang.",
    note:
      "Beispielpreise, netto. Das erste Kennenlerngespräch ist kostenlos und unverbindlich. Bei größeren Fällen sind Pakete oder laufende Zusammenarbeit möglich.",
    categories: [
      {
        title: "Beratung",
        items: [
          {
            name: "Erstes Kennenlerngespräch",
            price: "Kostenlos",
            detail: "Telefon, WhatsApp, Messenger, Online-Termin oder im Büro — wir klären den Umfang.",
          },
          {
            name: "Ausführliche Beratung",
            price: "ab 49 €",
            detail: "Detaillierte Prüfung der Unterlagen und Maßnahmenplan (bis ca. 1 Stunde).",
          },
          {
            name: "Anfahrt zum Kunden",
            price: "0,25 € / km",
            detail: "Fahrten außerhalb des Büros — nach tatsächlicher Kilometerzahl.",
          },
        ],
      },
      {
        title: "Wohnungen und Häuser",
        items: [
          {
            name: "Hilfe bei der Wohnungssuche",
            price: "ab 299 €",
            detail: "Einstiegspreis — Angebot nach Ort, Zeitrahmen und Umfang.",
          },
          {
            name: "Besichtigungen und Verhandlungen",
            price: "ab 79 €",
            detail: "Dolmetschen vor Ort, Fragen an den Vermieter, erste Absprachen.",
          },
          {
            name: "Anmeldung, Strom, Internet",
            price: "ab 69 €",
            detail: "Formalitäten nach dem Einzug — Formulare und Versorger.",
          },
          {
            name: "Mietvertrag dolmetschen",
            price: "ab 59 €",
            detail: "Wichtige Punkte vor der Unterschrift erklären und dolmetschen.",
          },
        ],
      },
      {
        title: "Arbeit und Beschäftigung",
        items: [
          {
            name: "Gewerbeanmeldung",
            price: "ab 149 €",
            detail: "Vorbereitung der Anmeldung, Formulare, Kontakt mit dem Gewerbeamt.",
          },
          {
            name: "Freistellungsbescheinigung (§ 48b EStG)",
            price: "ab 199 €",
            detail: "Antrag, Unterlagen, Schriftverkehr mit dem Finanzamt für Bau-Subunternehmer.",
          },
          {
            name: "Arbeitsunterlagen und Arbeitgeberkontakt",
            price: "ab 65 € / Std.",
            detail: "Verträge, Bescheinigungen, Kündigung — nach Zeitaufwand.",
          },
        ],
      },
      {
        title: "Sozialleistungen",
        items: [
          {
            name: "Ausfüllen eines Leistungsantrags",
            price: "ab 89 €",
            detail: "Arbeitslosengeld, Bürgergeld, Kindergeld, Wohngeld usw. — ein Antrag.",
          },
          {
            name: "Unterlagen für den Antrag sammeln",
            price: "ab 59 €",
            detail: "Anlagen sammeln, Nachweise ordnen, Lückenliste.",
          },
        ],
      },
      {
        title: "Dolmetschen",
        items: [
          {
            name: "Mündliches Dolmetschen (PL, NL, EN, DE)",
            price: "ab 45 € / Std.",
            detail: "Amt, Arzt, Bank, Notar, Telefon — pro begonnene Stunde.",
          },
          {
            name: "Schriftliche Übersetzung (PL, NL, EN, DE)",
            price: "ab 0,12 € / Wort",
            detail: "Briefe, Verträge, Formulare — Angebot nach Sichtung.",
          },
        ],
      },
      {
        title: "Ämter und Formalitäten",
        items: [
          {
            name: "Kontakt mit Ämtern in Ihrem Namen",
            price: "ab 65 € / Std.",
            detail: "Anrufe, E-Mails, Termine, Abstimmung mit Institutionen.",
          },
          {
            name: "Amtliche Formulare und Anträge",
            price: "ab 79 €",
            detail: "Formulare und Anträge — je nach Umfang und Seitenzahl.",
          },
        ],
      },
    ],
  },
  SITE_SERVICES: [
    {
      menuLabel: "Wohnungen und Häuser",
      menuDescription: "Wohnungssuche, Vermieterkontakt, Miete, Anmeldung, Versorger.",
      title: "Wohnungen und Häuser",
      description:
        "Von der Wohnungssuche über Besichtigung und Vertrag bis zu Anmeldung, Strom und Vermieterkontakt.",
      tag: "Wohnung",
      slug: "mieszkania-i-domy",
      excerpt: "Wohnthemen geordnet: vom Vertrag bis zum Schriftverkehr mit dem Vermieter.",
    },
    {
      menuLabel: "Arbeit und Beschäftigung",
      menuDescription: "Jobs, Gewerbe, Freistellung § 48b, BAB und Arbeitspapiere.",
      title: "Arbeit und Beschäftigung",
      description:
        "Von Jobsuche und Gewerbeanmeldung über Freistellungsbescheinigung, BAB und Beschäftigungsthemen bis zu beruflichen Unterlagen.",
      tag: "Arbeit",
      slug: "praca-i-sprawy-zawodowe",
      excerpt: "Arbeit, Gewerbe und Berufspapiere — ruhig und termingerecht.",
    },
    {
      menuLabel: "Sozialleistungen",
      menuDescription: "Arbeitslosengeld, Bürgergeld, Kindergeld, BuT, BAföG und weitere Anträge.",
      title: "Sozialleistungen",
      description:
        "Von Arbeitslosengeld und Bürgergeld bis Kindergeld, BuT, BAföG, Pflege, Unterhalt und Unterlagensammlung.",
      tag: "Leistungen",
      slug: "swiadczenia-socjalne",
      excerpt: "Leistungsanträge und Anlagen Schritt für Schritt.",
    },
    {
      menuLabel: "Kredite und Versicherungen",
      menuDescription: "Kredite, Versicherungen und Unterlagen für Bank oder Versicherer.",
      title: "Kredite und Versicherungen",
      description: "Von Kredit- und Versicherungsthemen bis zu Unterlagen für Bank oder Versicherer.",
      tag: "Finanzen",
      slug: "kredyty-i-ubezpieczenia",
      excerpt: "Kredit und Police ohne einen Stapel unverständlicher Briefe.",
    },
    {
      menuLabel: "Dolmetschen",
      menuDescription: "Beglaubigt und allgemein — mündlich, schriftlich, telefonisch; Notar, Arzt, Amt, Bank.",
      title: "Dolmetschen",
      description:
        "Polnisch–Deutsch dolmetschen — allgemein und beeidigt: mündlich, schriftlich und telefonisch beim Notar, Anwalt, Arzt, Amt, Bank und der Wohnungsgenossenschaft. Auch Englisch und Niederländisch.",
      tag: "Dolmetschen",
      slug: "tlumaczenia",
      excerpt: "Dokumente in klarer Sprache, abgabebereit.",
    },
    {
      menuLabel: "Ämter und Formalitäten",
      menuDescription: "Amtskontakt, Anträge, Anmeldung, Gespräche mit Institutionen.",
      title: "Ämter und Formalitäten",
      description: "Von Amtskontakt und Formularen bis zu Anmeldung und Gesprächen mit deutschen Institutionen.",
      tag: "Ämter",
      slug: "urzedy-i-formalnosci",
      excerpt: "Amt, Antrag und Frist — bevor daraus ein Problem wird.",
    },
  ],
  aboutBody,
  aboutPhotoAlts: [
    "Wojciech Zudro — Auswanderung und Sprachen",
    "Wojciech Zudro — Porträt",
    "Wojciech Zudro — Hilfe bei Ämtern und Formalitäten",
    "Wojciech Zudro — Büroservice in Bebertal",
    "Wojciech Zudro — Gespräch und Begegnung",
    "Wojciech Zudro — Einladung zum Kontakt",
  ],
};
