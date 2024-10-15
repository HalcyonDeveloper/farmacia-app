import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RecepiSearchComponent } from './recepi-search/recepi-search.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductListComponent,
    RecepiSearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }