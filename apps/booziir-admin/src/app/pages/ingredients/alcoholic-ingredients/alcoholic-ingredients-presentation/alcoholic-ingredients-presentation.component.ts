import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { faWineBottle } from '@fortawesome/pro-light-svg-icons';
import { Ingredient } from '@booziir/shared';

@Component({
  selector: 'booziir-alcoholic-ingredients-presentation',
  templateUrl: './alcoholic-ingredients-presentation.component.html',
  styleUrls: ['./alcoholic-ingredients-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlcoholicIngredientsPresentationComponent {
  faWineBottle = faWineBottle;

  @Input() alcoholics: Ingredient[];
  @Output() addAlcoholic: EventEmitter<void> = new EventEmitter();

  constructor() { }

}
