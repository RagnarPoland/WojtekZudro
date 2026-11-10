import { SITE_CONTACT as SHARED_CONTACT } from "../../lib/site";
import type { SiteStrings } from "../types";

const aboutBody = [
  "Ik weet precies hoe het voelt om in een vreemd land aan te komen met een stapel officiële brieven die lijken te zijn geschreven in geheimschrift.",
  "Sinds 2010 woon ik in het buitenland, en sinds 2018 is Duitsland mijn thuis. Voordat ik mij hier vestigde, reisde ik door Europa, deed ervaring op, ontmoette mensen en vooral absorbeerde talen — een passie van mij sinds lang. Vandaag communiceer ik vloeiend in het Duits, Engels en Nederlands; in mijn vrije tijd leer ik Arabisch.",
  "Mede-expats helpen begon voor mij vanzelf. Eerst waren het burendiensten — een flat of garage vinden —, daarna bezoeken aan instanties om de beruchte Duitse papierwinkel aan te pakken, en uiteindelijk tolken bij notarissen, advocaten en de politie. Die passie werd mijn officiële bedrijf — Büroservice. Ik help mensen vooral bij het vinden van huurappartementen of -huizen in Duitsland. Ik heb al vele nationaliteiten geholpen, vooral Polen, maar ook Oekraïners, Koerden, Algerijnen, Marokkanen, Vietnamezen en zelfs Duitsers. Ik ben blij dat zoveel nationaliteiten in het mooie Duitsland willen wonen; het is een kracht van het land dat iedereen die wil werken een kans krijgt, en ik help graag bij de eerste stappen — van afspraken bij immigratie- en registratiekantoren tot het vinden van een eerste droomhuis en het starten van een nieuwe baan — die eerste stap richting dromen en een betere morgen.",
  "Ik regel huurappartementen en -huizen voor mensen die al in Duitsland zijn en voor mensen in het buitenland. Huren in Duitsland op basis van inkomen uit de laatste drie maanden, verdiend buiten Duitsland, is mogelijk. Ik heb al alleenstaanden, koppels en gezinnen geholpen die rechtstreeks vanuit Polen, Frankrijk, IJsland, Nederland, België en Noorwegen naar Duitsland verhuisden.",
  "Mijn kantoor staat in Bebertal, ongeveer 30 km van Magdeburg, maar ik behandel de zaken van cliënten in heel Duitsland.",
  "Wilt u zien hoe dat in de praktijk werkt, bezoek dan mijn kantoor voor een koffie, laten we een videogesprek voeren of gewoon telefonisch praten. Het eerste gesprek is altijd volledig gratis en vrijblijvend. Neem ik niet op, dan zit ik waarschijnlijk in een afspraak of vergadering, of heb ik geen bereik — ik bel u zo snel mogelijk terug!",
] as const;

export const nlContent: SiteStrings = {
  locale: "nl",
  htmlLang: "nl",
  ogLocale: "nl_NL",
  metaDescriptionDefault:
    "Wojciech Zudro Büroservice: huisvesting, werk, uitkeringen, leningen, tolken en instanties in Duitsland. Discretie, overzicht en deadlines waar u op kunt rekenen.",
  SITE_NAV: [
    { href: "/nl/diensten/", label: "Diensten", highlight: true },
    { href: "/nl/over-mij/", label: "Over mij" },
    { href: "/nl/tarieven/", label: "Tarieven" },
  ],
  SITE_CTA: {
    footerLead: "Hulp nodig bij uw zaak?",
    footerText:
      "Vertel mij over huisvesting, werk, uitkeringen, een lening, tolken of een instantie — ik antwoord en we spreken de scope af.",
    homeTitle: "Huisvesting, instantie of arbeidszaak?",
    homeText:
      "Beschrijf kort uw situatie — ik stem Büroservice af op uw behoefte, zonder opvulling.",
    contactTitle: "Laten we over uw zaak praten",
    buttonPrimary: "Laten we praten",
    buttonMenu: "Gesprek plannen",
    buttonSecondary: "Bericht sturen",
  },
  SITE_CONTACT: {
    ...SHARED_CONTACT,
    officeHoursWeekdays: "Ma–vr: 8.00–16.00 uur",
    officeHoursWeekend: "Za–zo: alleen op afspraak",
  },
  labels: {
    contactKicker: "Contact",
    contactLead:
      "Vertel mij waarbij u hulp nodig heeft — huisvesting, werk, uitkeringen, een lening, tolken of een instantie. Ik bel of schrijf u terug om de scope af te spreken.",
    phone: "Telefoon:",
    email: "E-mail:",
    office: "Kantooradres:",
    hours: "Openingstijden:",
    tax: "Belastingnummer (Steuernummer):",
    contactAsideLabel: "Snelste reactie",
    contactAsideText: "Het snelst hier — WhatsApp, Messenger of bezoek de fanpagina.",
    mapTitle: "Kantoor in Bebertal",
    pricingKicker: "Tarieven",
    pricingTitle: "Voorbeeldtarieven",
    servicesKicker: "Diensten",
    servicesTitle: "Waarmee ik kan helpen",
    servicesLead: "Zes Büroservice-gebieden. Kies wat bij uw zaak past.",
    aboutKicker: "Over mij",
    aboutGreeting: "Hallo!",
    aboutTaglineSuffix: "— al jaren hulp voor expats in Duitsland.",
    aboutCloser:
      "Ik neem u graag onnodige stress van de schouders en begeleid uw zaak tot een goed resultaat.",
    readMore: "Lees meer →",
    seeServices: "Diensten bekijken",
    latestTitle: "Het laatste op de site",
    popularTitle: "Populair in de praktijk",
    statsAria: "Zo werk ik",
    cardReadMore: "Bekijken →",
    serviceEmpty:
      "We voegen in de volgende stap een uitgebreide beschrijving van deze dienst toe. Plan voorlopig een gesprek en vertel mij waar uw zaak over gaat.",
    offerDropdownLead: "Kies het gebied dat",
    offerDropdownLeadHighlight: "het beste past",
    footerWriteEmail: "E-mail",
    footerOrGoTo: "of ga naar de",
    footerContactPage: "contactpagina",
    brandAria: "Wojciech Zudro — Büroservice",
    mainNavAria: "Hoofdnavigatie",
    menuOpen: "Navigatiemenu openen",
    menuClose: "Navigatiemenu sluiten",
    offerDropdownSuffix: " bij uw zaak",
    galleryAria: "Fotogalerij",
    socialWhatsApp: "Bericht via WhatsApp",
    socialMessenger: "Bericht via Messenger",
    socialFacebook: "Facebook-pagina bezoeken",
    socialGoogle: "Google Bedrijfsprofiel bekijken",
    socialLinkedIn: "LinkedIn-profiel",
    socialInstagram: "Instagram-profiel",
    socialTikTok: "TikTok-profiel",
    socialYouTube: "YouTube-kanaal",
    langMenuAria: "Taal kiezen",
    langTriggerAria: "Sitetaal: Nederlands. Andere talen uitklappen",
    langDeutschSoon: "Deutsch",
    langDutchSoon: "Nederlands",
    footerContactSectionAria: "Contact",
  },
  HOME_FEATURED: {
    eyebrow: "Uitgelicht",
    title: "Zaken die rustig verlopen — zonder chaos of achterstand",
    text: "Wojciech Zudro runt Büroservice: huisvesting, werk, uitkeringen, leningen, tolken en instanties. Discretie, overzicht en deadlines die worden gehaald.",
  },
  HOME_LATEST: [
    {
      slug: "mieszkania-i-domy",
      tag: "Huisvesting",
      title: "Huisvesting zonder giswerk",
      text: "Huur, koop en correspondentie met verhuurder — geregeld voordat het problemen worden.",
    },
    {
      slug: "praca-i-sprawy-zawodowe",
      tag: "Werk",
      title: "Werk en arbeid op tijd",
      text: "Contracten, attesten en contact met werkgever zonder documenten te verliezen.",
    },
    {
      slug: "urzedy-i-formalnosci",
      tag: "Instanties",
      title: "Instanties en papierwerk onder controle",
      text: "Brieven en deadlines afgehandeld in plaats van uitgesteld.",
    },
  ],
  HOME_STATS: [
    { value: "Discretie", label: "Uw zaken blijven tussen ons" },
    { value: "Overzicht", label: "Documenten, deadlines en brieven op één plek" },
    { value: "Stiptheid", label: "Instantie, verhuurder en werkgever — op tijd" },
  ],
  HOME_POPULAR: [
    { slug: "mieszkania-i-domy", tag: "Huisvesting", title: "Een huurcontract dat u begrijpt" },
    { slug: "praca-i-sprawy-zawodowe", tag: "Werk", title: "Werkgeversdocumenten zonder achterstand" },
    { slug: "swiadczenia-socjalne", tag: "Uitkeringen", title: "Een aanvraag die niet terugkomt om hiaten" },
    { slug: "kredyty-i-ubezpieczenia", tag: "Financiën", title: "Lening en verzekering in één overzicht" },
    { slug: "tlumaczenia", tag: "Tolken", title: "Een document klaar om in te dienen" },
    { slug: "urzedy-i-formalnosci", tag: "Instanties", title: "Een officiële brief die niet in een lade blijft liggen" },
  ],
  HOME_CATEGORIES: [
    {
      title: "Leven en thuis",
      items: [
        {
          slug: "mieszkania-i-domy",
          tag: "Huisvesting",
          title: "Appartementen en huizen",
          text: "Huur, koop en correspondentie over uw woning.",
        },
        {
          slug: "swiadczenia-socjalne",
          tag: "Uitkeringen",
          title: "Sociale uitkeringen",
          text: "Aanvragen en bijlagen op orde vóór de deadline.",
        },
        {
          slug: "urzedy-i-formalnosci",
          tag: "Instanties",
          title: "Instanties en formaliteiten",
          text: "Brieven en deadlines rustig afgehandeld, zonder chaos.",
        },
      ],
    },
    {
      title: "Werk en bedrijf",
      items: [
        {
          slug: "praca-i-sprawy-zawodowe",
          tag: "Werk",
          title: "Werk en arbeid",
          text: "Contracten en attesten die compleet moeten zijn.",
        },
        {
          slug: "kredyty-i-ubezpieczenia",
          tag: "Financiën",
          title: "Leningen en verzekeringen",
          text: "Correspondentie met bank en verzekeraar op één plek.",
        },
        {
          slug: "tlumaczenia",
          tag: "Tolken",
          title: "Tolken",
          text: "Documenten helder en klaar voor instantie of contract.",
        },
      ],
    },
  ],
  SITE_PRICING: {
    lead:
      "Hieronder vindt u voorbeeldtarieven. De exacte kosten spreken we af na een kort gesprek — elke zaak heeft een andere omvang.",
    note:
      "Voorbeeldprijzen, exclusief btw. Het eerste kennismakingsgesprek is gratis en vrijblijvend. Bij grotere zaken zijn pakketten of doorlopende samenwerking mogelijk.",
    categories: [
      {
        title: "Consult",
        items: [
          {
            name: "Eerste kennismakingsgesprek",
            price: "Gratis",
            detail:
              "Telefoon, WhatsApp, Messenger, online vergadering of op mijn kantoor — we bepalen de scope.",
          },
          {
            name: "Uitgebreid consult",
            price: "vanaf € 49",
            detail: "Gedetailleerde documentreview en actieplan (tot ongeveer 1 uur).",
          },
          {
            name: "Reis naar cliënt",
            price: "€ 0,25 / km",
            detail: "Ritten buiten het kantoor — gefactureerd op werkelijke kilometers.",
          },
        ],
      },
      {
        title: "Appartementen en huizen",
        items: [
          {
            name: "Hulp bij zoeken appartement of huis",
            price: "vanaf € 299",
            detail:
              "Voorbeeld van starttarief — offerte hangt af van locatie, timing en scope.",
          },
          {
            name: "Bezichtigingen en onderhandelingen",
            price: "vanaf € 79",
            detail: "Tolken ter plaatse, vragen aan verhuurder, eerste afspraken.",
          },
          {
            name: "Inschrijving, stroom, internet",
            price: "vanaf € 69",
            detail: "Formaliteiten na verhuizing — formulieren en nutsbedrijven.",
          },
          {
            name: "Tolken huurcontract",
            price: "vanaf € 59",
            detail: "Belangrijkste voorwaarden uitgelegd en vertolkt vóór ondertekening.",
          },
        ],
      },
      {
        title: "Formaliteiten werk en arbeid",
        items: [
          {
            name: "Gewerbe oprichten",
            price: "vanaf € 149",
            detail: "Voorbereiding op registratie, formulieren, contact met Gewerbeamt.",
          },
          {
            name: "Freistellungsbescheinigung (§ 48b EStG)",
            price: "vanaf € 199",
            detail:
              "Aanvraag, documenten, correspondentie met Finanzamt voor bouwonderaannemers.",
          },
          {
            name: "Arbeidsdocumenten en contact met werkgever",
            price: "vanaf € 65 / uur",
            detail: "Contracten, attesten, beëindiging — gefactureerd per tijd.",
          },
        ],
      },
      {
        title: "Sociale uitkeringen",
        items: [
          {
            name: "Invullen uitkeringsaanvraag",
            price: "vanaf € 89",
            detail:
              "Arbeitslosengeld, Bürgergeld, Kindergeld, Wohngeld, enz. — één aanvraag.",
          },
          {
            name: "Verzamelen aanvraagdocumenten",
            price: "vanaf € 59",
            detail: "Bijlagen verzameld, papieren op orde, checklist voor hiaten.",
          },
        ],
      },
      {
        title: "Tolken",
        items: [
          {
            name: "Mondeling tolken (PL, NL, EN, DE)",
            price: "vanaf € 45 / uur",
            detail: "Instantie, arts, bank, notaris, telefoon — per begonnen uur.",
          },
          {
            name: "Schriftelijke vertaling (PL, NL, EN, DE)",
            price: "vanaf € 0,12 / woord",
            detail: "Brieven, contracten, formulieren — offerte na beoordeling van het document.",
          },
        ],
      },
      {
        title: "Instanties en formaliteiten",
        items: [
          {
            name: "Contact met instanties namens u",
            price: "vanaf € 65 / uur",
            detail: "Bellen, e-mail, afspraken, afstemming met instellingen.",
          },
          {
            name: "Officiële formulieren en aanvragen",
            price: "vanaf € 79",
            detail: "Formulieren en aanvragen — afhankelijk van pagina's en complexiteit.",
          },
        ],
      },
    ],
  },
  SITE_SERVICES: [
    {
      menuLabel: "Appartementen en huizen",
      menuDescription: "Woning zoeken, contact verhuurder, huur, inschrijving, nutsbedrijven.",
      title: "Appartementen en huizen",
      description:
        "Van zoeken naar appartement of huis, bezichtigingen en contract, tot inschrijving, stroom en contact met verhuurder.",
      tag: "Huisvesting",
      slug: "mieszkania-i-domy",
      excerpt: "Huisvestingszaken op orde: van contract tot correspondentie met verhuurder.",
    },
    {
      menuLabel: "Werk en arbeid",
      menuDescription: "Banen, Gewerbe, Freistellung § 48b, BAB en arbeidsdocumenten.",
      title: "Werk en arbeid",
      description:
        "Van banen zoeken en Gewerbe-registratie, Freistellungsbescheinigung, BAB en arbeidszaken tot professioneel papierwerk.",
      tag: "Werk",
      slug: "praca-i-sprawy-zawodowe",
      excerpt: "Werk, Gewerbe en beroepspapieren rustig en op tijd afgehandeld.",
    },
    {
      menuLabel: "Sociale uitkeringen",
      menuDescription: "Arbeitslosengeld, Bürgergeld, Kindergeld, BuT, BAföG en andere aanvragen.",
      title: "Sociale uitkeringen",
      description:
        "Van Arbeitslosengeld en Bürgergeld tot Kindergeld, BuT, BAföG, zorg, alimentatie en documenten verzamelen.",
      tag: "Uitkeringen",
      slug: "swiadczenia-socjalne",
      excerpt: "Uitkingsaanvragen en bijlagen stap voor stap.",
    },
    {
      menuLabel: "Leningen en verzekeringen",
      menuDescription: "Leningen, verzekeringen en documenten voor bank of verzekeraar.",
      title: "Leningen en verzekeringen",
      description: "Van lening- en verzekeringszaken tot papierwerk voor bank of verzekeraar.",
      tag: "Financiën",
      slug: "kredyty-i-ubezpieczenia",
      excerpt: "Lening en polis zonder een stapel onleesbare brieven.",
    },
    {
      menuLabel: "Tolken",
      menuDescription:
        "Gecertificeerd en standaard — mondeling, schriftelijk, telefonisch, notaris, arts, instantie, bank.",
      title: "Tolken",
      description:
        "Pools-Duits tolken — standaard en beëdigd: mondeling, schriftelijk en telefonisch — bij notaris, advocaat, arts, instantie, bank en woongenootschap. Ook in het Engels en Nederlands.",
      tag: "Tolken",
      slug: "tlumaczenia",
      excerpt: "Documenten in heldere taal, klaar om in te dienen.",
    },
    {
      menuLabel: "Instanties en formaliteiten",
      menuDescription: "Contact met instanties, aanvragen, inschrijving, gesprekken met instellingen.",
      title: "Instanties en formaliteiten",
      description:
        "Van contact met instanties en formulieren tot inschrijving en gesprekken met Duitse instellingen.",
      tag: "Instanties",
      slug: "urzedy-i-formalnosci",
      excerpt: "Instantie, aanvraag en deadline — afgehandeld voordat het een probleem wordt.",
    },
  ],
  aboutBody,
  aboutPhotoAlts: [
    "Wojciech Zudro — emigratie en talen",
    "Wojciech Zudro — portret",
    "Wojciech Zudro — hulp bij instanties en formaliteiten",
    "Wojciech Zudro — Büroservice in Bebertal",
    "Wojciech Zudro — ontmoeting en gesprek",
    "Wojciech Zudro — uitnodiging tot contact",
  ],
};
