import ItemList from "../utility/mockData";
import Card from "./Card";
import { useState } from "react";

const Body=()=>{
    const [restaurant,setResataurant]=useState(ItemList);
    return(
        <div className='body'>
            <div className='search'>
                    <button className="filter-btn" onClick={()=>{const data=ItemList.filter((item)=>(item.data.avgRating>4));
                    setResataurant(data);
                    }}>Filter</button>
            </div>
            <div className="card-container">
                   {
                        restaurant.map((item)=>(
                            <Card key={item.data.id} resData={item}/>
                        ))
                        
                   } 
            </div>
        </div>
    )
}

export default Body;