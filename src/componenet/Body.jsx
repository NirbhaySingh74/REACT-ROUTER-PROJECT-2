import { useEffect, useState } from "react";

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

  console.log(data);
  return <div>Body</div>;
};

export default Body;
