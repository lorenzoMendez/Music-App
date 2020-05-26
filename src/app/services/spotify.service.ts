import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  public getNewReleases() {
    const headers = new HttpHeaders( 
      { "Authorization": "Bearer BQB03L0Q6KLf-MiyxsHYCTMOOdABepVN5T_2hkO_CdjH5uSvnJF-jVlzldBcswgBoR9IaPR2--FgLCIXLx0" }
    );
    
    this.http.get( "https://api.spotify.com/v1/browse/new-releases", { headers } ).subscribe( data => console.log( data ) );
  }
}
