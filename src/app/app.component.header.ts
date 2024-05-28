import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: 'app.component.header.html',
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  showMobileMenu = true;
  toggleMobileMenu(){
    this.showMobileMenu = !this.showMobileMenu;
  }

  navigateToAboutMe(){
    this.router.navigateByUrl('/aboutMe');
  }
}