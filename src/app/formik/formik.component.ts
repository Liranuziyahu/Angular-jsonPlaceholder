import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formik',
  templateUrl: './formik.component.html',
  styleUrls: ['./formik.component.css']
})
export class FormikComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
  @ViewChild('theForm') form:any

  doSomting() {
    console.log(this.form)
  }
}
