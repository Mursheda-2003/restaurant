import { useState } from "react";
import MenuItem from "../shared/MenuItem";

const Menu = () => {
    const [menu, setMenu] = useState([])
    fetch("menu.json")
    .then(res=> res.json())
    .then(data=> {
      const dessert = data.filter(food => food.category === "dessert")
        setMenu(dessert)
        // console.log(dessert)
        })

  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
      {
        menu.map(item=>
        <MenuItem
        Key={item._id}
         item={item}></MenuItem>
          
        )
      }
    </div>
  );
};

export default Menu;