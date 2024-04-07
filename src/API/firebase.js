import {
   initializeAuth,
   getReactNativePersistence,
   getAuth,
   onAuthStateChanged,
} from "firebase/auth";
import { getApp, getApps, initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";


// Initialize Firebase
// if (!getApps.length && ) {
let app, auth;

if (!getApps().length) {
   try {
      app = initializeApp(firebaseConfig);
      auth = initializeAuth(app);
   } catch (error) {
      console.log("Error initializing app: " + error);
   }
} else {
   app = getApp();
   auth = getAuth(app);
}
export { auth };
