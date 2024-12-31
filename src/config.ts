// ここでfirebaseの設定をする.
// firebaseのドキュメントに詳細設定方法がある.
import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    // "process.env."で環境情報をenvファイルから取得する.
    apiKey: process.env.EXPO_PUBLIC_FB_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
    projectId: process.env.EXPO_PUBLIC_FB_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGING_SENDER_ID,
    appId: process.env.EXPO_PUBLIC_FB_APP_ID
  }

//   firebaseの初期化を行う.
const app = initializeApp(firebaseConfig)
// authの初期化を行う.
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
// dbの初期化を行う.
const db = getFirestore(app)
  
export { app, auth, db}
