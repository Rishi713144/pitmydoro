'use client';

import { useEffect, useState } from 'react';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getApps, initializeApp } from 'firebase/app';
import { environment } from '@/environments/environment.dev';

function AppCheckWrapper({ children }: any) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized) {
      let app;

      if (!getApps().length) {
        app = initializeApp(environment.firebase);
      } else {
        app = getApps()[0];
      }

      initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(environment.recaptchaSiteKey || ''),
        isTokenAutoRefreshEnabled: true,
      });

      setInitialized(true);
    }
  }, [initialized]);

  return <>{children}</>;
}

export default AppCheckWrapper;
