import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { routes } from './about-routing';
import { SocialMediaModule } from '../social-media/social-media.module';
import { RatingModule } from '../rating/rating-module';

@NgModule({
    declarations: [
        AboutComponent,
    ],
    imports: [
        SocialMediaModule,
        RatingModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class AboutModule { }
