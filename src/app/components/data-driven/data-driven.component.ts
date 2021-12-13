import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    const fb = this.formBuilder;
    this.myForm = fb.group({
      informacoes: fb.group({
        nome: [null],
        idade: [null],
        email: [null],
        confirmaEmail: [null],
      }),
      endereco: fb.group({
        cep: [null],
        logradouro: [null],
        complemento: [null],
        bairro: [null],
        localidade: [null],
        uf: [null]
      })
    })

  }

}
