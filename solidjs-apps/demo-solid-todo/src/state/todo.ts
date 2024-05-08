import { createEffect } from "solid-js";
import { createStore } from "solid-js/store"
import { Todo } from "../types/todo";

const [todos, setTodos] = createStore<Todo[]>(
  JSON.parse(localStorage.getItem("todos") || "[]")
)

createEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
})

function addTodo(content: string) {
  setTodos([
    ...todos,
    {
      id: Math.random().toString(),
      content,
      checked: false
    }
  ])
}

function checkTodo(id: string) {
  setTodos(
    todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          checked: !todo.checked,
        }
      }

      return todo
    })
  )
}

function removeAllCheckedTodos() {
  setTodos(todos.filter(todo => !todo.checked))
}

export {
  todos,
  addTodo,
  checkTodo,
  removeAllCheckedTodos,
}

