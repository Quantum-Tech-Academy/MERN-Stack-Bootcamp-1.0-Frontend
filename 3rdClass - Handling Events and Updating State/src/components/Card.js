function Card({children }) {
    
    return <div style={{ width: "250px", border: "1px solid lightgray", display: "inline-block", padding: "10px", margin: "10px", borderRadius: "10px"}}>
        {children}
    </div>
}

export default Card;