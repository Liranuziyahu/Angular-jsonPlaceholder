import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'https://jsonplaceholder.typicode.com/';

  getApiData (res:string){
    return this.http.get(this.BASE_URL+res)
  }
}
