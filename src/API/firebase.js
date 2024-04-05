import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";


// Initialize Firebase
// if (!getApps.length) {
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
