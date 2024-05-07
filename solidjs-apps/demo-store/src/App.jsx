import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

import banner from "./assets/gradient.jpg"
import { useCartContext } from "./context/CartContext";

function App(props) {
  const [darkTheme, setDarkTheme] = createSignal(false)

  function toggleDarkTheme() {
    setDarkTheme(!darkTheme())
  }

  const {items} = useCartContext()

  const quantity = () => {
    return items.reduce((acc, current) => {
      return acc + current.quantity
    }, 0)
  }

  return (
    <div class="container m-auto">
      <header
        class="my-4 p-2 text-xl flex items-center gap-4"
        classList={{"bg-neutral-900": darkTheme(), "text-white": darkTheme()}}
      >
        <span
          class="material-symbols-outlined cursor-pointer"
          onClick={toggleDarkTheme}
        >
          light_mode
        </span>
        <h1>Hello solid store.</h1>
        
        <nav>
          <ul>
            <li>
              <A href="/">Home</A>{" | "}
              <A href="/cart">Cart ({quantity()})</A>
            </li>
          </ul>
        </nav>
      </header>

      <figure style={{height: "15rem", overflow: "hidden"}}>
        <img
          class="rounded-md"
          width="100%"
          height="300px"
          src={banner}
          alt=""
        />
      </figure>
      
      {props.children}
    </div>
  );
}

export default App;
