import { Component, inject, input, OnInit } from "@angular/core";
import { QuizService } from "../../services/quiz.service";

@Component({
  selector: 'quiz-answers',
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.css',
})
export class AnswersComponent implements OnInit {
  answerText = input.required<string>();
  answerIndex = input.required<number>();

  quizService = inject(QuizService);

  letterMapping = ['A', 'B', 'C', 'D'];

  constructor() {}

  ngOnInit(): void {}
}



