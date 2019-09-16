import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '@booziir/shared';
import { IngredientsNonAlcoholicService } from '../../../services/ingredients-non-alcoholic/ingredients-non-alcoholic.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'booziir-non-alcoholic-ingredients',
  templateUrl: './non-alcoholic-ingredients.component.html',
  styleUrls: ['./non-alcoholic-ingredients.component.css'],
})
export class NonAlcoholicIngredientsComponent implements OnInit {

  nonAlcoholics$: Observable<Ingredient[]>;

  constructor(
    private readonly nonAlcoholicsService: IngredientsNonAlcoholicService,
    private readonly alertController: AlertController
  ) {
    this.nonAlcoholics$ = nonAlcoholicsService.items$;
  }

  ngOnInit() { }

  async addNonAlcoholic(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Add Non Alcoholic',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name'
        },
        {
          name: 'available',
          type: 'checkbox',
          label: 'Available',
          value: 'available',
          checked: true
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Add',
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    })

    await alert.present();
  }
}
