import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { faPlus, faWineBottle, faGlass, faLemon } from '@fortawesome/pro-light-svg-icons';
import { Ingredient, NonLiquidIngredient, Measure } from '@booziir/shared';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'booziir-ingredients-presentation',
  templateUrl: './ingredients-presentation.component.html',
  styleUrls: ['./ingredients-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientsPresentationComponent implements OnInit {
  faPlus = faPlus;
  faWineBottle = faWineBottle;
  faGlass = faGlass;
  faLemon = faLemon;

  @Input() alcoholics: Ingredient[];
  @Input() nonAlcoholics: Ingredient[];
  @Input() nonLiquids: NonLiquidIngredient[];

  constructor(private translate: TranslateService) { }

  ngOnInit() { }

  getMeasureName(measure: Measure): string {
    return measure ? this.translate.instant(`MEASURE.${measure.toUpperCase()}`) : '';
  }

}
