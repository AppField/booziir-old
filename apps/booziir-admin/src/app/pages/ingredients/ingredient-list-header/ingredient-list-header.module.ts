import { IonicModule } from "@ionic/angular";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IngredientListHeaderComponent } from './ingredient-list-header.component';
import { SharedModule } from '@booziir/shared-modules';


@NgModule({
    imports: [CommonModule, IonicModule, SharedModule],
    declarations: [IngredientListHeaderComponent],
    exports: [IngredientListHeaderComponent]
})
export class IngredientListHeaderModule { }