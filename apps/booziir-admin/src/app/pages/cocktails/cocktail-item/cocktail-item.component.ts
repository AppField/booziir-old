import { Component, OnInit, Input } from '@angular/core';
import { Cocktail, getCocktailIcon, CocktailIcons } from '@booziir/shared';
import { IconDefinition } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'booziir-cocktail-item',
  templateUrl: './cocktail-item.component.html',
  styleUrls: ['./cocktail-item.component.scss'],
})
export class CocktailItemComponent implements OnInit {
  iconSize = "2x";

  @Input() cocktail: Cocktail;

  constructor() { }

  ngOnInit() { }

  getIcon(icon: CocktailIcons): IconDefinition {
    return getCocktailIcon(icon);
  }
}
