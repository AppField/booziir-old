import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-light-svg-icons';
import { Ingredient } from '@booziir/shared';

@Component({
  selector: 'booziir-ingredients-list-presentation',
  templateUrl: './ingredients-list-presentation.component.html',
  styleUrls: ['./ingredients-list-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientsListPresentationComponent {

  @Input() title: string;
  @Input() icon: IconDefinition;
  @Input() ingredients: Ingredient[];

  @Output() addIngredient: EventEmitter<void> = new EventEmitter();
  @Output() editIngredients: EventEmitter<Ingredient> = new EventEmitter();

  constructor() { }

  trackByFn(index: number, item: Ingredient): number {
    return index;
  }
}
