import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'Search'
})
@Injectable()
export class Search implements PipeTransform {
    transform(items: any[], fname: any): any {
    if (fname != undefined) {
      // filter items array, items which match and return true will be kept, false will be filtered out
      return items.filter(item => item.fname.toLowerCase().indexOf(fname.toLowerCase()) !== -1);
    }
    return items;
  }
}