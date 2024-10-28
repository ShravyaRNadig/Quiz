import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizListComponent } from './component/quiz-list/quiz-list.component';
import { QuizDetailComponent } from './component/quiz-detail/quiz-detail.component';
import { QuizCreateComponent } from './component/quiz-create/quiz-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizDetailComponent,
    QuizCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
