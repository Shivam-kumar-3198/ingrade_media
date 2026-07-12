// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKD-baxSQL1egMbP_CCkqjKe_Ekb_kT4U",
  authDomain: "ingrade-media.firebaseapp.com",
  projectId: "ingrade-media",
  storageBucket: "ingrade-media.firebasestorage.app",
  messagingSenderId: "134692634969",
  appId: "1:134692634969:web:f7507a97cbceea4f480c48",
  measurementId: "G-F21HPXEG3M",
};

// Initialize Firebase (reuse existing app instance during Next.js hot reload/SSR)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Safe to call in both the browser and Node (API routes) — no window dependency.
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// The only Google account allowed into /admin. Enforced here for UI gating
// AND independently in firestore.rules (request.auth.token.email) — the
// rules are the real security boundary, this is just for the client UX.
export const ADMIN_EMAIL = "ekpaisafinance@gmail.com";

// Analytics requires the browser environment, so only initialize it client-side
let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
