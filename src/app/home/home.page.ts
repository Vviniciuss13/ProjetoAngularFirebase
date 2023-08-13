import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    this.getData();
  }

  getData(){
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(dados => dados.json())
    .then(dados => { console.log(dados) })
  }

}
