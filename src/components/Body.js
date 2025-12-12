import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
const Body = () => {
  const[searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [resList, setResList] = useState([]);
  
  // USE EFFECT TO FETCH
  
  useEffect(()=> {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch("http://localhost:4000/api/restaurants");
    const json = await data.json();

    setAllRestaurants(
      json.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
    setResList(
      json.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };
  
    if(resList.length === 0) {
    return <div>
      <Shimmer/>
    </div>
  }


  return (
    <div className="body">
      <div className="filter">

        {/* input Text BOx */}

        <input type="text" className="search-box"  value={searchText} 
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        />

        {/* Search Button */}

        <button onClick={() => {
          const filterSearch = allRestaurants.filter((res) => {
            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
          })
          setResList(filterSearch);
        }
        }>Search</button>

        {/* Filter Button */}

        <button
          className="filter-btn"
          onClick={() => {
            let filteredRes = allRestaurants.filter(r => r.info.avgRating > 4.3);
            setResList(filteredRes);
          }}
        >
          Top Rated Restaurants </button>
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
