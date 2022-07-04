import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CalculadoraService } from '../calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  constructor(public fb: FormBuilder
    , private service: CalculadoraService) { }

  ngOnInit(): void {
    this.criarForm();
  }

  mensagem?: string = "";

  form: FormGroup = new FormGroup({
    primeiro: new FormControl(''),
    segundo: new FormControl(''),
    operacao: new FormControl('')
  })

  criarForm() {
    this.form = this.fb.group({
      primeiro: ['', Validators.required],
      segundo: ['', Validators.required],
      operacao: ['', Validators.required]
    })
  }

  result() {
    let tipo = this.form.getRawValue().operacao;
    let primeiro = this.form.getRawValue().primeiro;
    let segundo = this.form.getRawValue().segundo;
    this.service.getOperacao(tipo, primeiro, segundo).subscribe((response: any) => {
      if (response) {
        this.mensagem = response.resultado ? response.resultado : response.erro;
      }
    }, (error) => {
      this.mensagem = "Erro na operação!"
    })
  }



}
