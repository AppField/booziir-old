import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs.component';
import { TabsRoutingModule } from './tabs-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { i18nPath } from '@booziir/shared';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SharedModule } from '../shared.module';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, i18nPath('tabs'), '.json');
}

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        TabsRoutingModule,
        HttpClientModule,
        SharedModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        })
    ],
    declarations: [TabsComponent]
})
export class TabsModule { }