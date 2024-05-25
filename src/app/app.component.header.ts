import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'app.component.header.html',
})
export class HeaderComponent {
  showMobileMenu = true;
  toggleMobileMenu(){
    this.showMobileMenu = !this.showMobileMenu;
  }
}