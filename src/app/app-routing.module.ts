import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'home', component : HomeComponent},
  {path: 'portfolio', component : PortfolioComponent},
  {path: 'curriculo', component : ResumeComponent},
  {path: 'contato', component : ContactComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
