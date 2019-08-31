import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'booziir-menu-popover-content',
  templateUrl: './menu-popover-content.component.html',
  styleUrls: ['./menu-popover-content.component.scss'],
})
export class MenuPopoverContentComponent implements OnInit {

  constructor(
    private readonly popoverCtrl: PopoverController,
    private readonly router: Router
  ) {

  }

  ngOnInit() { }

  navigate(route: string): void {
    this.router.navigate([route]);
    this.popoverCtrl.dismiss();
  }

}
