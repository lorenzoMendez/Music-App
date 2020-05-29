import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  public getQuery( query: string ): Observable<any> {
    const url: string = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders( { 
      "Authorization": "Bearer BQB9d6JXPIODStGDn2igfQzPEmmbPd_gqF8B-l3lnJPXtsHRUTVCDXt0t9Rx_wCDJ_CPnE-KP-8x2ZGwvss" 
    } );

    return this.http.get( url, { headers } );
  }

  public getNewReleases(): Observable<any> {
    return this.getQuery( "browse/new-releases" )
      .pipe( map( data => data[ 'albums' ].items ) );
  }

  public searchArtist( name: string ): Observable<any> {
    return this.getQuery( `search?q=${name}&type=artist&limit=15` )
    .pipe( map( data => data[ 'artists' ].items  ) );
  }
}
