import { Component, OnInit } from "@angular/core";
import { QuestionsComponent } from "./components/questions/questions.components";

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  imports: [
    QuestionsComponent,
  ],
})
export class QuizComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

