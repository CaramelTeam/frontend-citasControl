import { Component } from '@angular/core';
import { LayoutPrincipalComponent } from '../layout-principal.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent {
      constructor(private slideComp: LayoutPrincipalComponent){}

      showSlideBar(){
        this.slideComp.sidebarVisible = this.slideComp.sidebarVisible ? false : true;
      }
}
