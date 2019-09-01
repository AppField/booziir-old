import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { faLemon } from '@fortawesome/pro-light-svg-icons';
import { NonLiquidIngredient, Measure } from '@booziir/shared';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'booziir-non-liquid-ingredients-presentation',
  templateUrl: './non-liquid-ingredients-presentation.component.html',
  styleUrls: ['./non-liquid-ingredients-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NonLiquidIngredientsPresentationComponent {
  faLemon = faLemon;

  @Input() nonLiquids: NonLiquidIngredient[];
  @Output() addNonLiquid: EventEmitter<void> = new EventEmitter();

  constructor(private translate: TranslateService) { }

  getMeasureName(measure: Measure): string {
    return measure ? this.translate.instant(`MEASURE.${measure.toUpperCase()}`) : '';
  }

}
