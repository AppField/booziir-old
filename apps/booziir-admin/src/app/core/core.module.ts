import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


// export function createTranslateLoader(http: HttpClient) {
//     return new TranslateHttpLoader(http, i18nPath('app'), '.json');
//   }


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class CoreModule { }