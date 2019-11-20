import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { routes } from './about-routing';
import { SocialMediaModule } from '../social-media/social-media.module';
import { RadialProgressModule } from '../radial-progress/radial-progress.module';

@NgModule({
    declarations: [
        AboutComponent,
    ],
    imports: [
        CommonModule,
        SocialMediaModule,
        RadialProgressModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class AboutModule { }
