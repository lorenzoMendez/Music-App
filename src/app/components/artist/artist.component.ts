import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  public artist: any;
  private id: string;
  public loading: boolean;

  constructor( private service: SpotifyService, private activatedRoute: ActivatedRoute ) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.id = params[ 'id' ];
      
      if( this.id ) {
        this.service.getArtist( params[ 'id' ] ).subscribe( data => {
          this.artist = data;
          console.log( this.artist );
          this.loading = false;
        } );
      }
    } );
  }

}
