import { BaseItem } from '@booziir/shared';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Ingredient } from '@booziir/shared';


export interface IFirestoreService<Item extends BaseItem> {

    collectionPath: string;

    collection: AngularFirestoreCollection<Ingredient>;

    items$: Observable<Ingredient[]>;

    setupCollection(collectionPath: string): void

    setupSnapshotChanges(collection: AngularFirestoreCollection): void

    addItem(item: Item): Promise<void>;

    updateItem(item: Item): Promise<void>;

    deleteItem(item: Item): Promise<void>;

}