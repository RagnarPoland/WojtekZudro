import { SITE_CONTACT as SHARED_CONTACT } from "../../lib/site";
import type { SiteStrings } from "../types";

const aboutBody = [
  "I know exactly what it feels like to land in a foreign country holding a stack of official letters that look like they were written in code.",
  "I have lived abroad since 2010, and since 2018 Germany has been my home. Before settling here, I travelled across Europe, gained experience, met people, and above all absorbed languages — a long-standing passion of mine. Today I communicate fluently in German, English, and Dutch, and in my spare time I am learning Arabic.",
  "Helping fellow expats started naturally for me. First it was neighbourly favours finding a flat or garage, then trips to authorities to tackle famous German paperwork, and eventually interpreting at notaries, lawyers, and the police. Over time this passion became my official business — Büroservice. I mainly help people find rental flats or houses in Germany. I have supported many nationalities, mostly Poles, but also Ukrainians, Kurds, Algerians, Moroccans, Vietnamese, and even Germans. I am truly glad that so many nationalities want to live in beautiful Germany; it is a strength of the country that anyone who wants to work can get a chance, and I am happy to help with first steps — from appointments at immigration and registration offices to finding a first dream home and starting a new job — taking that first step toward dreams and a better tomorrow.",
  "I arrange rental flats and houses for people already in Germany and for people abroad. It is possible to rent in Germany based on income from the last three months earned outside Germany. I have already helped singles, couples, and families relocate to Germany directly from Poland, France, Iceland, the Netherlands, Belgium, and Norway.",
  "My office is in Bebertal, about 30 km from Magdeburg, but I handle clients’ matters throughout Germany.",
  "If you would like to see how this works in practice, visit my office for a coffee, let us have a video call, or simply talk on the phone. The first conversation is always completely free and non-binding. If I do not pick up, I am probably in an appointment or meeting, or out of signal — I will call back as soon as I can!",
] as const;

export const enContent: SiteStrings = {
  locale: "en",
  htmlLang: "en",
  ogLocale: "en_GB",
  metaDescriptionDefault:
    "Wojciech Zudro Büroservice: housing, employment, benefits, loans, interpreting, and authorities in Germany. Discretion, order, and deadlines you can rely on.",
  SITE_NAV: [
    { href: "/en/services/", label: "Services", highlight: true },
    { href: "/en/about/", label: "About" },
    { href: "/en/pricing/", label: "Pricing" },
  ],
  SITE_CTA: {
    footerLead: "Need help with your matter?",
    footerText:
      "Tell me about housing, work, benefits, a loan, interpreting, or an authority — I will reply and we will agree on the scope.",
    homeTitle: "Housing, authority, or employment matter?",
    homeText: "Briefly describe your situation — I will match Büroservice to your needs, without filler.",
    contactTitle: "Let us talk about your case",
    buttonPrimary: "Let us talk",
    buttonMenu: "Book a call",
    buttonSecondary: "Send a message",
  },
  SITE_CONTACT: {
    ...SHARED_CONTACT,
    officeHoursWeekdays: "Mon–Fri: 8 am–4 pm",
    officeHoursWeekend: "Sat–Sun: by appointment only",
  },
  labels: {
    contactKicker: "Contact",
    contactLead:
      "Tell me what you need help with — housing, work, benefits, a loan, interpreting, or an authority. I will call or write back to agree on scope.",
    phone: "Phone:",
    email: "Email:",
    office: "Office address:",
    hours: "Opening hours:",
    tax: "Tax number (Steuernummer):",
    contactAsideLabel: "Fastest response",
    contactAsideText: "Fastest here — WhatsApp, Messenger, or visit the fan page.",
    mapTitle: "Office in Bebertal",
    pricingKicker: "Pricing",
    pricingTitle: "Sample rates",
    servicesKicker: "Services",
    servicesTitle: "How I can help",
    servicesLead: "Six Büroservice areas. Choose the one that fits your case.",
    aboutKicker: "About",
    aboutGreeting: "Hello!",
    aboutTaglineSuffix: "— helping expats in Germany for years.",
    aboutCloser: "I will gladly take unnecessary stress off your shoulders and see your matter through to a good outcome.",
    readMore: "Read more →",
    seeServices: "View services",
    latestTitle: "Latest on the site",
    popularTitle: "Popular in practice",
    statsAria: "How I work",
    cardReadMore: "View →",
    serviceEmpty:
      "We will add a detailed description of this service in the next step. For now, book a call and tell me what your case is about.",
    offerDropdownLead: "Choose the area that",
    offerDropdownLeadHighlight: "fits best",
    footerWriteEmail: "Email",
    footerOrGoTo: "or go to the",
    footerContactPage: "contact page",
    brandAria: "Wojciech Zudro — Büroservice",
    mainNavAria: "Main navigation",
    menuOpen: "Open navigation menu",
    menuClose: "Close navigation menu",
    offerDropdownSuffix: " to your case",
    galleryAria: "Photo gallery",
    socialWhatsApp: "Message on WhatsApp",
    socialMessenger: "Message on Messenger",
    socialFacebook: "Visit Facebook page",
    socialGoogle: "View Google Business profile",
    socialLinkedIn: "LinkedIn profile",
    socialInstagram: "Instagram profile",
    socialTikTok: "TikTok profile",
    socialYouTube: "YouTube channel",
    langMenuAria: "Choose language",
    langTriggerAria: "Site language: English. Expand other languages",
    langDeutschSoon: "Deutsch — coming soon",
    langDutchSoon: "Nederlands — coming soon",
    footerContactSectionAria: "Contact",
  },
  HOME_FEATURED: {
    eyebrow: "Featured",
    title: "Matters that run calmly — without chaos or backlog",
    text: "Wojciech Zudro runs Büroservice: housing, work, benefits, loans, interpreting, and authorities. Discretion, order, and deadlines that are kept.",
  },
  HOME_LATEST: [
    {
      slug: "mieszkania-i-domy",
      tag: "Housing",
      title: "Housing without guesswork",
      text: "Rent, purchase, and landlord correspondence — sorted before they become problems.",
    },
    {
      slug: "praca-i-sprawy-zawodowe",
      tag: "Work",
      title: "Work and employment on time",
      text: "Contracts, certificates, and employer contact without losing documents.",
    },
    {
      slug: "urzedy-i-formalnosci",
      tag: "Authorities",
      title: "Authorities and paperwork under control",
      text: "Letters and deadlines handled instead of postponed.",
    },
  ],
  HOME_STATS: [
    { value: "Discretion", label: "Your matters stay between us" },
    { value: "Order", label: "Documents, deadlines, and letters in one place" },
    { value: "Punctuality", label: "Authority, landlord, and employer — on time" },
  ],
  HOME_POPULAR: [
    { slug: "mieszkania-i-domy", tag: "Housing", title: "A rental contract you understand" },
    { slug: "praca-i-sprawy-zawodowe", tag: "Work", title: "Employer documents without backlog" },
    { slug: "swiadczenia-socjalne", tag: "Benefits", title: "An application that is not returned for gaps" },
    { slug: "kredyty-i-ubezpieczenia", tag: "Finance", title: "Loan and insurance in one order" },
    { slug: "tlumaczenia", tag: "Interpreting", title: "A document ready to submit" },
    { slug: "urzedy-i-formalnosci", tag: "Authorities", title: "An official letter that does not wait in a drawer" },
  ],
  HOME_CATEGORIES: [
    {
      title: "Life and home",
      items: [
        {
          slug: "mieszkania-i-domy",
          tag: "Housing",
          title: "Flats and houses",
          text: "Rent, purchase, and correspondence about your home.",
        },
        {
          slug: "swiadczenia-socjalne",
          tag: "Benefits",
          title: "Social benefits",
          text: "Applications and attachments organised before the deadline.",
        },
        {
          slug: "urzedy-i-formalnosci",
          tag: "Authorities",
          title: "Authorities and formalities",
          text: "Letters and deadlines handled calmly, without chaos.",
        },
      ],
    },
    {
      title: "Work and business",
      items: [
        {
          slug: "praca-i-sprawy-zawodowe",
          tag: "Work",
          title: "Work and employment",
          text: "Contracts and certificates that must be complete.",
        },
        {
          slug: "kredyty-i-ubezpieczenia",
          tag: "Finance",
          title: "Loans and insurance",
          text: "Bank and insurer correspondence in one place.",
        },
        {
          slug: "tlumaczenia",
          tag: "Interpreting",
          title: "Interpreting",
          text: "Documents clear and ready for authority or contract.",
        },
      ],
    },
  ],
  SITE_PRICING: {
    lead:
      "Sample indicative pricing below. We will agree exact fees after a short call — every case differs in scope.",
    note:
      "Sample prices, net. The first introductory call is free and non-binding. For larger cases, packages or ongoing cooperation are possible.",
    categories: [
      {
        title: "Consultation",
        items: [
          {
            name: "First introductory call",
            price: "Free",
            detail: "Phone, WhatsApp, Messenger, online meeting, or at my office — we define scope.",
          },
          {
            name: "Extended consultation",
            price: "from €49",
            detail: "Detailed document review and action plan (up to about 1 hour).",
          },
          {
            name: "Travel to client",
            price: "€0.25 / km",
            detail: "Trips outside the office — billed by actual kilometres.",
          },
        ],
      },
      {
        title: "Flats and houses",
        items: [
          {
            name: "Help finding a flat or house",
            price: "from €299",
            detail: "Sample starting fee — quote depends on location, timing, and scope.",
          },
          {
            name: "Viewings and negotiations",
            price: "from €79",
            detail: "On-site interpreting, questions to the landlord, initial terms.",
          },
          {
            name: "Registration, power, internet",
            price: "from €69",
            detail: "Formalities after move-in — forms and utility providers.",
          },
          {
            name: "Rental contract interpreting",
            price: "from €59",
            detail: "Key terms explained and interpreted before signing.",
          },
        ],
      },
      {
        title: "Work and employment formalities",
        items: [
          {
            name: "Setting up Gewerbe",
            price: "from €149",
            detail: "Preparation for registration, forms, contact with Gewerbeamt.",
          },
          {
            name: "Freistellungsbescheinigung (§ 48b EStG)",
            price: "from €199",
            detail: "Application, documents, correspondence with Finanzamt for construction subcontractors.",
          },
          {
            name: "Employment documents and employer contact",
            price: "from €65 / hour",
            detail: "Contracts, certificates, termination — billed by time.",
          },
        ],
      },
      {
        title: "Social benefits",
        items: [
          {
            name: "Completing a benefit application",
            price: "from €89",
            detail: "Arbeitslosengeld, Bürgergeld, Kindergeld, Wohngeld, etc. — single application.",
          },
          {
            name: "Gathering application documents",
            price: "from €59",
            detail: "Attachments collected, papers ordered, gap checklist.",
          },
        ],
      },
      {
        title: "Interpreting",
        items: [
          {
            name: "Oral interpreting (PL, NL, EN, DE)",
            price: "from €45 / hour",
            detail: "Authority, doctor, bank, notary, phone — per started hour.",
          },
          {
            name: "Written translation (PL, NL, EN, DE)",
            price: "from €0.12 / word",
            detail: "Letters, contracts, forms — quote after reviewing the document.",
          },
        ],
      },
      {
        title: "Authorities and formalities",
        items: [
          {
            name: "Contact with authorities on your behalf",
            price: "from €65 / hour",
            detail: "Calls, email, appointments, coordination with institutions.",
          },
          {
            name: "Official forms and applications",
            price: "from €79",
            detail: "Forms and applications — depending on pages and complexity.",
          },
        ],
      },
    ],
  },
  SITE_SERVICES: [
    {
      menuLabel: "Flats and houses",
      menuDescription: "Finding a home, landlord contact, rent, registration, utilities.",
      title: "Flats and houses",
      description:
        "From searching for a flat or house, viewings and contract, to registration, power, and landlord contact.",
      tag: "Housing",
      slug: "mieszkania-i-domy",
      excerpt: "Housing matters sorted: from contract to correspondence with the landlord.",
    },
    {
      menuLabel: "Work and employment",
      menuDescription: "Jobs, Gewerbe, Freistellung § 48b, BAB, and employment documents.",
      title: "Work and employment",
      description:
        "From job search and Gewerbe registration, Freistellungsbescheinigung, BAB, and employment matters to professional paperwork.",
      tag: "Work",
      slug: "praca-i-sprawy-zawodowe",
      excerpt: "Work, Gewerbe, and professional papers handled calmly and on time.",
    },
    {
      menuLabel: "Social benefits",
      menuDescription: "Arbeitslosengeld, Bürgergeld, Kindergeld, BuT, BAföG, and other applications.",
      title: "Social benefits",
      description:
        "From Arbeitslosengeld and Bürgergeld to Kindergeld, BuT, BAföG, care, maintenance, and document gathering.",
      tag: "Benefits",
      slug: "swiadczenia-socjalne",
      excerpt: "Benefit applications and attachments step by step.",
    },
    {
      menuLabel: "Loans and insurance",
      menuDescription: "Loans, insurance, and documents for bank or insurer.",
      title: "Loans and insurance",
      description: "From loan and insurance matters to paperwork for bank or insurer.",
      tag: "Finance",
      slug: "kredyty-i-ubezpieczenia",
      excerpt: "Loan and policy without a pile of unreadable letters.",
    },
    {
      menuLabel: "Interpreting",
      menuDescription: "Certified and standard — oral, written, phone, notary, doctor, authority, bank.",
      title: "Interpreting",
      description:
        "Polish–German interpreting — standard and sworn: oral, written, and by phone — at notary, lawyer, doctor, authority, bank, and housing cooperative. Also available in English and Dutch.",
      tag: "Interpreting",
      slug: "tlumaczenia",
      excerpt: "Documents in clear language, ready to submit.",
    },
    {
      menuLabel: "Authorities and formalities",
      menuDescription: "Authority contact, applications, registration, talks with institutions.",
      title: "Authorities and formalities",
      description: "From authority contact and forms to registration and talks with German institutions.",
      tag: "Authorities",
      slug: "urzedy-i-formalnosci",
      excerpt: "Authority, application, and deadline — handled before they become a problem.",
    },
  ],
  aboutBody,
  aboutPhotoAlts: [
    "Wojciech Zudro — emigration and languages",
    "Wojciech Zudro — portrait",
    "Wojciech Zudro — help with authorities and formalities",
    "Wojciech Zudro — Büroservice in Bebertal",
    "Wojciech Zudro — meeting and conversation",
    "Wojciech Zudro — invitation to contact",
  ],
};
