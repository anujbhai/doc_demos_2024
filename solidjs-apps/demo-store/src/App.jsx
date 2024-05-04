import banner from "./assets/gradient.jpg"
import Card from "./components/Card";

function App() {
  return (
    <div class="container m-auto">
      <header>
        <h1>Hello solid store.</h1>
      </header>

      <img
        class="rounded-md"
        width="100%"
        height="300px"
        src={banner}
        alt=""
      />

      <div className="grid grid-cols-4 gap-10 my-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
