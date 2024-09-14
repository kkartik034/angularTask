import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./component/home/home.component";
// import { CommonModule } from '@angular/common';
import {NgFor, NgIf} from '@angular/common';
import { Countries } from './shared/country';
import { Region } from './shared/region';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,NgFor,RouterLink,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularTask';
  region?: Region[];
  constructor(countryService:CountryService){
this.region = countryService.getAllRegion();
  }
}
