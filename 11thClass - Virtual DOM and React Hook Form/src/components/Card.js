function Card({children, className, onClick }) {
    
    return <div onClick={onClick} className={className} style={{border: "1px solid lightgray", display: "block", padding: "10px", borderRadius: "10px", width: "30%", cursor: "pointer" }}>
        {children}
    </div>
}

export default Card;