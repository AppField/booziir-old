import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ILanguageService } from './language..interface';

@Injectable({
  providedIn: 'root'
})
export class LanguageService implements ILanguageService {

  private lang$ = new BehaviorSubject<string>('');
  lang = this.lang$.asObservable();

  constructor(private readonly translate: TranslateService) {
    this.translate.addLangs(['en', 'de']);
    const browserLang = this.translate.getBrowserLang();

    const lang = browserLang.match(/en|de/) ? browserLang : 'en';
    this.setLang(lang);
  }

  setLang(lang: string): void {
    this.lang$.next(lang);
  }

}
