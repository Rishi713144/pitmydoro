import { useEffect } from 'react';
import { useCookieConsentStore } from '@/stores/CookieConsent.store';
import { useBottomBannerStore } from '@/stores/Banner.store';

type ConsentSettings = {
  necessary: true;
  analytics: boolean;
  ads: boolean;
};

export function useCookieConsent() {
  const consent = useCookieConsentStore((state) => state.consent);
  const setConsent = useCookieConsentStore((state) => state.setConsent);
  const showBanner = useBottomBannerStore((state) => state.showBanner);

  useEffect(() => {
    if (consent === null) {
      setTimeout(() => {
        showBanner({
          title: '¿Te gustaría aceptar nuestras cookies? 🍪',
          description:
            'Este sitio utiliza cookies esenciales para garantizar su correcto funcionamiento y mejorar tu experiencia de navegación.',
          link: '/cookies',
          smallText:
            'Al hacer clic en "Aceptar", aceptas el uso de cookies. Puedes aceptar o rechazar su uso en cualquier momento.',
          declineText: 'Solo necesarias',
          acceptText: 'Aceptar',
          image: '/images/cookie.png',
          onAccept: () => {
            const settings = {
              necessary: true,
              analytics: true,
              ads: true,
            };

            if (Notification && Notification.permission !== 'granted')
              Notification.requestPermission();

            setConsent(settings as ConsentSettings);
            applyConsent(settings as ConsentSettings);
          },
          onDecline: () => {
            const settings = {
              necessary: true,
              analytics: false,
              ads: false,
            };
            setConsent(settings as ConsentSettings);
            applyConsent(settings as ConsentSettings);
          },
        });
      }, 2500);
    }

    if (consent !== null) {
      applyConsent(consent);
    }
  }, [consent, setConsent, showBanner]);
}

function applyConsent(consent: { necessary: true; analytics: boolean; ads: boolean }) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      ad_storage: consent.ads ? 'granted' : 'denied',
      analytics_storage: consent.analytics ? 'granted' : 'denied',
    });
  }
}
