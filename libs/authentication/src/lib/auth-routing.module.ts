import { Route, RouterModule, PreloadAllModules } from "@angular/router";
import { AuthRoutes } from './enums';
import { NgModule } from '@angular/core';


const routes: Route[] = [
    {
        path: AuthRoutes.LOGIN,
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: AuthRoutes.REGISTER,
        loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule { }