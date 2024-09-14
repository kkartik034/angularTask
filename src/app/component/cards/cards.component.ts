import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Countries } from '../../shared/country';
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  country!: Countries;
  
constructor(activatedRoute: ActivatedRoute, countryService:CountryService){
activatedRoute.params.subscribe((params)=>{
  if(params.capital)
    this.country = countryService.getCountryByName(params.capital);
})
}


}
