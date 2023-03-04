import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GraphComponent } from './graph/graph.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'Main', component: MainComponent},
      {path: 'Graph', component: GraphComponent},
  
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
