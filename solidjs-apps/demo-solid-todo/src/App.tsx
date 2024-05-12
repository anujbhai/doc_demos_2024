import {
  For,
  Show,
  createSignal,
  on,
  type Component,
} from 'solid-js'

interface Todo {
  id: string
  title: string
  completed: boolean
  editing: boolean
}

const App: Component = () => {
  const [todos, setTodos] = createSignal<Todo[]>([])
  const [textInput, setTextInput] = createSignal("")
  const [editingTodo, setEditingTodo] = createSignal<string | null>(null)
  const [editedText, setEditedText] = createSignal('');
  const [allChecked, setAllChecked] = createSignal(false)

  // Add
  const addTodo = () => {
    const title = textInput()

    if (title.trim() === "") return

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title.trim(),
        completed: false,
        editing: false,
      }
    ])
    setTextInput("")
  }

  // Toggle check
  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    )
  }

  const toggleAllTodo = () => {
    const newCheckedState = !allChecked()

    setAllChecked(newCheckedState)

    // @Todo - finish this
    setTodos((prev) =>
      prev.map((todo) => ({
        ...todo,
        completed: newCheckedState,
      }))
    )
  }

  // Edit
  const startEditing = (id: string, title: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? {...todo, editing: true} : {...todo, editing: false}
      )
    )

    setEditingTodo(id)
    setEditedText(title)
  }

  const saveEditedTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? {...todo, title: editedText(), editing: false} : todo
      )
    )

    setEditingTodo(null)
  }

  // Remove
  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter(todo => todo.id !== id))
  }

  const removeAllTodos = () => setTodos([])

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter some text.."
        value={textInput()}
        onInput={(e: Event) => setTextInput((e.target as HTMLInputElement).value)}
      />

      <button onClick={addTodo}>Add Todo</button>

        <Show when={todos().length > 1}>
          <div>
            <h3>Filter</h3>

            <button onClick={removeAllTodos}>Remove All</button>

            <label>{allChecked() ? "Uncheck all" : "Check all"}</label>
            <input
              type="checkbox"
              onChange={toggleAllTodo}
            />
          </div>
        </Show>

      <ul>
        <For each={todos()}>
          {(todo: Todo) => (
          <li>
            {todo.editing ? (
              <>
                <input
                  type="text"
                  value={editedText()}
                  onInput={(e: Event) => setEditedText((e.target as HTMLInputElement).value)}
                />
                <button onClick={() => saveEditedTodo(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />

                <span style={{
                  "text-decoration": todo.completed ? "line-through" : ""
                }}>
                  {todo.title}
                </span>

                <button onClick={() => startEditing(todo.id, todo.title)}>Edit</button>
                <button onClick={() => removeTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default App;
