import { Component, EventEmitter, Output } from '@angular/core';
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
export class SideBarComponent {
  @Output() ontoggleSlideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  screenWidth = 0 ;
 collapsed = true;
 navData =  navbarData;

toggleCollapse(): void {
this.collapsed =!this.collapsed;
this.ontoggleSlideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth})
}

}