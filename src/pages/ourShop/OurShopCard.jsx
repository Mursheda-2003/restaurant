import PrimaryButton from "../../Components/PrimaryButton";

const OurShopCard = ({food}) => {
    const{name, price, image, recipe} = food;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt=""
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <p className="bg-rose-400 p-2 rounded text-white absolute right-0 top-0 mt-10">${price}</p>
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <PrimaryButton 
      title="Add to Card"></PrimaryButton>
    </div>
  </div>
</div>
  );
};

export default OurShopCard;