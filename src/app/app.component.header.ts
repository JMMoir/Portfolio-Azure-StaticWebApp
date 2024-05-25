import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'app.component.header.html',
    animations: [
      trigger("openClose", [
        // ...
        state(
          "open",
          style({
            opacity: 1,
            transform: "scale(1, 1)"
          })
        ),
        state(
          "closed",
          style({
            opacity: 0,
            transform: "scale(0.95, 0.95)"
          })
        ),
        transition("open => closed", [animate("100ms ease-in")]),
        transition("closed => open", [animate("200ms ease-out")])
      ])
    ]
})
export class HeaderComponent {
  showMobileMenu = false;
  get openCloseTrigger() {
    return this.showMobileMenu ? "open" : "closed";
  }
  toggleMobileMenu(){
    this.showMobileMenu = !this.showMobileMenu;
  }
}