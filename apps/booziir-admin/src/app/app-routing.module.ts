import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NgModule } from '@angular/core';
import { AuthGuard } from '@booziir/authentication';



const routes: Routes = [
    {
        path: '',
        canLoad: [AuthGuard],
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule)
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            { preloadingStrategy: PreloadAllModules, enableTracing: false }
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }