import { Component, OnInit } from '@angular/core';
import { LiquidIngredient } from '@booziir/shared';
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

  alcoholics$: Observable<LiquidIngredient[]>;

  constructor(
    private readonly alcoholicsService: IngredientsAlcoholicService,
    private readonly modalCtrl: ModalController
  ) {
    this.alcoholics$ = this.alcoholicsService.items$;
  }

  ngOnInit() {

  }

  async addAlcoholic(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: AlcoholicModalComponent
    })

    modal.onDidDismiss()
      .then((result: any) => {
        const data = result.data
        if (data && !data.value.id) {
          this.alcoholicsService.addItem(new LiquidIngredient(null, data.value.name, data.value.available));
        } else if (result.data.value) {
          this.alcoholicsService.updateItem(data.value);
        }
      })

    modal.present();
  }

}
