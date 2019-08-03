import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgsdkLibModule } from '@nivite/ngsdk';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgsdkLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
