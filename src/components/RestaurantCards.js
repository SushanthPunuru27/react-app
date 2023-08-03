import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData.info;
  return (
    <div className="res-card" style={{ backgroundColor: "lightgrey" }}>
      <img
        className="res-logo"
        alt="reslogo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins for delivery</h4>
    </div>
  );
};

export default RestaurantCards;
