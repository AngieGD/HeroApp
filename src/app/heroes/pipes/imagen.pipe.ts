import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/heroe.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(item: Heroe): string{
    
    return `assets/heroes/${item.id}.jpg`;
  }

}
