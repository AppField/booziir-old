import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faGlassCheers } from '@fortawesome/pro-light-svg-icons';
import { expandCollapse } from '@booziir/shared';

@Component({
  selector: 'booziir-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.scss'],
  animations: [expandCollapse]
})
export class LoginContentComponent implements OnInit {
  faGlassCheers = faGlassCheers;

  @Input() form: FormGroup;
  @Output() submitForm: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() { }


  errorRequired(name: string): boolean {
    return this.form.get(name).hasError('required') && this.form.get(name).touched;
  }

  get errorEmailInvalid(): boolean {
    return !this.errorRequired('email') && this.form.get('email').hasError('invalidEmail') && this.form.get('email').touched;
  }
}
