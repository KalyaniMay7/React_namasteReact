import RestaurantCard from "./RestaurantCard";
import restrautList from "../utils/mockData";
import {useState}from "react";
const Body = () => {
//State variable - normal super powerful variable
const [listOfRestaurants, setListOfRestaurants] = useState(restrautList);
  return(
    <div className = "body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{

         const filteredRestaurants = listOfRestaurants.filter(r => r.data.avgRating > 3.9);
         setListOfRestaurants(filteredRestaurants);
         console.log(listOfRestaurants);}}>
          Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          const { id, name, cuisines, cloudinaryImageId, costForTwoString } = restaurant.data;
          return (
            <RestaurantCard
              key={id}
              name={name}
              cuisines={cuisines.join(", ")}
              cloudinaryImageId={cloudinaryImageId}
              costForTwoString={costForTwoString}
            />
          );
        })}
      </div> 
    </div>
  )
}

export default Body;