import { ValidatorsService } from './../../services/validators.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;

  states = [
    {nome:'Sao Paulo', sigla:'SP'},
    {nome:'Rio de Janeiro', sigla:'RJ'},
    {nome:'Parana', sigla:'PR'},
    {nome:'Minas Gerais', sigla:'MG'},
    {nome:'Para', sigla:'PA'}
  ]

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private validatorsService: ValidatorsService) { }

  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    const fb = this.formBuilder;
    this.myForm = fb.group({
      informacoes: fb.group({
        nome: [null, [Validators.required, Validators.minLength(4), this.validatorsService.nameValidation], [this.validatorsService.userValidation.bind(this.validatorsService)]],
        idade: [null],
        email: [null, [Validators.required, Validators.email]],
        confirmaEmail: [null],
        empregado: [null, Validators.pattern('true')],
        sexo: ['M']
      }),
      endereco: fb.group({
        cep: [null],
        logradouro: [null],
        complemento: [null],
        bairro: [null],
        localidade: [null],
        uf: [null]
      })
    });

    this.myForm.get('informacoes.nome').valueChanges.subscribe(
      value => console.log(`Nome Alterado ${value}`)
    )
  }

  getAddress() {
    this.http.get(`http://viacep.com.br/ws/${this.myForm.get('endereco.cep').value}/json`)
      .subscribe(
        endereco => this.myForm.get('endereco').patchValue(endereco)
      )
  }

  myState() {
    console.log('Entrou em myState()');
    const myState = {nome:'Rio de Janeiro', sigla:'RJ'};
    this.myForm.get('endereco.uf').setValue(myState);
  }

  compareStates(obj1, obj2) {
    if (obj1 && obj2) {
      return obj1.sigla === obj2.sigla;
    }
    return false;
  }

  onSubmit() {
    console.log(this.myForm);
  }

}
