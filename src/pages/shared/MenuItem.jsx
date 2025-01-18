
const MenuItem = ({item}) => {
    const { name, image, price, recipe} = item;
  return (
    <div className="flex gap-5">
      <img className="w-16 h-16" style={{borderRadius: "0px 50px 50px 50px"}}src={image} alt="food" />
      <div className="w-96">
        <h1 className="text-xl font-bold">{name}----------------</h1>
        <p>
            {recipe}
        </p>
      </div>
      <div>
        <p className="text-orange-400">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;