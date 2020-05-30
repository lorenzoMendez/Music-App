import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'linksafe'
})
export class LinksafePipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) {}

  transform(url: string, id: string ): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( `${url}${id}` );
  }

}
