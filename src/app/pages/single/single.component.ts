import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  constructor(private route: ActivatedRoute , private api:HttpClient) { }
  resource:any;
  id:any;
  BASE_URL = 'https://jsonplaceholder.typicode.com'
  content:any 
  
  ngOnInit(): void {
    // console.log(this.route)
    this.route.url.subscribe(val => {
      this.resource = val[0].path
      this.id = val[1].path
      this.api.get(`${this.BASE_URL}/${this.resource}/${this.id}`)
      .subscribe(val => this.content = val)

    })
    
  }

}
