import { Component, OnInit } from '@angular/core';
import { faPlus, faWineBottle, faGlass } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'booziir-ingredients-presentation',
  templateUrl: './ingredients-presentation.component.html',
  styleUrls: ['./ingredients-presentation.component.scss'],
})
export class IngredientsPresentationComponent implements OnInit {
  faPlus = faPlus;
  faWineBottle = faWineBottle;
  faGlass = faGlass;
  
  constructor() { }

  ngOnInit() {}

}
