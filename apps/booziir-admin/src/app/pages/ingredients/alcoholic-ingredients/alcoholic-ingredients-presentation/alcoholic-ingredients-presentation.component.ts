import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { faWineBottle } from '@fortawesome/pro-light-svg-icons';
import { LiquidIngredient, Ingredient } from '@booziir/shared';

@Component({
  selector: 'booziir-alcoholic-ingredients-presentation',
  templateUrl: './alcoholic-ingredients-presentation.component.html',
  styleUrls: ['./alcoholic-ingredients-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlcoholicIngredientsPresentationComponent {
  faWineBottle = faWineBottle;

  @Input() alcoholics: LiquidIngredient[];

  @Output() addAlcoholic: EventEmitter<void> = new EventEmitter();
  @Output() editAlcoholic: EventEmitter<Ingredient> = new EventEmitter();

  constructor() { }

  trackByFn(index: number, item: LiquidIngredient): number {
    return index;
  }
}
