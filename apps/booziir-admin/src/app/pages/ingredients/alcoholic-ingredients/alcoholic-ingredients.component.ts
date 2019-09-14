import { Component, OnInit } from '@angular/core';
import { LiquidIngredient } from '@booziir/shared';
import { IngredientsAlcoholicService } from '../../../services/ingredients-alcoholic/ingredients-alcoholic.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'booziir-alcoholic-ingredients',
  templateUrl: './alcoholic-ingredients.component.html',
  styleUrls: ['./alcoholic-ingredients.component.css'],
})
export class AlcoholicIngredientsComponent implements OnInit {

  alcoholics$: Observable<LiquidIngredient[]>;

  constructor(
    private readonly alcoholicsService: IngredientsAlcoholicService
  ) {
    this.alcoholics$ = this.alcoholicsService.items$;
  }

  ngOnInit() {

  }

  addAlcoholic(alcoholic: LiquidIngredient): void {
    this.alcoholicsService.addItem(alcoholic);
  }

}
