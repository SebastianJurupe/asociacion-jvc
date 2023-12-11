import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './asociation/home/home.component';
import { NoticesComponent } from './asociation/notices/notices.component';
import { AboutUsComponent } from './asociation/about-us/about-us.component';
import { QuestionsComponent } from './asociation/questions/questions.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'notices', component: NoticesComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'questions', component: QuestionsComponent},
  { path: '**', component: HomeComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
