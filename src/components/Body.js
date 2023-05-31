import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
import resList from "../utils/data";
import Shimmer from "./Shimmer";

function filterData(searchText, listOfRestaurants) {
    const filtered = listOfRestaurants.filter(
        (rest) => rest?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    )
    return filtered
}

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    
    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2704628&lng=72.8709166&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

    }
    return (allRestaurants.length === 0) ? <Shimmer /> : (
        <div className="body">
            <div className="search-bar">
                <input type="text" className="search-input" placeholder="Search" 
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
                ></input>
            <button className="search-btn" onClick={() => {
                    const data = filterData(searchText, allRestaurants);
                    setFilteredRestaurants(data);
                }
                }>
                    search
                </button>
            </div> 
            <div className="filter">
                <button className="filter-btn" onClick={ () => {
                    const updatedList = allRestaurants.filter(
                        (res) => res.data.avgRating >= 4
                    );
                    setFilteredRestaurants(updatedList);
                }
                }
                >   
                    Top Restaurants
                </button>
            </div>
            <div className="res-containers">
              {/* <RestaurantCards resData={resList[0]} /> */}
              {
                filteredRestaurants.map((restaurant) => 
                (<RestaurantCards key={restaurant.data.id} resData={restaurant}/>)
              )}
            </div>
        </div>
    );
};

export default Body;