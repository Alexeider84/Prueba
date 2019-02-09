import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  valor1 = null;
  valor2 = null;
 resultado = null;
  operacionSeleccionada: string = 'suma';
  opcion1 = false;
  opcion2 = false;
  opcion3 = false;
  opcion4 = false;
  tipoOperaciones = [
    'suma',
    'resta',
    'multiplicacion',
    'division',
  ];
  operaciones = [
    {valor: 'suma', muestraValor: 'Sumar'},
    {valor: 'resta', muestraValor: 'Restar'},
    {valor: 'multiplicacion', muestraValor: 'Multiplicar'},
    {valor: 'division', muestraValor: 'Dividir'}
  ];
  seleccionada: string = this.operaciones[0].valor;
  constructor() { }

  ngOnInit() {
  }

  operar() {
    switch (this.operacionSeleccionada) {
      case 'suma' : this.resultado = this.valor1 + this.valor2;
        break;
      case 'resta' : this.resultado = this.valor1 - this.valor2;
        break;
      case 'multiplicacion' : this.resultado = this.valor1 * this.valor2;
        break;
      case 'division' : this.resultado = this.valor1 / this.valor2;
        break;
    }
  }
  operar1() {
    this.resultado = '';
    if (this.opcion1) {
      const ope = this.valor1 + this.valor2;
      this.resultado += `La suma es ${ope} `;
    }
    if (this.opcion2) {
      const ope = this.valor1 - this.valor2;
      this.resultado += `La resta es ${ope} `;
    }
    if (this.opcion3) {
      const ope = this.valor1 * this.valor2;
      this.resultado += `El producto es ${ope} `;
    }
    if (this.opcion4) {
      const ope = this.valor1 / this.valor2;
      this.resultado += `La division es ${ope} `;
    }
  }
  operarselect() {
    switch (this.seleccionada) {
      case 'suma' : this.resultado = this.valor1 + this.valor2;
        break;
      case 'resta' : this.resultado = this.valor1 - this.valor2;
        break;
      case 'multiplicacion' : this.resultado = this.valor1 * this.valor2;
        break;
      case 'division' : this.resultado = this.valor1 / this.valor2;
        break;
    }
  }

}
