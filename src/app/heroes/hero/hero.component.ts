import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  //funcion para hacer todo en mayusculas
  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  //retorna una interpolacion de variables en un string
  //Nota que el get esta separado del nombre del getter.
  get HeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    this.name = 'Spiderman';
  }
  changeAge(): void{
    this.age = 25;
  }
  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }


}
