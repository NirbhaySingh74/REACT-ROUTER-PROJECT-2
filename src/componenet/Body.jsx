import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [data, setData] = useState(null);

  async function getData() {
    try {
      const result = await fetch("https://fakestoreapi.com/products");
      const json = await result.json();
      setData(json);
    } catch (error) {
      console.log("Error", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data === null ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center m-4">
          {data.map((item) => (
            <div key={item.id} className="m-3" style={{ minWidth: "300px" }}>
              <Link to={`products/${item.id}`}>
                <div className="w-64 h-full shadow-lg cursor-pointer flex flex-col justify-center items-center rounded-sm p-4 bg-white flex-shrink-0">
                  <img
                    src={item.image}
                    alt=""
                    className="w-40 h-40 object-cover rounded-lg mb-4"
                  />
                  <div className="flex flex-col flex-grow justify-between ">
                    <div>
                      <p className="text-lg font-semibold">{item.title}</p>
                      <p className="text-gray-500">{item.category}</p>
                      <div className="flex items-center mt-2">
                        <span className="text-yellow-500 mr-1">
                          {item.rating.rate}⭐
                        </span>
                        <span className="text-gray-600">
                          ({item.rating.count})
                        </span>
                      </div>
                    </div>
                    <p className="text-xl font-semibold">${item.price}</p>
                    <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
