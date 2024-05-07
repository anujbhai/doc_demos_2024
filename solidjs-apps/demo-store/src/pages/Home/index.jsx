import { For, Show, createResource } from "solid-js"
import Card from "../../components/Card"
import { A } from "@solidjs/router"

const fetchProducts = async () => {
  const res = await fetch("http://localhost:4000/products")

  return res.json()
}

export default function Home() {
  const [products] = createResource(fetchProducts)

  return (
    <Show when={products()}>
      <div className="grid grid-cols-4 gap-10 my-4">
        <For each={products()}>
          {(product) => (
          <Card
            rounded={true}
            flat={false}
          >
            <img src={product.img} alt={product.title} />
            <h2 class="my-3 font-bold">{product.title}</h2>  
            <A
              href={"/product/" + product.id}
              class="btn"
            >View</A>
          </Card>
          )}
        </For>
        <Card
          rounded={false}
          flat={true}
        >
          <h2>Basic Tee, White</h2>  
          <button class="btn">View</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Only $ 10.00 /-</p>
        </Card>

        <p>{console.log(products(), products.loading)}</p>
      </div>
    </Show>
  )
}
