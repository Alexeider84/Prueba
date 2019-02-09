import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais1',
  templateUrl: './pais1.component.html',
  styleUrls: ['./pais1.component.css']
})
export class Pais1Component implements OnInit {
  slider1 = 0;
  slider2 = 0;
  slider3 = 0;
  suma = 0;

  constructor() { }

  cambiar() {
    this.suma = this.slider1 + this.slider2 + this.slider3;
  }


  ngOnInit() {
  }

}
