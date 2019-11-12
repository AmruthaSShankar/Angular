import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PostJsonService {
    
   constructor(private http: Http){}
   getTeachers(): Observable<any>{
     return this.http.get('./data/teachers.json')
    .map((res:Response) => res.json ())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));  

 }  
}