import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import Navbar from "../components/Navbar";
import UserCard from "../components/UserCard";

function UserDetails() {
    const navigate = useNavigate()

    const { userId } = useParams();
    const [user, setUser] = useState(null);

    async function getAllUsers() {
        try {
            const response = await fetch(`https://api.github.com/users/${userId}`);
            const userData = await response.json();
            console.log(userData);
            setUser(userData);
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
            {user && <UserCard name={user.name} imageUrl={user.avatar_url} description={user.type} seeUserDetails={seeUserDetails} id={user.id} key={user.id} />}
        </div>
    </>
}

export default UserDetails;