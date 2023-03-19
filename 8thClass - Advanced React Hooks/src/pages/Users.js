import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import UserCard from "../components/UserCard";

function Users() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([]);

    async function getAllUsers() {
        try {
            const response = await fetch("https://api.github.com/users");
            const usersData = await response.json();
            console.log(usersData);
            setUsers(usersData);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAllUsers();
    }, [])

    function seeUserDetails(id) {
        navigate(`/users/${id}`);
    }

    return <>
        <Navbar />
        <div style={{ dislay: "flex", flexDirection: "column", gap: "20px", alignItems: "center", width: "100%"}}>
            {users.length && users.map(user => <UserCard name={user.login} imageUrl={user.avatar_url} description={user.type} seeUserDetails={seeUserDetails} id={user.id} key={user.id} />)}
        </div>
    </>
}

export default Users;