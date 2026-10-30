import type { Locale } from "./types";

function withBase(path = "/") {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  if (!path || path === "/") return `${base}/` || "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

const EN_PREFIX = "/en";

export function getLocaleFromPath(pathname: string): Locale {
  const path = stripBase(pathname);
  return path === EN_PREFIX || path.startsWith(`${EN_PREFIX}/`) ? "en" : "pl";
}

function stripBase(pathname: string): string {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  if (!base) return pathname;
  if (pathname === base || pathname === `${base}/`) return "/";
  return pathname.startsWith(`${base}/`) ? pathname.slice(base.length) : pathname;
}

export function localePath(locale: Locale, path: "home" | "about" | "contact" | "pricing" | "services" | "service"): string {
  if (locale === "pl") {
    const map = {
      home: "/",
      about: "/o-mnie",
      contact: "/kontakt",
      pricing: "/cennik",
      services: "/uslugi",
      service: "/uslugi",
    } as const;
    return withBase(map[path]);
  }
  const map = {
    home: "/en/",
    about: "/en/about",
    contact: "/en/contact",
    pricing: "/en/pricing",
    services: "/en/services",
    service: "/en/services",
  } as const;
  return withBase(map[path]);
}

export function serviceUrl(locale: Locale, slug: string): string {
  const base = locale === "en" ? "/en/services/" : "/uslugi/";
  return withBase(`${base}${slug}`);
}

export function switchLocalePath(currentPathname: string, target: Locale): string {
  const path = stripBase(currentPathname);
  const locale = getLocaleFromPath(path);

  const normalized =
    path === EN_PREFIX ? "/en/" : path.startsWith(`${EN_PREFIX}/`) ? path : path;

  const routeMap: { pl: string; en: string }[] = [
    { pl: "/", en: "/en/" },
    { pl: "/o-mnie", en: "/en/about" },
    { pl: "/kontakt", en: "/en/contact" },
    { pl: "/cennik", en: "/en/pricing" },
    { pl: "/uslugi", en: "/en/services" },
  ];

  for (const pair of routeMap) {
    if (normalized === pair[locale] || normalized === `${pair[locale]}/`) {
      return withBase(pair[target]);
    }
  }

  const serviceMatch = normalized.match(/^\/(?:en\/services|uslugi)\/([^/]+)\/?$/);
  if (serviceMatch) {
    return serviceUrl(target, serviceMatch[1]!);
  }

  return localePath(target, "home");
}

export function pathWithoutLocale(pathname: string): string {
  const path = stripBase(pathname);
  if (path === EN_PREFIX) return "/";
  if (path.startsWith(`${EN_PREFIX}/`)) {
    const rest = path.slice(EN_PREFIX.length);
    if (rest.startsWith("/services/")) return `/uslugi${rest.slice("/services".length)}`;
    if (rest === "/about") return "/o-mnie";
    if (rest === "/contact") return "/kontakt";
    if (rest === "/pricing") return "/cennik";
    if (rest === "/services") return "/uslugi";
    return rest || "/";
  }
  return path;
}
