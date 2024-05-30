import { Component, OnInit, Renderer2, ElementRef, ViewChild } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: 'app.component.header.html',
})
export class HeaderComponent implements OnInit {

  hideMobileMenu = true;
  @ViewChild('menuButton') toggleButton: ElementRef;
  @ViewChild('mobileMenu') menu: ElementRef;

  constructor(private router: Router, private renderer: Renderer2) {
    this.renderer.listen('window', 'click',(e:Event)=>{
      /**
       * Only run when toggleButton is not clicked
       * If we don't check this, all clicks (even on the toggle button) gets into this
       * section which in the result we might never see the menu open!
       * And the menu itself is checked here, and it's where we check just outside of
       * the menu and button the condition abbove must close the menu
       */
     if(e.target !== this.toggleButton.nativeElement && e.target!==this.menu.nativeElement){
         this.hideMobileMenu = true;
     }
 });
   }
  ngOnInit(): void {
  }
  toggleMobileMenu(){
    this.hideMobileMenu = !this.hideMobileMenu;
  }

  navigateToAboutMe(){
    this.router.navigateByUrl('/aboutMe');
  }
}