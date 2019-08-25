import { Routes, RouterModule } from "@angular/router";
import { TabsComponent } from './tabs.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsComponent,
        children: [
            {
                path: 'orders',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./../pages/orders/orders.module').then(m => m.OrdersPageModule)
                    }
                ]
            },
            {
                path: 'cocktails',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./../pages/cocktails/cocktails.module').then(m => m.CocktailsPageModule)
                    }
                ]
            },
            {
                path: 'ingredients',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./../pages/ingredients/ingredients.module').then(m => m.IngredientsPageModule)
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/orders',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsRoutingModule { }
