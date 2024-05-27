import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./app.component.header";
import { HeroBannerComponent } from "./app.component.heroBanner";

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroBannerComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent, HeaderComponent, HeroBannerComponent]
})
export class AppModule {}
