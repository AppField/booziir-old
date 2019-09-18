import { Component, OnInit, Input } from '@angular/core';
import { LiquidIngredient, expandCollapse, Ingredient } from '@booziir/shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'booziir-alcoholic-modal',
  templateUrl: './alcoholic-modal.component.html',
  styleUrls: ['./alcoholic-modal.component.scss'],
  animations: [expandCollapse]
})
export class AlcoholicModalComponent implements OnInit {

  @Input() alcoholic: LiquidIngredient;
  title: string;

  form: FormGroup;

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly fb: FormBuilder,
    private readonly translate: TranslateService
  ) {
  }

  ngOnInit() {
    this.title = this.alcoholic && this.alcoholic.id
      ? this.translate.instant('MODALS.ALCOHOLIC.EDIT')
      : this.translate.instant('MODALS.ALCOHOLIC.ADD');

    this.buildForm(this.alcoholic);
  }

  private buildForm(ingredient: Ingredient): void {
    const name = ingredient ? ingredient.name : '';
    const available = ingredient ? ingredient.available : true;
    this.form = this.fb.group({
      name: [name, Validators.required],
      available: [available, Validators.required]
    });
  }

  cancel(): void {
    this.modalCtrl.dismiss();
  }

  delete(ingredient: Ingredient): void {
    this.modalCtrl.dismiss(ingredient, 'delete');
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const value = this.form.value;
      const alcoholic = { ... this.alcoholic, name: value.name, available: value.available };
      this.modalCtrl.dismiss(alcoholic, 'save');
    }
  }

  // validator getters

  errorRequired(controlName: string): boolean {
    return this.form.get(controlName).hasError('required') && this.form.get(controlName).touched;
  }
}
