import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId} = resData.data;
    return (
        <div className="res-card" style={{backgroundColor:"lightgrey"}}>
            <img 
            className="res-logo"
            alt="reslogo" src={CDN_URL +
            cloudinaryImageId }/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>₹{costForTwo / 100} for Two</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
};

export default RestaurantCards;