import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  private getQuery( query: string ): Observable<any> {
    const url: string = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders( { 
      "Authorization": "Bearer BQCLaSnbAPFhbt2rJw_wRyGHOMsQWyguPaT4aDdmUx1r6pWdHhhHEngX6ArAe0lhifILncAh78i83_MP1VE" 
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

  public getArtist( id: string ): Observable<any> {
    return this.getQuery( `artists/${id}` );
  }
}
