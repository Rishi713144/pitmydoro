import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { environment } from '@/environments/environment.dev';

if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
  window.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

const app = !getApps().length ? initializeApp(environment.firebase) : getApp();
let AppCheckInstance = null;

if (typeof window !== 'undefined' && !AppCheckInstance) {
  import('firebase/app-check').then(async (firebaseAppCheck) => {
    const captachp = environment.recaptchaSiteKey as string;
    AppCheckInstance = firebaseAppCheck.initializeAppCheck(app, {
      provider: new firebaseAppCheck.ReCaptchaV3Provider(captachp),
      isTokenAutoRefreshEnabled: true,
    });
  });
}
const db = getFirestore();
const auth = getAuth();

export { db, auth, app };
