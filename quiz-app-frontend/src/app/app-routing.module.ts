import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizCreateComponent } from './component/quiz-create/quiz-create.component';
import { QuizListComponent } from './component/quiz-list/quiz-list.component';
import { QuizDetailComponent } from './component/quiz-detail/quiz-detail.component';

const routes: Routes = [
  { path: '', component: QuizListComponent },
  { path: 'create', component: QuizCreateComponent },
  { path: 'quiz/:id', component: QuizDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
