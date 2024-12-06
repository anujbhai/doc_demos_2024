import { Component, signal } from "@angular/core";

@Component({
  selector: 'todo-list-item',
  template: `
    <h1>Profile for {{username()}}</h1>
  `
})
export class TodoListItem {
  username = signal('pro_programmer_123')
}

