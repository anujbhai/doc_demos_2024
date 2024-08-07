import React from 'react'
import './App.css'

function App() {
  const greet = "greeting"
  const display_action = false
  const handleClick = (e) => console.log(e.target.id)

  const emojis = [
    {
      emoji: "😀",
      name: "grinning face",
    },
    {
      emoji: "🎉",
      name: "party popper",
    },
    {
      emoji: "💃",
      name: "dancing woman",
    },
  ]

  return (
    <div className="container">
      <h1 id={greet}>Hello, World!</h1>
      {display_action && <p>I am writing JSX.</p>}

      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button onClick={handleClick}>
                <span
                  role="img"
                  aria-label={emoji.name}
                  id={emoji.name}
                >
                  {emoji.emoji}
                </span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App

