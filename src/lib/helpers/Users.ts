import {
  doc,
  getDoc,
  writeBatch,
  serverTimestamp,
  collection,
  query,
  where,
  getDocs,
  limit,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import type { User } from 'firebase/auth';

async function generateUniqueUsername(email: string): Promise<string> {
  const base = email
    .split('@')[0]
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  let username = base;
  let counter = 1;

  while (true) {
    const q = query(collection(db, 'profiles'), where('username', '==', username), limit(1));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return username;
    }

    username = `${base}${counter}`;
    counter++;
  }
}

export async function createUserDocuments(user: User) {
  const batch = writeBatch(db);

  const userRef = doc(db, 'users', user.uid);
  batch.set(userRef, {
    email: user.email,
    preferences: {
      theme: 'dark',
      language: 'es',
    },
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  const username = await generateUniqueUsername(user.email || 'user');
  const profileRef = doc(db, 'profiles', user.uid);

  batch.set(profileRef, {
    username: username,
    displayName: user.displayName || username,
    bio: '',
    photoURL: user.photoURL || '',
    coverURL: '',
    location: '',
    favoriteTeam: 'ferrari',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  await batch.commit();
}

export async function userDocumentsExist(userId: string): Promise<boolean> {
  const userDoc = await getDoc(doc(db, 'users', userId));
  return userDoc.exists();
}
