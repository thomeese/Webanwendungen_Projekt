import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth, initializeAuth,} from '@angular/fire/auth';
import { provideFirestore,getFirestore, enableIndexedDbPersistence} from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { HttpClientModule } from '@angular/common/http';
import {pageAnimation} from './animations/nav-animation';
import {Capacitor} from '@capacitor/core';
import {indexedDBLocalPersistence} from '@firebase/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,IonicModule.forRoot({navAnimation: pageAnimation}), AppRoutingModule, HttpClientModule,
    provideFirebaseApp(() => {
      const app = initializeApp(environment.firebase);
      if (Capacitor.isNativePlatform()) {
        initializeAuth(app, {
          persistence: indexedDBLocalPersistence
        });
      }
      return app;
    }),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
