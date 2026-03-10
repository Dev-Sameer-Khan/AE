import React, { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  /**
   * Path portion only, e.g. `/products` (no origin).
   * Defaults to current `window.location.pathname + window.location.search`.
   */
  canonicalPath?: string;
  ogImagePath?: string;
  noIndex?: boolean;
};

const DEFAULT_OG_IMAGE_PATH = '/logo.png';

export default function Seo({
  title,
  description,
  canonicalPath,
  ogImagePath = DEFAULT_OG_IMAGE_PATH,
  noIndex = false,
}: SeoProps) {
  useEffect(() => {
    const origin = window.location.origin;
    const fallbackPath = `${window.location.pathname}${window.location.search}`;
    const canonicalUrl = `${origin}${canonicalPath ?? fallbackPath}`;
    const ogImageUrl = `${origin}${ogImagePath}`;

    document.title = title;

    const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const upsertLink = (rel: string, href: string) => {
      let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    upsertMeta('name', 'description', description);
    upsertLink('canonical', canonicalUrl);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', ogImageUrl);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImageUrl);

    if (noIndex) upsertMeta('name', 'robots', 'noindex, nofollow');
  }, [title, description, canonicalPath, ogImagePath, noIndex]);

  return null;
}

