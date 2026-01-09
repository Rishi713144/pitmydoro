import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from '@/environments/environment.dev';

const app = initializeApp(environment.firebase);
const db = getFirestore(app);

export { app, db };
