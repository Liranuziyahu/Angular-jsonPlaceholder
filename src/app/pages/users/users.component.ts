import { Component, OnInit , ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ User } from '../../model/user/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( private api:HttpClient ) { }

  content:any;
  ngOnInit(): void {
      this.api.get('https://jsonplaceholder.typicode.com/users')
      .subscribe( val =>{ 
        this.content = val;
        this.content.map((val:any) => {
          this.cerateUser(val)          
        })
      })
  }


  //Function of Add User

  @ViewChild('ngForm') ngForm:any

  addUser(){
    console.log('was There')
    const fullName = this.ngForm.value.fullName
    const addrass = this.ngForm.value.addrass
    const email = this.ngForm.value.email
    const phone = this.ngForm.value.phone

    this.api.post('https://jsonplaceholder.typicode.com/users',{
      method: 'POST',
      body: JSON.stringify({
        name: fullName,
        addrass: addrass,
        email: email,
        phone: phone
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).subscribe((val)=>{
      console.log(val);
      alert('User Crated')
    })

  }
  //Fills the array with users 
  users:any=[];

  cerateUser (user:User)
  {
      this.users.push(user);
  }
}

