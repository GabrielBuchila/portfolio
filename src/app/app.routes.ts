import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' } // Handles unknown routes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy }
    ]
})
export class AppRoutingModule { }
