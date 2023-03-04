import { useState } from 'react';
import './App.css';
import Card from "./components/Card";
import logo from "./logo.svg";
import CityCard from './components/CityCard';

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
      title: "Karachi",
      description: "City of Lights",
      imageUrl: "https://cdn.britannica.com/85/128585-050-5A1BDD02/Karachi-Pakistan.jpg"
    },
    {
      id: 5,
      title: "Lahore",
      description: "City of Five Rivers",
      imageUrl: "https://www.thediaryofanomad.com/wp-content/uploads/2020/05/lahore-pakistan-the-diary-of-a-nomad-facebook.jpg"
    }
  ];

  const [city, setCity] = useState({
    name: "Lahore",
    description: "The city of foods",
    imageUrl: "https://www.thediaryofanomad.com/wp-content/uploads/2020/05/lahore-pakistan-the-diary-of-a-nomad-facebook.jpg"
  })

  const clickHandler = (event) => {
    console.log("I am clicked!!!")
    console.log(event);
    setCity((oldState) => {
      return {
        ...oldState,
        name: "Peshawar",
        description: "Capital of KPK"
      }
    })
  }

  const resetHandler = (newObj) => {
    setCity({
      name: newObj.defaultTitle,
      description: newObj.defaultDescription
    })
  }

  return (
    <>
      {/* <h1 className='top-heading'>Our first React APP</h1>
      <p>{message}</p>
      <img src={logo} />
      <button style={{ backgroundColor: "orange", padding: "10px"}}>Click Me</button><br />
      {cards.map((card) => <CityCard key={card.id} title={card.title} description={card.description} imageUrl={card.imageUrl} /> )} */}
{/* 
      <Card>
        <img src={city.imageUrl} />
        <h3>{city.name}</h3>
        <p>{city.description}</p>
        <button onClick={clickHandler}>Change City</button>
      </Card> */}

      <CityCard title={city.name} description={city.description} onChangeCityClick={clickHandler} resetHandler={resetHandler} />
      {/* <CityCard /> */}
    </>
  );
}

export default App;
