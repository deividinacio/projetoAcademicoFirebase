import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "projacademico-51345", appId: "1:834596079083:web:8a00386c81e0c7dda0c5ae", storageBucket: "projacademico-51345.firebasestorage.app", apiKey: "AIzaSyCjdHiwAI2p0uN3DNtoFM73CB7vhmi_7-Q", authDomain: "projacademico-51345.firebaseapp.com", messagingSenderId: "834596079083" })), provideFirestore(() => getFirestore())]
};
