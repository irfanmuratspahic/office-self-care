import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterTrackingComponent } from './pages/water-tracking/water-tracking.component';
import { WaterTrackingRoutingModule } from './water-tracking-routing.module';

@NgModule({
  declarations: [
    WaterTrackingComponent
  ],
  imports: [
    CommonModule,
    WaterTrackingRoutingModule
  ]
})
export class WaterTrackingModule { }
