import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dropdown',
    // pure:false
})
export class PipePipe implements PipeTransform {
    transform(value: any, f: any): any {
      //  console.log(value, f);
        if (!f) {
            return value;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return value.filter(item => item.title.indexOf(f) !== -1);
    }
}
