const RestaurentCard = (props) => {

 const {
  name,
  avgRating,
  locality,
  areaName,
  cuisines,
  cloudinaryImageId
} = props.data;

  return (
    <div className="res-card">
      <img
        className="res-card-logo"
         src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{locality}</h4>
      <h4>{areaName}</h4>
      <h4>{cuisines?.join(", ")}</h4>
    </div>
  );
};

export default RestaurentCard;
