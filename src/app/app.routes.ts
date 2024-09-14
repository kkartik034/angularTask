import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CardsComponent } from './component/cards/cards.component';
import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';

export const routes: Routes = [

    {path:'', component:HomeComponent},
    {path:'search/:seachTerm' , 
    component:HomeComponent},

    {path:'country/:capital', 
    component:CardsComponent},

{path:'region/:region', 
    component:HomeComponent}

];
