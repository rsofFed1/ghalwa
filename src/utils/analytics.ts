// type EventParams = Record<string, string | number | boolean>;

// // Safely access window objects
// const isBrowser = typeof window !== 'undefined';

// // Facebook Pixel events
// export const fbEvent = (eventName: string, params?: EventParams) => {
//   if (isBrowser && window.fbq) {
//     window.fbq('track', eventName, params);
//   }
// };

// // Google Analytics events
// export const gaEvent = (eventName: string, params?: EventParams) => {
//   if (isBrowser && window.gtag) {
//     window.gtag('event', eventName, params);
//   }
// };

// // TikTok Pixel events
// export const ttEvent = (eventName: string, params?: EventParams) => {
//   if (isBrowser && window.ttq) {
//     window.ttq.track(eventName, params);
//   }
// };

// // Snapchat Pixel events
// export const snapEvent = (eventName: string, params?: EventParams) => {
//   if (isBrowser && window.snaptr) {
//     window.snaptr('track', eventName, params);
//   }
// };

// // Combined tracker for all platforms
// export const trackEvent = (eventName: string, params?: EventParams) => {
//   fbEvent(eventName, params);
//   gaEvent(eventName, params);
//   ttEvent(eventName, params);
//   snapEvent(eventName, params);
// };

// // Define types for the global window object
// declare global {
//   interface Window {
//     fbq?: (event: string, eventName: string, params?: any) => void;
//     gtag?: (command: string, eventName: string, params?: any) => void;
//     ttq?: {
//       track: (eventName: string, params?: any) => void;
//     };
//     snaptr?: (command: string, eventName: string, params?: any) => void;
//     dataLayer?: any[];
//   }
// }