import { Component, OnInit, Input } from '@angular/core';
import { LiquidIngredient, expandCollapse } from '@booziir/shared';
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
    this.buildForm();
  }

  ngOnInit() {
    this.title = this.alcoholic && this.alcoholic.id
      ? this.translate.instant('MODALS.ALCOHOLIC.EDIT')
      : this.translate.instant('MODALS.ALCOHOLIC.ADD')
  }

  private buildForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      available: [true, Validators.required]
    });
  }

  cancel(): void {
    this.modalCtrl.dismiss();
  }

  delete(id: string): void {
    console.log('delete', id);
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const value = this.form.value;
      const alcoholic = { ... this.alcoholic, value };
      this.modalCtrl.dismiss(alcoholic);
    }
  }

  // validator getters

  errorRequired(controlName: string): boolean {
    return this.form.get(controlName).hasError('required') && this.form.get(controlName).touched;
  }
}
