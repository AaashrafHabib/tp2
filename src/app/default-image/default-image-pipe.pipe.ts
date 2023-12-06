import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImagePipe'
})
export class DefaultImagePipe implements PipeTransform {


  transform(value: string, ...args: unknown[]): unknown {
   

    if(!value.trim()){
      return 'achraf.png';
    }
    return value;
  }

}
