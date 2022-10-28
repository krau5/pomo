import { doc, collection, getDoc, setDoc } from 'firebase/firestore';
import { database } from 'constants/firebase';

export type Profile = {
  email: string;
  password: string;
  username: string;
}

class UserService {
  collection;

  constructor() {
    this.collection = collection(database, 'users');
  }

  async createProfile(profile: Profile) {
    const userRef = doc(this.collection, profile.username);
    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
      setDoc(userRef, { profile });
    }
  }
}

export const User = new UserService();
