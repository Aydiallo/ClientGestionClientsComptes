import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHideSidebar: Boolean = false;

  onShowHideSidebarChange(showHideSidebar) {
     this.showHideSidebar = showHideSidebar;
  }
}
