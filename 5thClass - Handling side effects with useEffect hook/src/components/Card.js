
function Card({ children}) {
    return <div style={{ background: "white", width: "40%", padding: "20px", borderRadius: "8px", marginTop: "10px"}}>
        {children}
    </div>
}

export default Card;