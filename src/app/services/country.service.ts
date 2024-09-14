import { Injectable } from '@angular/core';
import { Countries } from '../shared/country';
import { sample_countries, sample_region } from '../../data';
import { Region } from '../shared/region';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getAll():Countries[]{
    return sample_countries;
  }
getAllCountryBySearchTerm(searchTerm:string){
  return this.getAll().filter(countrys=> countrys.region.toLowerCase().includes(searchTerm.toLowerCase()))
}

getCountryByName(countryName:string):Countries{
return this.getAll().find(country => country.name == countryName) ?? new Countries();

}

getAllRegion():Region[]{
  return sample_region;
}

getAllCountrysByRegion(region:string):Countries[]{
return region === "All"?
this.getAll():

this.getAll().filter(country => country.region?.includes(region));

}

}
