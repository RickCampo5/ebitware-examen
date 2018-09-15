import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ImcCalculatorComponent } from './imc-calculator/imc-calculator.component';
import {router} from './routes'

@NgModule({
  declarations: [
    AppComponent,
    ImcCalculatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
