import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NgModule } from '@angular/core';



const routes: Routes = [
    // {
    //     path: 'login',
    //     loadChildren: () => import('./authentication/login/login.module').then(m => m.LoginModule)
    // },
    // {
    //     path: 'register',
    //     loadChildren: () => import('./authentication/register/register.module').then(m => m.RegisterModule)
    // },
    // {
    //     path: 'setup-bar',
    //     loadChildren: () => import('./pages/setup-bar/setup-bar.module').then(m => m.SetupBarModule)
    // },
    {
        path: '',
        // canLoad: [AuthGuard],
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule)
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }