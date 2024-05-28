import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './app.component.aboutMe';
import { HeroBannerComponent } from './app.component.heroBanner';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
    { path: 'home', component: HeroBannerComponent },
    { path: 'aboutMe', component: AboutMeComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }