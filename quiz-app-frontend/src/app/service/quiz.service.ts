import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'http://localhost:3000/quizzes'; // Adjust if needed

  constructor(private http: HttpClient) { }

  getQuizzes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createQuiz(quiz: any): Observable<any> {
    return this.http.post(this.apiUrl, quiz);
  }
  getQuizById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Additional methods for fetching questions, etc.
}
