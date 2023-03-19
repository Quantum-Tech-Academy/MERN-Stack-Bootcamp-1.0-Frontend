import Card from "./Card";

function UserCard({ name, description, points, imageUrl, id, seeUserDetails}) {
    return (
        <Card className={"mt-3"} onClick={() => seeUserDetails(id)}>
          <div className="flex justify-content-between">
            <div className="flex">
              <img
                className="card-image"
                src={imageUrl || "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-set-avatar-image-vector-icon-stock-vector-design-avatar-dummy-sign-137159692.jpg"}
              />
              <div style={{ marginLeft: "20px", textAlign: "left"}}>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </div>
            <div>
              <h2 style={{ marginRight: "20px", color: "orange"}}>{points}</h2>
            </div>
          </div>
        </Card>
    );
}

export default UserCard;