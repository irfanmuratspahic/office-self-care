import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./modules/home/pages/home/home.component";
import { TrainingComponent } from "./modules/training/pages/training/training.component";
import { WatertrackingComponent } from "./modules/waterTracking/pages/watertracking/watertracking.component";


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  { path: 'training', loadChildren: () => import('./modules/training/training.module').then(m => m.TrainingModule) },
  { path: 'watertracking', component: WatertrackingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
