import { useMemo, useState } from "react"
import { initialItems } from "../../../utils/initialItems"

function DemoUseMemo(props) {
  const {} = props;

  const [count, setCount] = useState(0)
  const [items] = useState(initialItems)

  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  )

  return (
    <div>
      <h1>Number of items: {count}</h1>
      <h1>Selected item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default DemoUseMemo

