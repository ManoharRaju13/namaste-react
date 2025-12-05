import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";

const Body = () => {

  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:4000/api/restaurants");
    const json = await data.json();

    setResList(
      json.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  return (
    <div className="body">

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredRes = resList.filter(r => r.info.avgRating > 4.3);
            setResList(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {resList.map((item) => (
          <RestaurentCard
            key={item.info.id}
            data={item.info}
          />
        ))}
      </div>

    </div>
  );
};

export default Body;
