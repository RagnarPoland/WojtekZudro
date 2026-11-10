import { SERVICE_DETAILS, SITE_OFFER_MENU_ORDER } from "../lib/site";
import { deContent } from "./de/site";
import { DE_SERVICE_DETAILS } from "./de/service-details";
import { enContent } from "./en/site";
import { EN_SERVICE_DETAILS } from "./en/service-details";
import { nlContent } from "./nl/site";
import { NL_SERVICE_DETAILS } from "./nl/service-details";
import { plContent } from "./pl";
import type { Locale, ServiceDetailItem, ServiceItem } from "./types";

export type { Locale } from "./types";
export {
  getLocaleFromPath,
  localePath,
  pathWithoutLocale,
  serviceUrl,
  switchLocalePath,
  servicesNavHref,
} from "./routes";

export function getContent(locale: Locale) {
  if (locale === "en") return enContent;
  if (locale === "de") return deContent;
  if (locale === "nl") return nlContent;
  return plContent;
}

export function getOfferMenuItems(locale: Locale): ServiceItem[] {
  const content = getContent(locale);
  const bySlug = new Map(content.SITE_SERVICES.map((service) => [service.slug, service]));
  return SITE_OFFER_MENU_ORDER.map((slug) => bySlug.get(slug)).filter(
    (service): service is ServiceItem => Boolean(service),
  );
}

export function getServiceBySlug(slug: string, locale: Locale): ServiceItem | undefined {
  return getContent(locale).SITE_SERVICES.find((service) => service.slug === slug);
}

export function getServiceDetails(slug: string, locale: Locale): ServiceDetailItem[] {
  if (locale === "en") {
    const details = EN_SERVICE_DETAILS[slug as keyof typeof EN_SERVICE_DETAILS];
    return details ? [...details] : [];
  }
  if (locale === "de") {
    const details = DE_SERVICE_DETAILS[slug as keyof typeof DE_SERVICE_DETAILS];
    return details ? [...details] : [];
  }
  if (locale === "nl") {
    const details = NL_SERVICE_DETAILS[slug as keyof typeof NL_SERVICE_DETAILS];
    return details ? [...details] : [];
  }
  const details = SERVICE_DETAILS[slug as keyof typeof SERVICE_DETAILS];
  return details ? [...details] : [];
}
