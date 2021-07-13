import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BatteryAaaComponent } from './components/battery-aaa/battery-aaa.component';
import { BatteryAaComponent } from './components/battery-aa/battery-aa.component';
import { BatteryBlockComponent } from './components/battery-block/battery-block.component';
import { BatteryAllComponent } from './components/battery-all/battery-all.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BatteryAaaComponent,
    BatteryAaComponent,
    BatteryBlockComponent,
    BatteryAllComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
