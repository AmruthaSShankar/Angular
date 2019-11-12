import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'dateFormat'
})

    export class DateFormatPipe {
    datePipeEn: DatePipe = new DatePipe('en-US');

    constructor(private datePipe: DatePipe) {}

    transformDate(date:Date) {
            return this.datePipe.transform(date, 'yyyy-MM-dd');
          }   

}