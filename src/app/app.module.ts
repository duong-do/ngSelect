import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModules, MDBSpinningPreloader } from 'ng-mdb-pro';
import { AppService } from './app.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModules.forRoot(),
  ],
  providers: [
    AppService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
