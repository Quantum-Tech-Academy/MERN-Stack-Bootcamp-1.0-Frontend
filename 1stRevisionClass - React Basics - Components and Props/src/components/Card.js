function Card({ title, description }) {
    
    return <div style={{ height: "300px", width: "250px", border: "1px solid lightgray", display: "inline-block", padding: "10px", margin: "10px"}}>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
}

export default Card;