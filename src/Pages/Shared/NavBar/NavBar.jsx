import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () =>{
    logOut()
    .then(()=> {})
    .catch(error => console.log(error));
  }
  const navOption = (
    <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/menu'>Our Menu</Link></li>
      <li><Link to='/order/salad'>Order Menu</Link></li>
      <li><Link to='/order/salad'>Order Menu</Link></li>
      <li>
        <Link to='/dashboard/myCart'>
          <button className="btn gap-2">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
      
      {
        user ? <>
        <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
        </> : <>
        <li><Link to='/logIn'>Log In</Link></li>
        </>
      }
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-black bg-opacity-30 max-w-screen-lg text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <a className="normal-case text-xl">Food Village</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
