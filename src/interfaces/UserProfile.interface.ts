import { Timestamp } from 'firebase/firestore';

export interface UserProfile {
  username: string;
  displayName: string;
  bio: string;
  photoURL: string;
  coverURL: string;
  location: string;
  favoriteTeam: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
