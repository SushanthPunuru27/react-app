import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
//created custom hook useRestaurantMenu
import { items_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <div className="res-items-containers">
        {itemCards.map((items) => (
          <div className="res-items" style={{ backgroundColor: "lightgrey" }}>
            <img
              key={items.card.info.id}
              className="res-items-img"
              alt="item-img"
              src={items_URL + items.card.info.imageId}
            />
            {items.card.info.name} - {"Rs."}{" "}
            {items.card.info.price / 100 || items.card.info.defaultPrice / 100}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
