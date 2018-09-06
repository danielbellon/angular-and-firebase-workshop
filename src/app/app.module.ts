import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';

const config = {
  apiKey: 'AIzaSyBjaWg8xgzho5V5roxwp3KMFwyVUd4O9ws',
  authDomain: 'angular-and-firebase-53804.firebaseapp.com',
  databaseURL: 'https://angular-and-firebase-53804.firebaseio.com',
  projectId: 'angular-and-firebase-53804',
  storageBucket: 'angular-and-firebase-53804.appspot.com',
  messagingSenderId: '449324116038'
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
