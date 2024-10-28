import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from '../../service/quiz.service';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.css']
})
export class QuizCreateComponent implements OnInit {
  quizForm: FormGroup;

  constructor(private fb: FormBuilder, private quizService: QuizService, private router: Router) {
    this.quizForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      questions: this.fb.array([]) // Initialize questions as a FormArray
    });
  }

  ngOnInit(): void {
    this.addQuestion(); // Add an initial question
  }

  get questions() {
    return this.quizForm.get('questions') as FormArray;
  }

  createQuiz() {
    console.log('Creating quiz with data:', this.quizForm.value);
    this.quizService.createQuiz(this.quizForm.value).subscribe(
      response => {
        console.log('Quiz created!', response);
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error creating quiz:', error);
      }
    );
  }

  addQuestion() {
    const questionGroup = this.fb.group({
      text: ['', Validators.required],
      options: this.fb.array([this.fb.control('', Validators.required)]) // Initialize options
    });
    this.questions.push(questionGroup);
  }

  addOption(questionIndex: number) {
    const options = this.questions.at(questionIndex).get('options') as FormArray;
    options.push(this.fb.control('', Validators.required));
  }

  removeOption(questionIndex: number, optionIndex: number) {
    const options = this.questions.at(questionIndex).get('options') as FormArray;
    options.removeAt(optionIndex);
  }

  removeQuestion(index: number) {
    this.questions.removeAt(index);
  }

  navigateToList() {
    this.router.navigate(['/']);
  }
}
