import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**Angular Material */
import {
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatSelectModule,
  MatOptionModule,
  MatButtonModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
