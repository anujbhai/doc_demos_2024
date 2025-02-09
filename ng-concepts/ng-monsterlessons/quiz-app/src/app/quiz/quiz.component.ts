import { Component, inject, OnInit } from "@angular/core";
import { QuestionsComponent } from "./components/questions/questions.components";
import { QuizService } from "./services/quiz.service";

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  imports: [
    QuestionsComponent,
  ],
})
export class QuizComponent implements OnInit {
  quizService = inject(QuizService);

  constructor() {}

  ngOnInit(): void {}
}

