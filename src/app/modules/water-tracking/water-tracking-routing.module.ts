import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterTrackingComponent } from './pages/water-tracking/water-tracking.component';

const routes: Routes = [
  { path: '', component: WaterTrackingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaterTrackingRoutingModule { }
