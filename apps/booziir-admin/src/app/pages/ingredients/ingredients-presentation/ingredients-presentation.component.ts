import { Component, ChangeDetectionStrategy } from '@angular/core';
import { faWineBottle, faGlass, faLemon, faLeaf, faSeedling } from '@fortawesome/pro-light-svg-icons';
import { IngredientsAlcoholicService } from '../../../services/ingredients-alcoholic/ingredients-alcoholic.service';
import { IngredientsNonAlcoholicService } from '../../../services/ingredients-non-alcoholic/ingredients-non-alcoholic.service';
import { IngredientsNonLiquidService } from '../../../services/ingredients-non-liquid/ingredients-non-liquid.service';

@Component({
  selector: 'booziir-ingredients-presentation',
  templateUrl: './ingredients-presentation.component.html',
  styleUrls: ['./ingredients-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientsPresentationComponent {
  alcoholIcon = faWineBottle;
  nonAlcoholIcon = faGlass;
  nonLiquidIcon = faSeedling;

  constructor(
    readonly alcoholicsService: IngredientsAlcoholicService,
    readonly nonAlcoholicsService: IngredientsNonAlcoholicService,
    readonly nonLiquidsService: IngredientsNonLiquidService
  ) { }
}
