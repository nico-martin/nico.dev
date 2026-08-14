"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    _paq?: unknown[][];
  }
}

export default function Matomo({
  url,
  siteId,
}: {
  url: string;
  siteId: string;
}) {
  const pathname = usePathname();
  const initialPageView = useRef(true);
  const config = JSON.stringify({ url, siteId }).replace(/</g, "\\u003c");

  useEffect(() => {
    if (initialPageView.current) {
      initialPageView.current = false;
      return;
    }

    const queue = (window._paq = window._paq || []);
    queue.push(["setCustomUrl", window.location.href]);
    queue.push(["setDocumentTitle", document.title]);
    queue.push(["trackPageView"]);
  }, [pathname]);

  return (
    <Script id="matomo" strategy="afterInteractive">
      {`var _paq = window._paq = window._paq || [];
_paq.push(['disableCookies']);
_paq.push(['setDoNotTrack', true]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var config = ${config};
  _paq.push(['setTrackerUrl', config.url + 'matomo.php']);
  _paq.push(['setSiteId', config.siteId]);
  var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
  g.async = true;
  g.src = config.url + 'matomo.js';
  s.parentNode.insertBefore(g, s);
})();`}
    </Script>
  );
}
