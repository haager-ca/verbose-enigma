import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // Indicates if the navbar is collapsed -> not visible
  public navbarCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }


  public toggleNavbar(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}

console.log("Here is an Error Message Navbar")