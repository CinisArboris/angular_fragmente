import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexStarComponent } from './main/index-star/index-star.component';
import { TableDinamycComponent } from './component/table-dinamyc/table-dinamyc.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexStarComponent,
    TableDinamycComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
