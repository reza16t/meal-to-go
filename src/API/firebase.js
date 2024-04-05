import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
   apiKey: "AIzaSyAY3nl54NoZcpnTa1vmKh49Gf8jliRTJrc",
   authDomain: "meals-to-go-bcfc3.firebaseapp.com",
   projectId: "meals-to-go-bcfc3",
   storageBucket: "meals-to-go-bcfc3.appspot.com",
   messagingSenderId: "994676785530",
   appId: "1:994676785530:web:829d761b87ba2db9d1d6c3",
   measurementId: "G-CDNT048GE4",
};

// Initialize Firebase
// if (!getApps.length) {
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
