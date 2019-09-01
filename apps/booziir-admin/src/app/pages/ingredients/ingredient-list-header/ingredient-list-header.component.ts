import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faPlus } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'booziir-ingredient-list-header',
  templateUrl: './ingredient-list-header.component.html',
  styleUrls: ['./ingredient-list-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientListHeaderComponent {
  faPlus = faPlus;

  @Input() headerTitle: string;
  @Input() icon: IconDefinition;
  @Output() addIngredient: EventEmitter<void> = new EventEmitter();

  constructor() { }

}
