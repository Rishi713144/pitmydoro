'use client';
import { useEffect } from 'react';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getApps, initializeApp } from 'firebase/app';
import { environment } from '@/environments/environment.dev';

function AppCheckWrapper({ children }: any) {
  useEffect(() => {
    if (!getApps().length) {
      const app = initializeApp(environment.firebase);
      initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(environment.recaptchaSiteKey || ''),
        isTokenAutoRefreshEnabled: true,
      });
    }
  }, []);

  return <>{children}</>;
}

export default AppCheckWrapper;
