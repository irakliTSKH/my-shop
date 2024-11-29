import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HomeMainComponent } from "./home-main/home-main.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HomeMainComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
