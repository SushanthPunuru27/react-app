import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
import resList from "../utils/data";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import checkOnlineStatus from "../utils/checkOnlineStatus";

function filterData(searchText, listOfRestaurants) {
  const filtered = listOfRestaurants.filter((rest) =>
    rest?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filtered;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = checkOnlineStatus();

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2704628&lng=72.8709166&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (onlineStatus === false) {
    return <h1>Looks like you are offline. Check your network connection</h1>;
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const updatedList = allRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setFilteredRestaurants(updatedList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-containers">
        {/* <RestaurantCards resData={resList[0]} /> */}
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="res-containers-link"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCards resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
