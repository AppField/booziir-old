import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { faGlass } from '@fortawesome/pro-light-svg-icons';
import { Ingredient } from '@booziir/shared';

@Component({
  selector: 'booziir-non-alcoholic-ingredients-presentation',
  templateUrl: './non-alcoholic-ingredients-presentation.component.html',
  styleUrls: ['./non-alcoholic-ingredients-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NonAlcoholicIngredientsPresentationComponent {
  faGlass = faGlass;

  @Input() nonAlcoholics: Ingredient[];
  @Output() addNonAlcoholic: EventEmitter<void> = new EventEmitter();

  constructor() { }

}
