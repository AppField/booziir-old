export class Timestamps {
    createdAt: Date;
    updatedAt: Date;

    constructor(createdAt?: Date, updatedAt?: Date) {
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt || new Date();
    }
}