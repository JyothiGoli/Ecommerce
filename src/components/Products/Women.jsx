import { Women } from "../Data/Women";
const WomenProduct = ({ handleCart }) => {
  const items = Women;
  return (
    <>
      <div className="item-container">
        {items.map((list, index) => (
          <div key={index} className="card">
            <img src={list.images} alt={list.title} />
            <div>
              <h1 className="text">{list.title}</h1>
              <h3 className="price">{list.price}/-</h3>
              <br></br>
              <div className="addToCart">
                <button onClick={() => handleCart(list)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default WomenProduct;
