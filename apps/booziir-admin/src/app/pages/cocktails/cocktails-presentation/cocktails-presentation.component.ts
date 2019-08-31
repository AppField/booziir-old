import { Component, OnInit } from '@angular/core';
import { faPlus, faPen, faGlassCitrus, faCocktail, faGlassChampagne, faGlassMartini, faGlassWhiskeyRocks, faWineGlass } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'booziir-cocktails-presentation',
  templateUrl: './cocktails-presentation.component.html',
  styleUrls: ['./cocktails-presentation.component.scss'],
})
export class CocktailsPresentationComponent implements OnInit {
  faPlus = faPlus;
  faPen = faPen;
  faGlassCitrus = faGlassCitrus;
  faCocktail = faCocktail;
  faGlassChampagne = faGlassChampagne;
  faGlassMartini = faGlassMartini;
  faGlassWhiskeyRocks = faGlassWhiskeyRocks;
  faWineGlass = faWineGlass;

  constructor() { }

  ngOnInit() { }

}
