import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public releases: any[] = [];

  public load: boolean;

  constructor( private service: SpotifyService ) {
    this.load = true;
    this.service.getNewReleases().subscribe( (data: any) => {
      this.releases = data;
      this.load=false;
    }, ( error ) => {
      console.log( "SUCEDIO UN ERROR" );
      console.log( error );
    } );
  }

  ngOnInit(): void {
  }

}
