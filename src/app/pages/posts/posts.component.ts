import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from '../../model/post/post';
// import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private api:HttpClient ) { }
  content:any;
  ngOnInit(): void {
    this.api.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe( val =>{ 
      this.content = val;
      console.log(this.content);
        this.content.map((post:any)=>{
        this.caratePost(post)
      })
    })  
  }
  arrposts:any=[];
  caratePost(post:Post){
    this.arrposts.push(post);
  }


  @ViewChild('ngForm') ngForm:any 

  addPost(){
    console.log("hello")
    const title=''
    const body=""
    this.api.post('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        // email: email,
        // phone: phone
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
  }
  
}




