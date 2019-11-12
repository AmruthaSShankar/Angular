import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostJsonService } from './service/post.json.service';



@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
   providers: [PostJsonService] // depenency injection
})

export class AppComponent {
   title = 'app works!';

   data: Observable<Array<any>>;
   dt: Observable<Array<any>>;

    constructor(private service: PostJsonService){
    this.data = service.getTeachers();
    
    

    
    
    // console.log("AppComponent.data:" + this.data);
}


}
