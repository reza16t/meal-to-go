import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const signIn = async (email, password) => {
   try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      return user;
   } catch (error) {
      console.log(error);
   }
};
