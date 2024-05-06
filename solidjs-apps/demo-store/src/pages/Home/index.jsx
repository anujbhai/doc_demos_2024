import Card from "../../components/Card"

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-10 my-4">
      {/* <Card title="Basic Tee" /> */}
      <Card
        rounded={true}
        flat={false}
      >
        <h2>Basic Tee, Black</h2>  
        <p>Deserunt temporibus nihil amet delectus placeat explicabo, eum enim. Ut, iusto!</p>
        <button class="btn">View</button>
      </Card>
      <Card
        rounded={false}
        flat={true}
      >
        <h2>Basic Tee, White</h2>  
        <button class="btn">View</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Only $ 10.00 /-</p>
      </Card>
    </div>
  )
}
