// ここでfirebaseの設定をする.
// firebaseのドキュメントに詳細設定方法がある.
import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCpfS8b-YLhVMRm8jb5buYOw6oPxHrF7NI',
    authDomain: 'memoapp-71412.firebaseapp.com',
    projectId: 'memoapp-71412',
    storageBucket: 'memoapp-71412.firebasestorage.app',
    messagingSenderId: '786876439465',
    appId: '1:786876439465:web:5684975e23321e792a02b8'
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
