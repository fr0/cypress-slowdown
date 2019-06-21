import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AppPages} from './app-pages';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {Page1Component} from './page1.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppPages)
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }
  ngDoBoostrap() {}
}
