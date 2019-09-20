import { Component, OnInit, Input } from '@angular/core';
import { Cocktail, expandCollapse } from '@booziir/shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'booziir-cocktail-modal',
  templateUrl: './cocktail-modal.component.html',
  styleUrls: ['./cocktail-modal.component.scss'],
  animations: [expandCollapse]
})
export class CocktailModalComponent implements OnInit {

  @Input() cocktail: Cocktail;
  title: string;

  form: FormGroup;

  constructor(
    private readonly modalController: ModalController,
    private readonly fb: FormBuilder,
    private readonly translate: TranslateService
  ) {
    this.title = this.cocktail && this.cocktail.id
      ? this.translate.instant('MODALS.ALCOHOLIC.EDIT')
      : this.translate.instant('MODALS.ALCOHOLIC.ADD');

    this.buildForm(this.cocktail);
  }

  ngOnInit() { }

  private buildForm(cocktail: Cocktail): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  cancel(): void {
    this.modalController.dismiss();
  }

  delete(cocktail: Cocktail): void {
    this.modalController.dismiss(cocktail, 'delete');
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const value = this.form.value;
      const cocktail = { ... this.cocktail, name: value.name };
      this.modalController.dismiss(cocktail, 'save');
    }
  }

  // validator getters

  errorRequired(controlName: string): boolean {
    return this.form.get(controlName).hasError('required') && this.form.get(controlName).touched;
  }
}
