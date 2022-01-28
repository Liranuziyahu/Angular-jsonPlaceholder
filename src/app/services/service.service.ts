import { Injectable } from '@angular/core';
import {UsersComponent} from './../pages/users/users.component';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private uersComponent:UsersComponent) { }


}
