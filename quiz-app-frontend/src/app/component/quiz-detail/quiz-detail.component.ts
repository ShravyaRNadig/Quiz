import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../service/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {
  quiz: any; // Define the type according to your quiz model

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const quizId = this.route.snapshot.paramMap.get('id');
    this.fetchQuizDetails(quizId);
  }

  fetchQuizDetails(id: string | null) {
    if (id) {
      this.quizService.getQuizById(id).subscribe(
        response => {
          this.quiz = response;
        },
        error => {
          console.error('Error fetching quiz details:', error);
        }
      );
    }
  }

  navigateToList() {
    this.router.navigate(['/']);
  }
}
