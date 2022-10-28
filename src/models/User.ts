import { doc, collection, getDoc, setDoc } from 'firebase/firestore';
import { database } from 'constants/firebase';
import bcrypt from 'bcryptjs';

export type Profile = {
  email: string;
  password: string;
  username: string;
};

class UserService {
  collection;

  constructor() {
    this.collection = collection(database, 'users');
  }

  async createProfile({ password: plainPassword, ...profile }: Profile) {
    const userRef = doc(this.collection, profile.username);
    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
      bcrypt.genSalt(10, (_, salt) => {
        bcrypt.hash(plainPassword, salt, (_, hash) => {
          setDoc(userRef, { ...profile, password: hash });
        });
      });
    }
  }
}

export const User = new UserService();
