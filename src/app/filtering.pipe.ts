import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtering'
})

//Creating a filtering pipe

export class FilteringPipe implements PipeTransform {
  //*To filter some value
  //(value:any[]) value will have the passed array - array of products
  //The filterString will help filter by name
  //propertyName will let us decide if we filter by title
  transform(value: any[], filterString: string, propertyName: string):any[] {

    //the const output will hold our value that will be returned
    const output:any =[];

    //if this condition if null the same result should be returned
    if(!value || filterString === '' || propertyName === ''){
      return value; //return the vaue as it is
    }
    //if there is input forEach will loop inside our array and check for the value that's passed
    value.forEach((x:any) => {
      //trim the input to accept both lower and uppercase input
      if(x[propertyName].trim().toLowerCase().includes(filterString.toLowerCase())){
        //this will be returned insde our output array (x -> object)
        output.push(x);
      }
    })
    //
    return output
  }

}

//This filtering pipe will then be used in our array (in our products Template)
