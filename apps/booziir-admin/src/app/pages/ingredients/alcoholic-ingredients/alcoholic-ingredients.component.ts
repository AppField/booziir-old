import { Component, OnInit } from '@angular/core';
import { Ingredient } from '@booziir/shared';

@Component({
  selector: 'booziir-alcoholic-ingredients',
  templateUrl: './alcoholic-ingredients.component.html',
  styleUrls: ['./alcoholic-ingredients.component.css'],
})
export class AlcoholicIngredientsComponent implements OnInit {

  alcoholics: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.alcoholics);
  }

  addAlcoholic(): void {
    console.log('add');
  }

}
