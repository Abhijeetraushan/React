import { IMG_CDN_URL } from "../utility/constant";

const  Card=(props)=>{
    const {resData}=props;
    
    const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

    return(<div className='card'>
    <img className='img' src={IMG_CDN_URL+cloudinaryImageId}/>
        <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>)
}
export default Card;