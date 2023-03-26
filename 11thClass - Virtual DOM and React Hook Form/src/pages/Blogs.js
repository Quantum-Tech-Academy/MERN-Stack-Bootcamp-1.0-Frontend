import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import UserCard from "../components/UserCard";

function Blogs() {
    const navigate = useNavigate()
    const [blogs, setBlogs] = useState([]);
    const {token, user} = useSelector(state => state);

    async function getAllBlogs() {
        try {
            const response = await fetch(`http://127.0.0.1:4000/api/users/${user.id}/blogs`, {
                headers: {
                    Authorization: token
                }
            });
            const blogsData = await response.json();
            console.log("blogsData", blogsData);
            setBlogs(blogsData);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAllBlogs();
    }, [])

    return <>
        <Navbar />
        <div style={{ dislay: "flex", flexDirection: "column", gap: "20px", alignItems: "center", width: "100%"}}>
            {blogs.length ? blogs.map(user => <UserCard name={user.login} imageUrl={user.avatar_url} description={user.type} id={user.id} key={user.id} />) : <h1>No Blogs found</h1>}
        </div>
    </>
}

export default Blogs;