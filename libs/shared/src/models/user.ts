import { SupportedProviders } from '@booziir/shared';
import { Timestamps } from './timestamps';

export class User extends Timestamps {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    readDataProtection?: boolean;
    provider: SupportedProviders


    constructor(uid: string, email: string, photoURL: string, displayName: string, readDataProtection: boolean, provider: SupportedProviders, createdAt: Date, updatedAt: Date) {
        super(createdAt, updatedAt);
        this.uid = uid;
        this.email = email;
        this.photoURL = photoURL;
        this.displayName = displayName || '';
        this.readDataProtection = readDataProtection || false;
        this.provider = provider;
    }
}