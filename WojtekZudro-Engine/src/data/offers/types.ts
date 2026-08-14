export type OfferData = {
  slug: string;
  tag: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroLead: string;
  scopeTitle: string;
  scopeIntro: string;
  scope: readonly { title: string; text: string }[];
  forWhoTitle: string;
  forWho: readonly string[];
  processTitle: string;
  process: readonly { step: string; title: string; text: string }[];
  ctaTitle: string;
  ctaText: string;
};
