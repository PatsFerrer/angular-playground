import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos: string[] = [];
  menuType: string = 'diretor'; // o meu switch case depende disso, como 'diretor' nao existe, ele cai no 'ngSwitchDefault'

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte"
    ]
  }

  adicionar() {
    this.produtos.push("Patricia"); /* adiciona */
    // this.produtos.pop(); /* remove */
  }

  remover(index: number){
    this.produtos.splice(index, 1); /* (quem remover, quantos remover) */
  }

  ngOnInit(): void {
  }

}
