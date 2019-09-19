import { BaseItem } from './base-item';

export class Ingredient extends BaseItem {
    name: string;
    available: boolean;

    constructor(id: string, name: string, available = true, updatedAt?: Date, createdAt?: Date) {
        super(id, updatedAt, createdAt);

        this.name = name || null;
        this.available = available || null;
    }

}

export type VolumeType = 'l' | 'cl';

export class LiquidIngredient extends Ingredient {

    constructor(id?: string, name?: string, available?: boolean, updatedAt?: Date, createdAt?: Date) {
        super(id, name, available, updatedAt, createdAt)
    }
}

export type Measure = 'g' | 'teaspoon' | 'tablespoon' | 'barspoon' | 'piece' | 'slice' | 'description' | 'at-will';

export class NonLiquidIngredient extends Ingredient {
    measure?: Measure

    constructor(id: string, name: string, available: boolean, measure: Measure, updatedAt: Date, createdAt: Date) {
        super(id, name, available, updatedAt, createdAt)

        this.measure = measure;
    }
}
