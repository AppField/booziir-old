import { BaseItem } from '@booziir/shared';
import { CollectionReference, AngularFirestoreCollection } from '@angular/fire/firestore';


export interface IFirestoreService<Item extends BaseItem> {

    setupCollection(collectionPath: string): void

    setupSnapshotChanges(collection: AngularFirestoreCollection): void

    addItem(item: Item): Promise<void>;

    updateItem(item: Item): Promise<void>;

    deleteItem(item: Item): Promise<void>;

}