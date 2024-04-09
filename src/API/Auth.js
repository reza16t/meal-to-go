import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

export const SignIn = async (email, password) => {
   console.log(email, password);

   try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      return user;
   } catch (error) {
      console.log(error);
   }
};
export const SignUp = async (email, password) => {
   console.log(email, password);

   try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      return user;
   } catch (error) {
      console.log(error);
   }
};
