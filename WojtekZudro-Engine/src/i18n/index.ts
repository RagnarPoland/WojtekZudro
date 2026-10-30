import { SERVICE_DETAILS, SITE_OFFER_MENU_ORDER } from "../lib/site";
import { enContent } from "./en/site";
import { EN_SERVICE_DETAILS } from "./en/service-details";
import { plContent } from "./pl";
import type { Locale, ServiceDetailItem, ServiceItem } from "./types";

export type { Locale } from "./types";
export {
  getLocaleFromPath,
  localePath,
  pathWithoutLocale,
  serviceUrl,
  switchLocalePath,
} from "./routes";

export function getContent(locale: Locale) {
  return locale === "en" ? enContent : plContent;
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
  const details = SERVICE_DETAILS[slug as keyof typeof SERVICE_DETAILS];
  return details ? [...details] : [];
}
