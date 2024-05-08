import { Component } from "solid-js";
import { Todo } from "../../types/todo";

interface PropTypes {
  todo: Todo
}

const TodoItem: Component<PropTypes> = ({todo}) => {
  return (
    <div>
      <label for={todo.id}>
        <input
          type="checkbox"
          name={todo.id}
          id={todo.id}
        />

        {todo.content}
      </label>
    </div>
  )
}

export default TodoItem

