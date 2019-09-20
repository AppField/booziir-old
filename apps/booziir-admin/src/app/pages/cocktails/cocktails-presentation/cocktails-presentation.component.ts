import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faPlus } from '@fortawesome/pro-light-svg-icons';
import { Cocktail } from '@booziir/shared';

@Component({
  selector: 'booziir-cocktails-presentation',
  templateUrl: './cocktails-presentation.component.html',
  styleUrls: ['./cocktails-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CocktailsPresentationComponent implements OnInit {
  faPlus = faPlus;

  @Input() cocktails: Cocktail[];
  @Output() addCocktail: EventEmitter<void> = new EventEmitter<void>();
  @Output() editCocktail: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

}
