import { useState } from "react"

import Search from "../../components/Search"

const allUsers = [
  'john',
  'alex',
  'george',
  'simon',
  'james'
]

function DemoUseCallback(props) {
  const {} = props

  const [users, setUsers] = useState(allUsers)

  const handleSearch = (text) => {
    const filteredUsers = allUsers.filter((user) => user.includes(text))

    setUsers(filteredUsers)
  }

  const handleOnShuffleClick = () => {
    console.log('Shuffle', users)
    setUsers([...users].sort(() => Math.random() - 0.5))
  }

  return (
    <div>
      <div>
        <button onClick={handleOnShuffleClick}>Shuffle</button>
        <Search onChange={handleSearch} />
      </div>

      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default DemoUseCallback
