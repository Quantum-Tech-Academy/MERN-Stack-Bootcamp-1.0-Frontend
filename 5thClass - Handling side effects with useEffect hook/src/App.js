import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { ClipLoader } from "react-spinners";
import Counter from "./components/Counter";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    })
      .then(function (data) {
        return data.json();
      })
      .then(function (response) {
        console.log(response);
        setPosts(response);
        setLoading(false)
      });
  }, []);

  console.log("I am inside App");

  return (
    <>
    <Header />
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
      {loading && <ClipLoader size={20} color="black" />}
      {posts.length ? posts.map((post) => {
        return <Card>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </Card>
      }) : <h3>No Posts found</h3>}
    </div>
    <Counter />
    </>
  );
}

export default App;
