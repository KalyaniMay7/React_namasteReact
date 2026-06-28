import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, costForTwoString }) => {
  return(
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{costForTwoString} </h4>
      </div>
  )
}
export default RestaurantCard;