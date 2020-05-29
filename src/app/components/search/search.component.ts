import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  public load: boolean;

  public artists: any[] = [];

  constructor( private service: SpotifyService ) { }

  ngOnInit(): void {
  }

  public search( value: string ) {
    this.load = true;
    this.service.searchArtist( value ).subscribe( ( data: any ) => {
      this.artists = data;
      this.load = false;
    } );
  }

}
