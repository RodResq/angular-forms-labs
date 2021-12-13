import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    })

  }

}
