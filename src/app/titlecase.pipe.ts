import { Pipe, PipeTransform } from '@angular/core';
// creating a class decorated with pipe
@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {
  // ? is an optional parameter,
  transform(value: any, args?: any): any {
    return value.charAt(0).toUpperCase()
         + value.substr(1).toLowerCase();
  }
}
