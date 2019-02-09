import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais2',
  templateUrl: './pais2.component.html',
  styleUrls: ['./pais2.component.css']
})
export class Pais2Component implements OnInit {
  valor1 = null;
  valor2 = null;
  resultado = null;
  opcion1 = false;
  opcion2 = false;
  opcion3 = false;
  opcion4 = false;
  constructor() { }

  ngOnInit() {
  }
  operar() {
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

}
