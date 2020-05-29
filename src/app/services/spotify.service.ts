import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  public getNewReleases(): Observable<any> {
    const headers = new HttpHeaders( 
      { "Authorization": "Bearer BQDqgW6U5cawvYoMVg3SzmKN76d2ID1rhrybPDGlrsQzTkSvNfz0KhVdvwqGiso1n3q0OjUk-k-70vk2jss" }
    );
    
    return this.http.get( "https://api.spotify.com/v1/browse/new-releases", { headers } );
  }
}
