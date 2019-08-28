import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService, AuthService } from '@booziir/shared-services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isEmail } from '@booziir/shared';

@Component({
  selector: 'booziir-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

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
      'email': ['', [Validators.required, isEmail]],
      'password': ['', Validators.required]
    });
  }

  login(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log('form valid!');
    }
  }

}
