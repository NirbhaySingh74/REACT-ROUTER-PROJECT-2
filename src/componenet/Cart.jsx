import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../utils/cartSlice";

const Cart = () => {
  const productData = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const removeProductData = (item) => {
    dispatch(removeProduct(item));
  };
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-6">Your Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productData.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">Category: {product.category}</p>
              <p className="text-gray-700 font-semibold mb-2">
                Price: ${product.price}
              </p>
              {/* Add more product details as needed */}
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out" onClick={() => removeProductData(product.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
