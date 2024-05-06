import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

import banner from "./assets/gradient.jpg"

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false)

  function toggleDarkTheme() {
    setDarkTheme(!darkTheme())
    // console.log("dark theme:", darkTheme() ? "yes" : "no")
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
              <A href="/">Home</A>
            </li>
          </ul>
        </nav>
      </header>

      <img
        class="rounded-md"
        width="100%"
        height="300px"
        src={banner}
        alt=""
      />
    </div>
  );
}

export default App;
