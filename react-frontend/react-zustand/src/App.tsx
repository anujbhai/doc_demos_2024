import { usePersonStore } from "./store"

function App() {
  const firstName = usePersonStore((state) => state.firstName)
  const updateFirstName = usePersonStore((state) => state.updateFirstName)
  
  return (
    <>
      <label>
        First name

        <input
          type="text"
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>

      <p>
        Hello, <strong>{firstName}</strong>
      </p>
    </>
  )
}

export default App
