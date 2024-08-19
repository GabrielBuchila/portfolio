import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
    {path:'home', component:HomeComponent}, //default route
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'projects', component:ProjectsComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'*', redirectTo:'/home'} //route to handle to 404
];

NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [provideHttpClient()]
  })
  export class AppRoutingModule { }