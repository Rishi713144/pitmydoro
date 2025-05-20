import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { environment } from '@/environments/environment.dev';

const app = initializeApp(environment.firebase);
let AppCheckInstance = null;

if (typeof window !== 'undefined' && !AppCheckInstance) {
  import('firebase/app-check').then(async (module) => {
    const captchaProvider = environment.recaptchaSiteKey || '';
    AppCheckInstance = module.initializeAppCheck(app, {
      provider: new module.ReCaptchaV3Provider(captchaProvider),
      isTokenAutoRefreshEnabled: true,
    });
  });
}

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
