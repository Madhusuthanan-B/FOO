import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesignSystemComponent } from './design-system.component';
import { routes } from './design-system.routing';

@NgModule({
    declarations: [
        DesignSystemComponent,
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class DesignSystemModule { }
