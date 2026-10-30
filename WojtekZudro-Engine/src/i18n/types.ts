export type Locale = "pl" | "en";

export type NavItem = {
  href: string;
  label: string;
  highlight?: boolean;
};

export type ServiceItem = {
  menuLabel: string;
  menuDescription: string;
  title: string;
  description: string;
  tag: string;
  slug: string;
  excerpt: string;
};

export type ServiceDetailItem = {
  slug: string;
  title: string;
  text: string;
};

export type SiteStrings = {
  locale: Locale;
  htmlLang: string;
  ogLocale: string;
  metaDescriptionDefault: string;
  SITE_NAV: NavItem[];
  SITE_CTA: {
    footerLead: string;
    footerText: string;
    homeTitle: string;
    homeText: string;
    contactTitle: string;
    buttonPrimary: string;
    buttonMenu: string;
    buttonSecondary: string;
  };
  SITE_CONTACT: {
    email: string;
    phone: string;
    phoneDisplay: string;
    whatsappUrl: string;
    messengerUrl: string;
    googleBusinessUrl: string;
    facebookUrl: string;
    instagramUrl: string;
    tiktokUrl: string;
    youtubeUrl: string;
    linkedinUrl: string;
    officeAddress: string;
    officeHoursWeekdays: string;
    officeHoursWeekend: string;
    taxNumber: string;
  };
  labels: {
    contactKicker: string;
    contactLead: string;
    phone: string;
    email: string;
    office: string;
    hours: string;
    tax: string;
    contactAsideLabel: string;
    contactAsideText: string;
    mapTitle: string;
    pricingKicker: string;
    pricingTitle: string;
    servicesKicker: string;
    servicesTitle: string;
    servicesLead: string;
    aboutKicker: string;
    aboutGreeting: string;
    aboutTaglineSuffix: string;
    aboutCloser: string;
    readMore: string;
    seeServices: string;
    latestTitle: string;
    popularTitle: string;
    statsAria: string;
    cardReadMore: string;
    serviceEmpty: string;
    offerDropdownLead: string;
    offerDropdownLeadHighlight: string;
    footerWriteEmail: string;
    footerOrGoTo: string;
    footerContactPage: string;
    brandAria: string;
    mainNavAria: string;
    menuOpen: string;
    menuClose: string;
    offerDropdownSuffix: string;
    galleryAria: string;
    socialWhatsApp: string;
    socialMessenger: string;
    socialFacebook: string;
    socialGoogle: string;
    socialLinkedIn: string;
    socialInstagram: string;
    socialTikTok: string;
    socialYouTube: string;
    langMenuAria: string;
    langTriggerAria: string;
    langDeutschSoon: string;
    langDutchSoon: string;
    footerContactSectionAria: string;
  };
  HOME_FEATURED: { eyebrow: string; title: string; text: string };
  HOME_LATEST: { slug: string; tag: string; title: string; text: string }[];
  HOME_STATS: { value: string; label: string }[];
  HOME_POPULAR: { slug: string; tag: string; title: string }[];
  HOME_CATEGORIES: {
    title: string;
    items: { slug: string; tag: string; title: string; text: string }[];
  }[];
  SITE_PRICING: {
    lead: string;
    note: string;
    categories: {
      title: string;
      items: { name: string; price: string; detail: string }[];
    }[];
  };
  SITE_SERVICES: ServiceItem[];
  aboutBody: readonly string[];
  aboutPhotoAlts: readonly string[];
};
