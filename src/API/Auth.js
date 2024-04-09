import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { ErrorHandler } from "../utils/ErrorHandler";

export const SignIn = async (email, password) => {
   try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      return user;
   } catch (error) {
      const err = ErrorHandler(error);
      throw new Error(err);
   }
};
export const SignUp = async (email, password) => {
   try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      return user;
   } catch (error) {
      const err = ErrorHandler(error);
      throw new Error(err);
   }
};
