import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DateFormatPipe } from './date.pipe';

@Pipe({name: 'groupBy'})

export class GroupByPipe implements PipeTransform {

  transform(value: Array<any>, field: string = 'date'): Array<any> {   
    let obj:Array<any>;      
    var datePipeEn = new DatePipe('en-US');
    let latest_date = new DateFormatPipe(datePipeEn);   

       if(value == null)
       return;

       const groupedObj = value.reduce((prev, cur,i)=> {
         if(i==0){  
           // array start happens here      
           // Created another proerty "endtime" to display end session time
           cur=(Object.assign({},cur,{"endtime": new Date((new Date(cur[field]).getTime() + 3600000)).toLocaleString()}));        
             prev[latest_date.transformDate(cur[field])]= [cur];
         }
       else  if(!prev[latest_date.transformDate(cur[field])]) {  
             cur=(Object.assign({},cur,{"endtime": new Date((new Date(cur[field]).getTime() + 3600000)).toLocaleString()}));
             prev[latest_date.transformDate(cur[field])] = [cur];      
      } else {
        // push the object to array with time field
        cur=(Object.assign({},cur,{"endtime": new Date((new Date(cur[field]).getTime() + 3600000)).toLocaleString()}));
        prev[latest_date.transformDate(cur[field])].push(cur); 
      
       }
      return prev;
    }, {});
    
     return groupedObj;    
  }
}
