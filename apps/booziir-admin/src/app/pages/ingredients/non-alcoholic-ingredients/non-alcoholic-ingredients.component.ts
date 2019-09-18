import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '@booziir/shared';
import { IngredientsNonAlcoholicService } from '../../../services/ingredients-non-alcoholic/ingredients-non-alcoholic.service';

@Component({
  selector: 'booziir-non-alcoholic-ingredients',
  templateUrl: './non-alcoholic-ingredients.component.html',
  styleUrls: ['./non-alcoholic-ingredients.component.css'],
})
export class NonAlcoholicIngredientsComponent implements OnInit {

  nonAlcoholics$: Observable<Ingredient[]>;

  constructor(
    private readonly nonAlcoholicsService: IngredientsNonAlcoholicService    
  ) {
    this.nonAlcoholics$ = nonAlcoholicsService.items$;
  }

  ngOnInit() { }

  async addNonAlcoholic(): Promise<void> {
   
  }
}
