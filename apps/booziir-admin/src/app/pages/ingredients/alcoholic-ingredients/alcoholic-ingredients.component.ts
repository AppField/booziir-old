import { Component, OnInit } from '@angular/core';
import { LiquidIngredient, Ingredient } from '@booziir/shared';
import { IngredientsAlcoholicService } from '../../../services/ingredients-alcoholic/ingredients-alcoholic.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { AlcoholicModalComponent } from './alcoholic-modal/alcoholic-modal.component';

@Component({
  selector: 'booziir-alcoholic-ingredients',
  templateUrl: './alcoholic-ingredients.component.html',
  styleUrls: ['./alcoholic-ingredients.component.css'],
})
export class AlcoholicIngredientsComponent implements OnInit {

  alcoholics$: Observable<Ingredient[]>;

  constructor(
    private readonly alcoholicsService: IngredientsAlcoholicService,
    private readonly modalCtrl: ModalController
  ) {
    this.alcoholics$ = this.alcoholicsService.items$;
  }

  ngOnInit() {
  }


  async openModal(ingredient?: Ingredient): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: AlcoholicModalComponent,
      componentProps: {
        alcoholic: ingredient
      }
    })

    modal.onDidDismiss()
      .then((result: any) => {
        if (result.role === 'save') {
          const data = result.data as Ingredient
          if (!data.id) {
            this.alcoholicsService.addItem(new LiquidIngredient(null, data.name, data.available));
          } else if (data) {
            this.alcoholicsService.updateItem(data);
          }
        } else if (result.role === 'delete') {
          this.deleteAlcoholic(result.data);
        }
      });

    modal.present();
  }

  private deleteAlcoholic(ingredient: Ingredient): void {
    this.alcoholicsService.deleteItem(ingredient);
  }

}
