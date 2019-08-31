import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { IonicModule } from '@ionic/angular';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from '@booziir/authentication';
import { USER_COLLECTION_NAME, DEFAULT_RETURN_URL } from '@booziir/shared-services';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AuthenticationModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    {
      provide: USER_COLLECTION_NAME,
      useValue: 'barUsers'
    },
    {
      provide: DEFAULT_RETURN_URL,
      useValue: '/tabs/orders'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
