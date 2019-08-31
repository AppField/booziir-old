import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuPopoverContentComponent } from '../menu-popover-content/menu-popover-content.component';

@Component({
  selector: 'booziir-menu-popover',
  templateUrl: './menu-popover.component.html',
  styleUrls: ['./menu-popover.component.scss'],
})
export class MenuPopoverComponent implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() { }

  async openPopover(event: any): Promise<void> {
    const popover = await this.popoverController.create({
      component: MenuPopoverContentComponent,
      event: event,
      translucent: true
    });
    await popover.present();
  }
}
