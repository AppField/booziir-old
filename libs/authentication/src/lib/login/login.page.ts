import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService, AuthService } from '@booziir/shared-services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isEmail, BasicComponent } from '@booziir/shared';

@Component({
  selector: 'booziir-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage extends BasicComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly translate: TranslateService,
    private readonly language: LanguageService,
    private readonly fb: FormBuilder,
    private readonly auth: AuthService
  ) {
    super();
    translate.setDefaultLang('en');
    this.subscription.add(
      this.language.lang
        .subscribe((currLang: string) => this.translate.use(currLang)));

    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, isEmail]],
      password: ['', Validators.required]
    });
  }

  login(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const value = this.form.value;
      this.auth.emailLogin(value.email, value.password);
    }
  }

}
