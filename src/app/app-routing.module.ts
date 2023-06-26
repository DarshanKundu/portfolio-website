import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProfessionalExpComponent } from './components/professional-exp/professional-exp.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  { path:"",component:HomeComponent },
  { path:"about-me",component:AboutMeComponent },
  { path:"projects",component:ProjectsComponent },
  { path:"professional-experience",component:ProfessionalExpComponent },
  { path:"skill-set",component:SkillsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
