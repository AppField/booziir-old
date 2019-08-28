export class Timestamps {
    createdAt: Date;
    updateAt: Date;

    constructor(createdAt?: Date, updatedAt?: Date) {
        this.createdAt = createdAt || new Date();
        this.updateAt = updatedAt || new Date();
    }
}