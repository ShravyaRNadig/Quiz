import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../service/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
})
export class QuizListComponent implements OnInit {
  quizzes: any[] = [];

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.fetchQuizzes();
  }

  fetchQuizzes() {
    this.quizService.getQuizzes().subscribe(data => {
      this.quizzes = data;
    });
  }

  navigateToCreate() {
    this.router.navigate(['/create']);
  }

  viewQuiz(quizId: string) {
    this.router.navigate(['/quiz', quizId]);
  }
}
