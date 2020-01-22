import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RaidComponent } from './raid/raid.component';
import { InfoComponent } from './info/info.component';

const config = {
  apiKey: "AIzaSyBetixtHUkgqRyKSG2CNGzCNWkgrVyFUU8",
  authDomain: "ninefourone-guild.firebaseapp.com",
  databaseURL: "https://ninefourone-guild.firebaseio.com",
  projectId: "ninefourone-guild",
  storageBucket: "ninefourone-guild.appspot.com",
  messagingSenderId: "34517235688",
  appId: "1:34517235688:web:2d0f54e686bdf629f2965d",
  measurementId: "G-FX0C6P351E"
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RaidComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(), // firestore
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
