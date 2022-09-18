import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'home', loadChildren: () => import('../main/home/home.module').then(m => m.HomeModule) }
        ]
    },
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            { path: 'auth', loadChildren: () => import('../main/auth/auth.module').then(m => m.AuthModule) }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LayoutRoutingModule { }