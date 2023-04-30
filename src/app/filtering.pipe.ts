import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(value: any[], filterString: string, propertyName: string):any[] {
    const output:any =[];
    if(!value || filterString === '' || propertyName === ''){
      return value;
    }
    
    value.forEach((x:any) => {
      if(x[propertyName].trim().toLowerCase().includes(filterString.toLowerCase())){
        output.push(x);
      }
    })
    return output
  }

}
