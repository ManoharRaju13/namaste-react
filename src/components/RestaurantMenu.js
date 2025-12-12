import { useEffect } from "react";
const RestaurantMenu = () => {
useEffect(() => {
  fetch("http://localhost:4000/api/menu")
    .then(res => res.json())
    .then(data => setMenu(data));
},[])

    return (
        <div>

            <div>
                <h1>Restaurant Name</h1>
            </div>

            <div>
            <li>Biryani</li>
            <li>Partota</li>
            <li>veg manhcuri</li>
            <li>Biryani</li>
            <li>Biryani</li>
            </div>

        </div>
    )
}
export default RestaurantMenu; 