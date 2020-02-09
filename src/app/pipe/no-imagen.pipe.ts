import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImagen'
})
export class NoImagenPipe implements PipeTransform {

  transform(value: any ): unknown {
    // lanzamiento.images[0].url
    if ( value.length === 0) {
      return 'assets/img/noimage.png';
    } else {
      return value[0].url;
    }
  }

}
