import { Component, inject, OnInit } from "@angular/core";
import { AnswersComponent } from "../answers/answers.component";
import { QuizService } from "../../services/quiz.service";

@Component({
  selector: 'quiz-questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css',
  imports: [
    AnswersComponent,
  ],
})
export class QuestionsComponent implements OnInit {
  quizService = inject(QuizService);

  constructor() {}

  ngOnInit(): void {}
}


