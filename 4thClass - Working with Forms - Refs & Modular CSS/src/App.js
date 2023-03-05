import { useState, useRef } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import LeaderCard from "./components/LeaderCard";

const users = [
  {
    id: 1,
    name: "Shah Fahad",
    description: "Football Player",
    imageUrl: "",
    points: 800,
  },
  {
    id: 2,
    name: "Zahid Ullah",
    description: "Cricket Player",
    imageUrl: "",
    points: 140,
  },
  {
    id: 3,
    name: "Aman Islam",
    description: "Badminton Player",
    imageUrl: "",
    points: 900,
  },
  {
    id: 4,
    name: "Mujtaba Rajabi",
    description: "Marvels Player",
    imageUrl: "",
    points: 3400,
  },
];

function App() {
  const [query, setQuery] = useState("");
  const [searchError, setSearchError] = useState(null);
  const [usersArray, setUsersArray] = useState(users);

  // Refs
  const nameRef = useRef();
  const pointsRef = useRef();
  const descriptionRef = useRef();

  function onSearchClick() {
    if (query.length < 3) {
      setSearchError(
        "Search query must be equal to or greater than 3 characters"
      );
    } else {
      setSearchError(null);
      setUsersArray(usersArray.filter((user) => user.name.includes(query)));
    }
  }

  function onSearchChange(event) {
    setQuery(event.target.value);
    if (event.target.value.length >= 3) {
      setSearchError("");
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    if (
      nameRef.current.value &&
      descriptionRef.current.value &&
      pointsRef.current.value
    ) {
      setUsersArray([
        {
          id: usersArray.length + 1,
          name: nameRef.current.value,
          description: descriptionRef.current.value,
          points: pointsRef.current.value,
        },
        ...usersArray,
      ]);
      nameRef.current.value = "";
      descriptionRef.current.value = "";
      pointsRef.current.value = "";
    }
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>LeaderBoard</h1>
      <Card className={"w-50"}>
        <h3>Add a new User</h3>
        <form onSubmit={submitHandler}>
          <div className="mt-3">
            <label>Name</label>
            <input
              type={"text"}
              placeholder="Enter Name of the User"
              ref={nameRef}
            />
          </div>
          <div className="mt-3">
            <label>Description</label>
            <input
              type={"text"}
              placeholder="Enter Description of the User"
              ref={descriptionRef}
            />
          </div>
          <div className="mt-3">
            <label>Points</label>
            <input
              type={"number"}
              placeholder="Enter Points of the User"
              ref={pointsRef}
            />
          </div>
          <button className="btn-custom mt-3" type="submit">
            Add User
          </button>
        </form>
      </Card>
      <Card className={"w-50 mt-3"}>
        <input
          type={"text"}
          placeholder={"Search User"}
          className={searchError && "input-error"}
          onChange={onSearchChange}
          value={query}
        />
        <button className="btn-custom" onClick={onSearchClick}>
          Search
        </button>
        {searchError ? <div style={{ color: "red" }}>{searchError}</div> : ""}
      </Card>
      <Card className="w-50 mt-3">
        {usersArray.length ? (
          usersArray.map(function (user) {
            return (
              <LeaderCard
                key={user.id}
                name={user.name}
                description={user.description}
                points={user.points}
                imageUrl={user.imageUrl}
              />
            );
          })
        ) : (
          <div>No records found</div>
        )}
      </Card>
    </>
  );
}

export default App;
