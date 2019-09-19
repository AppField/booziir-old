import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '@booziir/shared';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { IngredientModalComponent } from '../ingredient-modal/ingredient-modal.component';
import { IconDefinition } from '@fortawesome/pro-light-svg-icons';
import { IFirestoreService } from '@booziir/shared-services';

@Component({
  selector: 'booziir-ingredients-list-container',
  templateUrl: './ingredients-list-container.component.html',
  styleUrls: ['./ingredients-list-container.component.css'],
})
export class IngredientsListContainerComponent implements OnInit {

  @Input() title: string;
  @Input() icon: IconDefinition;
  @Input() service: IFirestoreService<Ingredient>;

  ingredients$: Observable<Ingredient[]>;

  constructor(
    private readonly modalCtrl: ModalController
  ) {
  }

  ngOnInit() {
    this.ingredients$ = this.service.items$;
  }

  async openModal(ingredient?: Ingredient): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: IngredientModalComponent,
      componentProps: {
        alcoholic: ingredient
      }
    })

    modal.onDidDismiss()
      .then((result: any) => {
        if (result.role === 'save') {
          const data = result.data as Ingredient
          if (!data.id) {
            this.service.addItem(new Ingredient(null, data.name, data.available));
          } else if (data) {
            this.service.updateItem(data);
          }
        } else if (result.role === 'delete') {
          this.deleteIngredient(result.data);
        }
      });

    modal.present();
  }

  private deleteIngredient(ingredient: Ingredient): void {
    this.service.deleteItem(ingredient);
  }

}
