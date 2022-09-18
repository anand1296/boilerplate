import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { MainLayoutComponent } from './main-layout/main-layout.component'
import { SideNavComponent } from "./side-nav/side-nav.component";


@NgModule({
    declarations: [
        MainLayoutComponent,
        HeaderComponent,
        FooterComponent,
        SideNavComponent
    ],
    imports: [
        LayoutRoutingModule
    ]
})

export class LayoutModule { }