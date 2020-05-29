import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';


const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'artista/:id', component: ArtistComponent },
  { path: 'busqueda', component: SearchComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot( ROUTES /*{ useHash: true } */ ) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
