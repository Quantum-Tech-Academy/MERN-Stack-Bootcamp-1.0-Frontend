import './App.css';
import Card from "./components/Card";
import logo from "./logo.svg";

function App() {
  const message = "Welcome to React";

  const cards = [
    {
      id: 1,
      title: "First Card",
      description: "First description"
    },
    {
      id: 2,
      title: "Second Card",
      description: "Second description"
    },
    {
      id: 3,
      title: "Third Card",
      description: "Third description"
    },
    {
      id: 4,
      title: "Fourth Car4",
      description: "Fourth description"
    },
    {
      id: 5,
      title: "Fifth Card",
      description: "Fifth description"
    }
  ];

  return (
    <>
      <h1 className='top-heading'>Our first React APP</h1>
      <p>{message}</p>
      <img src={logo} />
      <button style={{ backgroundColor: "orange", padding: "10px"}}>Click Me</button><br />
      {cards.map((card) => <Card key={card.id} title={card.title} description={card.description} /> )}
    </>
  );
}

export default App;
