import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  
  estilo: string = 'disable'; // chama nossa classe CSS

  constructor() { }

  ngOnInit(): void {
  }

  trocarCor() {
    if (this.estilo === 'disable') {
      this.estilo = 'enable';
    } else {
      this.estilo = 'disable';
    }
  }

}
