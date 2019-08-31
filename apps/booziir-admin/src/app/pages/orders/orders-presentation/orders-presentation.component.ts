import { Component, OnInit } from '@angular/core';
import { faBan, faCheck } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'booziir-orders-presentation',
  templateUrl: './orders-presentation.component.html',
  styleUrls: ['./orders-presentation.component.scss'],
})
export class OrdersPresentationComponent implements OnInit {
  faBan = faBan;
  faCheck = faCheck;

  constructor() { }

  ngOnInit() { }

}
