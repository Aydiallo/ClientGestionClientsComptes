import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  showSidebar: Boolean;

  @Output()
  showSidebarChange: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit() {
  }

  afficherSideBar() {
    this.showSidebar = !this.showSidebar;
    this.showSidebarChange.emit(this.showSidebar);
  }

}
