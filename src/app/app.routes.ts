<<<<<<< Updated upstream
import { RouterModule, Routes } from '@angular/router';
=======
import { provideRouter, Routes, withHashLocation } from '@angular/router';
>>>>>>> Stashed changes
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
<<<<<<< Updated upstream
import { provideHttpClient } from '@angular/common/http';
=======
import { RouterModule } from '@angular/router';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    exports: [RouterModule],
    providers: [provideHttpClient()]
=======
    exports: [RouterModule]
>>>>>>> Stashed changes
  })
  export class AppRoutingModule { }