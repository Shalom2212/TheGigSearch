import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {initializeAuth} from 'firebase/auth';
import {getPersistentCacheIndexManager} from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCpLa8kq7oDyg62WvXprw1s84Sp6DaB11Q',
  authDomain: 'thegigsearchauth.firebaseapp.com',
  projectId: 'thegigsearchauth',
  storageBucket: 'thegigsearchauth.appspot.com',
  messagingSenderId: '290780472967',
  appId: '1:290780472967:web:1df01d3635a4441d70ba22',
  measurementId: 'G-WYHX398G1Z',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getPersistentCacheIndexManager(AsyncStorage),
});
