import Card from "./Card";

function CityCard({ title, description, imageUrl, onChangeCityClick, resetHandler }) {

    const defaultTitle = "Lahore";
    const defaultDescription = "The city of foods";

    return <Card>
        <img src={imageUrl ? imageUrl :"https://www.visitpk.com/wp-content/uploads/2019/09/interesting-facts-about-peshawar-pakistan-scaled.jpg"} />
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={onChangeCityClick}>Change City</button>
        <button onClick={() => {
            resetHandler({ defaultTitle, defaultDescription })
        }}>Reset</button>
    </Card>
}

export default CityCard;