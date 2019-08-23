import { NgModule } from '@angular/core';
import { SocialMediaComponent } from './social-media.component';

@NgModule({
    declarations: [
        SocialMediaComponent,
    ],
    exports: [SocialMediaComponent]
})
export class SocialMediaModule { }
