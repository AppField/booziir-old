import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Ingredient } from '@booziir/shared';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { USER_COLLECTION_NAME, AuthService } from '@booziir/authentication';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngredientsNonLiquidService {
  private _items$ = new BehaviorSubject<Ingredient[]>(null);
  private activeSubscription: Subscription;
  collectionPath: string;

  collection: AngularFirestoreCollection<Ingredient>;
  items$ = this._items$.asObservable();

  constructor(
    @Inject(USER_COLLECTION_NAME) userCollectionName: string,
    private readonly afs: AngularFirestore,
    private readonly authService: AuthService
  ) {
    this.collectionPath = `${userCollectionName}/${this.authService.userValue().uid}/non-liquid`;
    this.setupCollection(this.collectionPath);
    this.setupSnapshotChanges(this.collection)
  }

  setupCollection(collectionPath: string): void {
    this.collection = this.afs.collection<Ingredient>(collectionPath);
  }

  setupSnapshotChanges(collection: AngularFirestoreCollection): void {
    this.activeSubscription = collection.snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const item = data as Ingredient;
            item.id = a.payload.doc.id;
            return item;
          });
        })
      )
      .subscribe((items: Ingredient[]) => this._items$.next(items));
  }

  async addItem(item: Ingredient): Promise<void> {
    // Firestore needs an object, not an instance of a class. Cast it to an object
    // const copied = Object.assign({}, item) as Ingredient;
    await this.collection.add({ ...item });
  }

  async updateItem(item: Ingredient): Promise<void> {
    try {
      // Firestore needs an object, not an instance of a class. Cast it to an object
      const copied = Object.assign({}, item) as Ingredient;
      const id = copied.id;
      copied.id = null;
      copied.updatedAt = new Date();

      this.collection.doc(`/${id}`).update(copied);
    } catch (error) {
      console.log('error updating item', error);
    }
  }

  async deleteItem(item: Ingredient): Promise<void> {
    try {
      const deleted = await this.collection.doc(`${item.id}`).delete();
      console.log('deleted', deleted);
    } catch (error) {
      console.log('error deleting item', error);
    }
  }
}
