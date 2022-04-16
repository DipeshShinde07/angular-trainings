import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: number, separator: string): string {
    return `${value} ${separator} ${value * value}`;
  }

}
