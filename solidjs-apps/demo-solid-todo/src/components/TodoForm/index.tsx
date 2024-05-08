import { Component } from "solid-js"
import { addTodo } from "../../state/todo"

const TodoForm: Component = () => {
  let input: HTMLInputElement | undefined

  function handleSubmit(e: SubmitEvent) {
    event?.preventDefault()

    if (input === null || input?.value === "") {
      return
    }

    addTodo(input.value)

    input.value = ""
  }

  return (
    <from onSubmit={handleSubmit}>
      <input type="text" ref={input} />

      <button type="submit">Submit</button>
    </from>
  )
}

export default TodoForm

