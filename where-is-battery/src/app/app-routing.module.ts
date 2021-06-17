import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatteryAaComponent } from './components/battery-aa/battery-aa.component';
import { BatteryAaaComponent } from './components/battery-aaa/battery-aaa.component';
import { BatteryAllComponent } from './components/battery-all/battery-all.component';
import { BatteryBlockComponent } from './components/battery-block/battery-block.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "battery-aa",
    component: BatteryAaComponent
  },
  {
    path: "battery-aaa",
    component: BatteryAaaComponent
  },
  {
    path: "battery-block",
    component: BatteryBlockComponent
  },
  {
    path: "battery-all",
    component: BatteryAllComponent
  },
  {
    path: "**",
    redirectTo: "/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
