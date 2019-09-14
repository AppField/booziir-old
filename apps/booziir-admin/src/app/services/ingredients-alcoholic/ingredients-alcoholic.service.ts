import { Injectable } from '@angular/core';
import { IFirestoreService } from '@booziir/shared-services';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '@booziir/authentication';
import { Ingredient, LiquidIngredient } from '@booziir/shared';
import { BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngredientsAlcoholicService implements IFirestoreService<LiquidIngredient> {

  private _items$ = new BehaviorSubject<LiquidIngredient[]>(null);
  private activeSubscription: Subscription;
  collectionPath: string;

  collection: AngularFirestoreCollection<LiquidIngredient>;
  items$ = this._items$.asObservable();

  constructor(
    private readonly afs: AngularFirestore,
    private readonly afAuth: AngularFireAuth,
    private readonly authService: AuthService
  ) {
    this.collectionPath = `barUsers/${this.authService.userValue().uid}/alcoholics`;
    this.setupCollection(this.collectionPath);
    this.setupSnapshotChanges(this.collection)
  }

  setupCollection(collectionPath: string): void {
    this.collection = this.afs.collection<LiquidIngredient>(collectionPath);
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
      .subscribe((items: LiquidIngredient[]) => {
        this._items$.next(items);
      });
  }

  async addItem(item: LiquidIngredient): Promise<void> {
    // Firestore needs an object, not an instance of a class. Cast it to an object
    const copied = Object.assign({}, item) as LiquidIngredient;
    await this.collection.add(copied);
  }

  async updateItem(item: LiquidIngredient): Promise<void> {
    try {
      // Firestore needs an object, not an instance of a class. Cast it to an object
      const copied = Object.assign({}, item) as LiquidIngredient;
      const id = copied.id;
      copied.id = null;
      copied.updatedAt = new Date();

      this.collection.doc(`/${id}`).update(copied);
    } catch (error) {
      console.log('error updating item', error);
    }
  }

  async deleteItem(item: LiquidIngredient): Promise<void> {
    try {
      const deleted = await this.collection.doc(`${item.id}`).delete();
      console.log('deleted', deleted);
    } catch (error) {
      console.log('error deleting item', error);
    }
  }
}
