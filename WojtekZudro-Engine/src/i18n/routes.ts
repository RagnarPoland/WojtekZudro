import type { Locale } from "./types";

function withBase(path = "/") {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  if (!path || path === "/") return `${base}/` || "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

const LOCALIZED_SEGMENTS: Record<
  Locale,
  { home: string; about: string; contact: string; pricing: string; services: string }
> = {
  pl: {
    home: "/",
    about: "/o-mnie/",
    contact: "/kontakt/",
    pricing: "/cennik/",
    services: "/uslugi/",
  },
  en: {
    home: "/en/",
    about: "/en/about/",
    contact: "/en/contact/",
    pricing: "/en/pricing/",
    services: "/en/services/",
  },
  de: {
    home: "/de/",
    about: "/de/ueber-mich/",
    contact: "/de/kontakt/",
    pricing: "/de/preise/",
    services: "/de/leistungen/",
  },
  nl: {
    home: "/nl/",
    about: "/nl/over-mij/",
    contact: "/nl/contact/",
    pricing: "/nl/tarieven/",
    services: "/nl/diensten/",
  },
};

function normalizePath(path: string): string {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export function getLocaleFromPath(pathname: string): Locale {
  const path = stripBase(pathname);
  const normalized = normalizePath(path === "" ? "/" : path);
  if (normalized === "/nl/" || normalized.startsWith("/nl/")) return "nl";
  if (normalized === "/de/" || normalized.startsWith("/de/")) return "de";
  if (normalized === "/en/" || normalized.startsWith("/en/")) return "en";
  return "pl";
}

function stripBase(pathname: string): string {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  if (!base) return pathname;
  if (pathname === base || pathname === `${base}/`) return "/";
  return pathname.startsWith(`${base}/`) ? pathname.slice(base.length) : pathname;
}

export function localePath(
  locale: Locale,
  path: "home" | "about" | "contact" | "pricing" | "services" | "service",
): string {
  const seg = LOCALIZED_SEGMENTS[locale];
  const key = path === "service" ? "services" : path;
  return withBase(seg[key]);
}

export function serviceUrl(locale: Locale, slug: string): string {
  const base = LOCALIZED_SEGMENTS[locale].services;
  return withBase(`${base}${slug}/`);
}

const PAGE_ROUTE_PAIRS: { pl: string; en: string; de: string; nl: string }[] = [
  { pl: "/", en: "/en/", de: "/de/", nl: "/nl/" },
  { pl: "/o-mnie/", en: "/en/about/", de: "/de/ueber-mich/", nl: "/nl/over-mij/" },
  { pl: "/kontakt/", en: "/en/contact/", de: "/de/kontakt/", nl: "/nl/contact/" },
  { pl: "/cennik/", en: "/en/pricing/", de: "/de/preise/", nl: "/nl/tarieven/" },
  { pl: "/uslugi/", en: "/en/services/", de: "/de/leistungen/", nl: "/nl/diensten/" },
];

function pathsMatch(a: string, b: string): boolean {
  const na = normalizePath(a);
  const nb = normalizePath(b);
  const nbTrim = nb.replace(/\/$/, "");
  return na === nb || na === nbTrim || normalizePath(a) === normalizePath(b.replace(/\/$/, "") + "/");
}

export function switchLocalePath(currentPathname: string, target: Locale): string {
  const path = stripBase(currentPathname);
  const locale = getLocaleFromPath(path);
  const normalized = normalizePath(path === "" ? "/" : path);

  for (const pair of PAGE_ROUTE_PAIRS) {
    if (pathsMatch(normalized, pair[locale])) {
      return withBase(pair[target]);
    }
  }

  const serviceMatch = normalized.match(
    /^\/(?:en\/services|de\/leistungen|nl\/diensten|uslugi)\/([^/]+)\/?$/,
  );
  if (serviceMatch) {
    return serviceUrl(target, serviceMatch[1]!);
  }

  return localePath(target, "home");
}

export function pathWithoutLocale(pathname: string): string {
  const path = stripBase(pathname);
  const normalized = normalizePath(path === "" ? "/" : path);

  if (normalized === "/en/" || normalized.startsWith("/en/")) {
    const rest = normalized.slice("/en".length);
    if (rest.startsWith("/services/")) return `/uslugi/${rest.slice("/services/".length)}`;
    if (rest === "/about/") return "/o-mnie/";
    if (rest === "/contact/") return "/kontakt/";
    if (rest === "/pricing/") return "/cennik/";
    if (rest === "/services/") return "/uslugi/";
    return rest || "/";
  }

  if (normalized === "/de/" || normalized.startsWith("/de/")) {
    const rest = normalized.slice("/de".length);
    if (rest.startsWith("/leistungen/")) return `/uslugi/${rest.slice("/leistungen/".length)}`;
    if (rest === "/ueber-mich/") return "/o-mnie/";
    if (rest === "/kontakt/") return "/kontakt/";
    if (rest === "/preise/") return "/cennik/";
    if (rest === "/leistungen/") return "/uslugi/";
    return rest || "/";
  }

  if (normalized === "/nl/" || normalized.startsWith("/nl/")) {
    const rest = normalized.slice("/nl".length);
    if (rest.startsWith("/diensten/")) return `/uslugi/${rest.slice("/diensten/".length)}`;
    if (rest === "/over-mij/") return "/o-mnie/";
    if (rest === "/contact/") return "/kontakt/";
    if (rest === "/tarieven/") return "/cennik/";
    if (rest === "/diensten/") return "/uslugi/";
    return rest || "/";
  }

  return normalized;
}

export function servicesNavHref(locale: Locale): string {
  return LOCALIZED_SEGMENTS[locale].services.replace(/\/$/, "");
}
