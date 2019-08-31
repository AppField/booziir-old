import { AngularFirestore, AngularFirestoreCollection, CollectionReference, Query } from '@angular/fire/firestore';
import { BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirebaseQuery, BaseItem } from '@booziir/shared';

export class FirestoreService<Item extends BaseItem> {
    private _items$ = new BehaviorSubject<Item[]>(null);
    private activeSubscription: Subscription;
    collectionPath: string;

    collection: AngularFirestoreCollection<Item>;
    items$ = this._items$.asObservable();

    constructor(
        private afs: AngularFirestore,
        private readonly queries?: FirebaseQuery[],
    ) {
    }

    protected setupCollection(collectionPath: string): void {
        this.collection = this.afs
            .collection<Item>(collectionPath, ref => this.buildQuery(ref, this.queries));
    }

    private buildQuery(ref: CollectionReference, queries: FirebaseQuery[], shouldOrder: boolean = true): Query {

        let newRef = shouldOrder ? ref.orderBy('createdAt', 'desc') : ref;
        queries.forEach((query: FirebaseQuery) => {
            newRef = newRef.where(query.field, query.operator, query.value);
        });

        return newRef;
    }

    protected setupSnapshotChanges(collection: AngularFirestoreCollection): void {
        this.activeSubscription = collection.snapshotChanges()
            .pipe(
                map(actions => {
                    return actions.map(a => {
                        const data = a.payload.doc.data();
                        const item = data as Item;
                        item.id = a.payload.doc.id;
                        return item;
                    });
                })
            )
            .subscribe((items: Item[]) => {
                this._items$.next(items);
            });
    }

    async filterCollection(queries: FirebaseQuery[]) {
        this.collection = this.afs
            .collection<Item>(this.collectionPath, ref => {

                return this.buildQuery(ref, queries);
            });

        this.activeSubscription.unsubscribe();
        this.setupSnapshotChanges(this.collection);
    }

    async filterItems(queries: FirebaseQuery[], shouldOrder?: boolean): Promise<Item[]> {
        const ref = this.collection.ref;

        const queryRef = this.buildQuery(ref, queries, shouldOrder);

        const items: Item[] = [];
        const snapshot = await queryRef.get();
        snapshot.docs.forEach(doc => {
            const item = doc.data() as Item;
            item.id = doc.id;
            items.push(item);
        });
        // queryRef.get().then(snapshot => {
        //   snapshot.docs.forEach(doc => {
        //     const item = doc.data() as Item;
        //     item.id = doc.id;
        //     items.push(item);
        //   });
        // });

        return items;
    }

    async addItem(item: Item) {
        // Firestore needs an object, not an instance of a class. Cast it to an object
        const copied = Object.assign({}, item) as Item;
        return await this.collection.add(copied);
    }

    async updateItem(item: Item) {
        try {
            // Firestore needs an object, not an instance of a class. Cast it to an object
            const copied = Object.assign({}, item) as Item;
            const id = copied.id;
            copied.id = null;
            copied.updatedAt = new Date();

            this.collection.doc(`/${id}`).update(copied);
        } catch (error) {
            console.log('error updating item', error);
        }
    }

    async deleteItem(item: Item) {
        try {
            const deleted = await this.collection.doc(`${item.id}`).delete();
            console.log('deleted', deleted);
        } catch (error) {
            console.log('error deleting item', error);
        }
    }
}
