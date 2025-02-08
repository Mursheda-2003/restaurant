import { useContext } from "react";
import PrimaryButton from "../../Components/PrimaryButton";
import { AuthContext } from "../../providers/AuthProvider";
import usePublic from "../../hooks/usePublic";

const OurShopCard = ({food}) => {
  const axiosPublic = usePublic()
    const {user} = useContext(AuthContext)
    // console.log(user?.email)
    const{name, price, image, recipe, _id} = food;
    const handleSingleFood = () => {
      const foodData = {
        email:user?.email,
        foodId: _id,
        name,
        image,
        price
      }
      axiosPublic.post('/order', foodData)
      .then(res=>{
        console.log(res)
      })
             console.log(foodData)
    }
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt=""
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <p className="bg-rose-400 px-3 py-2 rounded text-white absolute right-8 top-10">${price}</p>
    <h2 className="card-title relative">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button onClick={handleSingleFood}>
      <PrimaryButton 
      title="Add to Card"></PrimaryButton>
      </button>
    </div>
  </div>
</div>
  );
};

export default OurShopCard;