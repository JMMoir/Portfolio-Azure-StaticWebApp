import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./app.component.header";
import { HeroBannerComponent } from "./app.component.heroBanner";
import { FooterComponent } from "./app.component.footer";

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroBannerComponent, FooterComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent, HeaderComponent, HeroBannerComponent, FooterComponent]
})
export class AppModule {}
