import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { GroupByPipe } from './shared/groupbypipe.component';
import { DateFormatPipe } from './shared/date.pipe';
import { KeysPipe } from './shared/keys.pipe';



@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  exports: [GroupByPipe,DateFormatPipe,KeysPipe],
  declarations: [ AppComponent , GroupByPipe,DateFormatPipe,KeysPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
