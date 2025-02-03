import { Component, OnInit } from "@angular/core";
import { AnswersComponent } from "../answers/answers.component";

@Component({
  selector: 'quiz-questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css',
  imports: [
    AnswersComponent,
  ],
})
export class QuestionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}


