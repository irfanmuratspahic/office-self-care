import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.modules';
import { AppComponent } from './app.component';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule } from '@angular/material/slider';
import {HomeModule} from "./modules/home/home.module";
import {TrainingModule} from "./modules/training/training.module";
import {WaterTrackingModule} from "./modules/water-tracking/water-tracking.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HomeModule,
    TrainingModule,
    WaterTrackingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
