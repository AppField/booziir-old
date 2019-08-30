import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService, AuthService } from '@booziir/shared-services';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { isEmail, matchPasswordValidator } from '@booziir/shared';
import { faGlassCheers } from '@fortawesome/pro-light-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'booziir-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  faGlassCheers = faGlassCheers;
  faGoogle = faGoogle;

  form: FormGroup;

  constructor(
    private readonly translate: TranslateService,
    private readonly language: LanguageService,
    private readonly fb: FormBuilder,
    private readonly auth: AuthService
  ) {
    translate.setDefaultLang('en');
    this.language.lang
      .subscribe((currLang: string) => this.translate.use(currLang));
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      displayName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, isEmail]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordRepeated: ['', [Validators.required, matchPasswordValidator]],
      readDataProtection: [false, [Validators.required, Validators.requiredTrue]]
    });
  }

  register(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log('valid!');
    }
  }
}
