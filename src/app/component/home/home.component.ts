import { Component } from '@angular/core';
import { Countries } from '../../shared/country';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import {NgFor} from '@angular/common';
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,RouterLink,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
countrys:Countries[]=[];

constructor(activatedRoute:ActivatedRoute, private countryService:CountryService,private router:Router )  {

activatedRoute.params.subscribe((params)=>{
  if(params.searchTerm)
    this.countrys = this.countryService.getAllCountryBySearchTerm(params.searchTerm);
   else if (params.region)
    this.countrys = this.countryService.getAllCountrysByRegion(params.region);
  
  else
  this.countrys = countryService.getAll();
})
  

   
   
  }

  // navigateToCard(){
  //   this.router.navigateByUrl("cards")
  // }



}
