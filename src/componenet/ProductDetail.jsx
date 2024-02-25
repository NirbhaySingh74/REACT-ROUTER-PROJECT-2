import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

function ProductDetail() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const result = await response.json();
      setProductData(result);
    } catch (error) {
      console.log("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="container mx-auto mt-8">
      {productData ? (
        <div className="flex justify-center">
          <div className="max-w-md w-full">
            <img
              src={productData.image}
              alt={productData.title}
              className="w-full rounded-lg mb-4"
            />
            <h1 className="text-2xl font-bold mb-2">{productData.title}</h1>
            <p className="text-gray-600 mb-4">{productData.category}</p>
            <p className="text-gray-700 mb-4">{productData.description}</p>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <p className="text-lg font-semibold">${productData.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out mt-4 sm:mt-0">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
}

export default ProductDetail;
