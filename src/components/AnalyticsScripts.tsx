'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';

export default function AnalyticsScripts() {
  const [isReady, setIsReady] = useState(false);

  const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '';
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '';
  const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || ''; // Fixed variable name
  const SNAP_PIXEL_ID = process.env.NEXT_PUBLIC_SNAP_PIXEL_ID || '';
  const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || '';

  // Only load scripts after initial render
  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) return null;

  return (
    <>
      {/* TikTok Pixel - load with lazyOnload for non-critical analytics */}
      <Script
        id="tiktok-base"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
                    !function (w, d, t) {
                      w.TiktokAnalyticsObject = t;
                      var ttq = w[t] = w[t] || [];
                      ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
                      ttq.setAndDefer = function (t, e) {
                        t[e] = function () {
                          t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                        }
                      };
                      for (var i = 0; i < ttq.methods.length; i++) {
                        ttq.setAndDefer(ttq, ttq.methods[i]);
                      }
                      ttq.instance = function (t) {
                        for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) {
                          ttq.setAndDefer(e, ttq.methods[n]);
                        }
                        return e;
                      };
                      ttq.load = function (e, n) {
                        var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
                        ttq._i = ttq._i || {};
                        ttq._i[e] = [];
                        ttq._i[e]._u = i;
                        ttq._t = ttq._t || {};
                        ttq._t[e] = +new Date;
                        ttq._o = ttq._o || {};
                        ttq._o[e] = n || {};
                        var o = document.createElement("script");
                        o.type = "text/javascript";
                        o.async = !0;
                        o.src = i + "?sdkid=" + e + "&lib=" + t;
                        var a = document.getElementsByTagName("script")[0];
                        a.parentNode.insertBefore(o, a);
                      };
        
                      ttq.load('${TIKTOK_PIXEL_ID}');
                      ttq.page();
                    }(window, document, 'ttq');
                  `,
        }}
      />

      {/* Prioritize GTM over individual scripts */}
      <Script
        id="gtm-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      { /* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>

      {/* Facebook Pixel */}
      <Script
        id="facebook-pixel"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}'); 
              fbq('track', 'PageView');
            `,
        }}
      />

      {/* Snapchat Pixel - lowest priority */}
      <Script
        id="snapchat-pixel"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function(){
              a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
              a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
              r.src=n;var u=t.getElementsByTagName(s)[0];
              u.parentNode.insertBefore(r,u);})(window,document,
              'https://sc-static.net/scevent.min.js');
            snaptr('init', '${SNAP_PIXEL_ID}');
            snaptr('track', 'PAGE_VIEW');
          `,
        }}
      />

      {/* No-script fallbacks */}
      <noscript>
        <Image
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}