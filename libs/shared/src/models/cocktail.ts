import { BaseItem } from './base-item';
import { LiquidIngredient, NonLiquidIngredient } from './ingredient';
import { CocktailIcons } from '../utils';

export class Cocktail extends BaseItem {
    name: string;
    icon: CocktailIcons;
    alcoholics: LiquidIngredient[];
    nonAlcoholics: LiquidIngredient[];
    nonLiquids: NonLiquidIngredient[];

    constructor(
        id: string, name: string, icon: CocktailIcons,
        alcoholics: LiquidIngredient[], nonAlcoholics: LiquidIngredient[], nonLiquid: NonLiquidIngredient[],
        createdAt?: Date, updatedAt?: Date) {
        super(id, createdAt, updatedAt);

        this.name = name;
        this.icon = icon;
        this.alcoholics = alcoholics;
        this.nonAlcoholics = nonAlcoholics;
        this.nonLiquids = nonLiquid;
    }
}