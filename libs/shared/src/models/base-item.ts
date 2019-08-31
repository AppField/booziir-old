import { Timestamps } from './timestamps';

export class BaseItem extends Timestamps {
    id: string;

    constructor(id: string, createdAt?: Date, updatedAt?: Date) {
        super(createdAt, updatedAt);
        this.id = id;
    }
}