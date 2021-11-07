import { Component, OnInit ,Input, OnChanges,SimpleChanges} from '@angular/core';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit ,OnChanges {

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges):void{
    this.service.getApiData(this.injectParam).subscribe(array => { 
      ((user:any)=>{
        console.log(user) //We are unable to display a user *********
      })
    });
  }

  @Input('dataDB') 
  injectParam:string='';



}
