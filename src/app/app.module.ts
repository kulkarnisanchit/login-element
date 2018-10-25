import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [],
})
export class AppModule {
  constructor( private injector: Injector ) { }
  ngDoBootstrap() {
    const login = createCustomElement(LoginComponent, { injector: this.injector });
    customElements.define('login-element', login);
  }
}
