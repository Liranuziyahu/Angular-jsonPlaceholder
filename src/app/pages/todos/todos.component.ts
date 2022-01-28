import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private api:HttpClient) { }
  content:any;
  ngOnInit(): void {
    this.api.get('https://jsonplaceholder.typicode.com/todos')
    .subscribe( val =>{ 
      this.content = val;
      console.log(this.content);
        this.content.map((todos:any)=>{
        console.log(todos)
      })
    })  
  }
}
