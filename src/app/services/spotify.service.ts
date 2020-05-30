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
      "Authorization": "Bearer BQCCYDvyA_AKO26gA5ZDrQLbh4ITUBRUs2UFaFQ6_6_fds0ZplsgzkwiIKFsDrC4ZG2Rcf0g8sI1QrGWBpY" 
    } );

    return this.http.get( url, { headers } );
  }

  public getNewReleases(): Observable<any> {
    return this.getQuery( "browse/new-releases?limit=30" )
      .pipe( map( data => data[ 'albums' ].items ) );
  }

  public searchArtist( name: string ): Observable<any> {
    return this.getQuery( `search?q=${name}&type=artist&limit=15` )
    .pipe( map( data => data[ 'artists' ].items  ) );
  }

  public getArtist( id: string ): Observable<any> {
    return this.getQuery( `artists/${id}` );
  }

  public getTopTracksByArtist( id: string ): Observable<any>{
    return this.getQuery( `artists/${id}/top-tracks?country=ES` )
      .pipe( map( data => data[ 'tracks' ] ) );
  }

}
