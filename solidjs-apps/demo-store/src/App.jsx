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
        {/* <Card title="Basic Tee" /> */}
        <Card
          rounded={true}
          flat={false}
        >
          <h2>Basic Tee, Black</h2>  
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint error deserunt consectetur nulla inventore maiores quia animi eum suscipit! Deserunt temporibus nihil amet delectus placeat explicabo, eum enim. Ut, iusto!</p>
          <button class="btn">View</button>
        </Card>
        <Card
          title="Basic Hoodie"
          rounded={false}
          flat={true}
        >
          <h2>Basic Tee, White</h2>  
          <button class="btn">View</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint error deserunt consectetur nulla inventore maiores quia animi eum suscipit! Deserunt temporibus nihil amet delectus placeat explicabo, eum enim. Ut, iusto!</p>
          <p>Only $ 10.00 /-</p>
        </Card>
      </div>
    </div>
  );
}

export default App;
