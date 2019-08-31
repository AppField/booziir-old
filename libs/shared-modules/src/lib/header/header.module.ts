import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header.component';
import { MenuPopoverComponent } from './menu-popover/menu-popover.component';
import { MenuPopoverContentComponent } from './menu-popover-content/menu-popover-content.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule
  ],
  entryComponents: [MenuPopoverContentComponent],
  declarations: [HeaderComponent, MenuPopoverComponent, MenuPopoverContentComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
