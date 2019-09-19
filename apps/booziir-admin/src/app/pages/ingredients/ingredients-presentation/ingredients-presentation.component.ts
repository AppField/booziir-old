import { Component, ChangeDetectionStrategy } from '@angular/core';
import { faWineBottle, faGlass, faLemon } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'booziir-ingredients-presentation',
  templateUrl: './ingredients-presentation.component.html',
  styleUrls: ['./ingredients-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientsPresentationComponent {
  faWineBottle = faWineBottle;
  faGlass = faGlass;
  faLemon = faLemon;
  
  constructor() { }
}
