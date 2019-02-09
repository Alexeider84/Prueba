import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSliderModule, MatSlideToggleModule, MatTabsModule
} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Pais2Component } from './pais2/pais2.component';
import { Pais1Component } from './pais1/pais1.component';
import { Pais3Component } from './pais3/pais3.component';
import { JuegoComponent } from './juego/juego.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import {FormsModule} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    Pais2Component,
    Pais1Component,
    Pais3Component,
    JuegoComponent,
    CalculadoraComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTabsModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
