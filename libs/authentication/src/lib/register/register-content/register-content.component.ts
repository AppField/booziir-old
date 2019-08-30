import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faGlassCheers } from '@fortawesome/pro-light-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { expandCollapse } from '@booziir/shared';

@Component({
  selector: 'booziir-register-content',
  templateUrl: './register-content.component.html',
  styleUrls: ['./register-content.component.scss'],
  animations: [expandCollapse]
})
export class RegisterContentComponent implements OnInit {
  faGlassCheers = faGlassCheers;
  faGoogle = faGoogle;

  @Input() form: FormGroup;
  @Output() submitForm: EventEmitter<void> = new EventEmitter<void>();
  @Output() loginGoogle: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() { }


  // GETTERS for validation error

  errorRequired(name: string): boolean {
    return this.form.get(name).hasError('required') && this.form.get(name).touched;
  }

  get errorNameLength(): boolean {
    return this.form.get('displayName').hasError('minlength') && this.form.get('displayName').touched;
  }

  get errorEmailInvalid(): boolean {
    return this.form.get('email').hasError('invalidEmail') && this.form.get('email').touched && !this.errorRequired('email');
  }

  get errorPasswordLength(): boolean {
    return this.form.get('password').hasError('minlength') && this.form.get('password').touched && !this.errorRequired('password');
  }

  get errorPasswordMismatch(): boolean {
    return this.form.get('passwordRepeated').hasError('mismatch') && this.form.get('passwordRepeated').touched;
  }

}
