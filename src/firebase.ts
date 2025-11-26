import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  apiKey: 'AIzaSyBwptsaCYLtLGdKIh1ut84-FZnt8OiToYo',
  authDomain: 'groupby-me.firebaseapp.com',
  databaseURL: 'https://groupby-me-default-rtdb.firebaseio.com/',
  projectId: 'groupby-me',
  storageBucket: 'groupby-me.firebasestorage.app',
  messagingSenderId: '106122999914',
  appId: '1:106122999914:web:a7ad014f757346abb93213',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export const realtimeDb = getDatabase(firebaseApp);

// App Check (protects client-side API usage). Requires VITE_APP_CHECK_SITE_KEY to be set.
let appCheck: ReturnType<typeof initializeAppCheck> | undefined;
if (typeof window !== 'undefined' && !appCheck && import.meta.env.VITE_APP_CHECK_SITE_KEY) {
  appCheck = initializeAppCheck(firebaseApp, {
    provider: new ReCaptchaV3Provider(import.meta.env.VITE_APP_CHECK_SITE_KEY as string),
    isTokenAutoRefreshEnabled: true,
  });
}
