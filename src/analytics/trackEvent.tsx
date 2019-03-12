// tslint:disable-next-line no-namespace
declare global {
  interface Window {
    ga: any;
  }
}

export default function trackEvent(
  eventCategory: string,
  eventAction: string,
  eventLabel: string,
  eventValue: any,
) {
  if (window.ga) {
    window.ga("send", "event", {
      eventCategory,
      eventAction,
      eventLabel,
      eventValue,
    });
  }

  return false;
}
