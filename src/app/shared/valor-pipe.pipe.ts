import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valorPipe'
})
export class ValorPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}