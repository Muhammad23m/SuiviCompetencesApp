import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Output() ontoggleSlideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  screenWidth = 0 ;
 collapsed = false;
 collapsedLogo = true;
 navData =  navbarData;
 
ngOnInit(): void {
  this.screenWidth = window.innerWidth;
}
toggleCollapse(): void {
this.collapsed =!this.collapsed;
this.collapsedLogo = this.collapsed; // Mettre à jour la propriété collapsedLogo
this.ontoggleSlideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth})
}

}