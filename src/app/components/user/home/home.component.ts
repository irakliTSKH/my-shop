import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HomeMainComponent } from "./home-main/home-main.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HomeMainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
