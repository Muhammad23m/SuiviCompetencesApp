import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() collapsed = false ;
  @Input() screenWidth = 0;
  getHeaderClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'header-trimmed';
    } else if(this.collapsed && this.screenWidth<=768 && this.screenWidth > 0){
      styleClass = 'header-md-screen'
    }
    return styleClass;
  }
}
