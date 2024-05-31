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
  @ViewChild('menuIcon') icon: ElementRef;
  @ViewChild('menuDiv') menuDiv: ElementRef;

  constructor(private router: Router, private renderer: Renderer2) {
    this.renderer.listen('window', 'click',(e:Event)=>{

     if(e.target !== this.toggleButton.nativeElement 
        && e.target !== this.menu.nativeElement
        && e.target !== this.icon.nativeElement
        && e.target !== this.menuDiv.nativeElement){
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