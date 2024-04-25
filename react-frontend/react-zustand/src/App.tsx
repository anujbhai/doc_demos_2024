import { useStore } from "./store"

function App() {
  const state = useStore()

  return (
    <>
      <h3>Normal</h3>

      <div>
        {state.deep.nested.obj.count}
        <button onClick={state.normalInc}>+1</button>

        <input
          value={state.deep.nested.arr[0]}
          onChange={(e) => state.normalSetText(e.target.value, 0)}
        />

        <p>Hello, {state.deep.nested.arr[0]}</p>
      </div>

      <hr />

      <h3>Immer JS</h3>

      <div>
        {state.deep.nested.obj.count}
        <button onClick={state.immerInc}>+1</button>

        <input
          value={state.deep.nested.arr[0]}
          onChange={(e) => state.immerSetText(e.target.value, 0)}
        />
        
        <p>Hello, {state.deep.nested.arr[0]}</p>
      </div>
    </>
  )
}

export default App
