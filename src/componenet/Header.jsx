import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between bg-blue-100 p-2 text-black">
      <div className="w-1/4">
        <Link to="/">
          <img
            className="w-20 bg-transparent"
            src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png"
            alt=""
          />
        </Link>
      </div>
      <ul className="flex justify-center items-center mr-24 gap-28 w-full cursor-pointer font-bold">
        <li>Home</li>
        <li>About</li>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </div>
  );
};
export default Header;
