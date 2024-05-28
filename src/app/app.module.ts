import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./app.component.header";
import { HeroBannerComponent } from "./app.component.heroBanner";
import { FooterComponent } from "./app.component.footer";
import { AboutMeComponent } from "./app.component.aboutMe";

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroBannerComponent, FooterComponent, AboutMeComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
