import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // eslint-disable-next-line no-unused-vars
  const handelAddToCart = (item) => {
    
    if (user) {
      const cartItem = {menuItemId: _id, name, image, price};
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
    else{
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'login now'
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login', {state: {from: location}});
        }
      })
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-600 absolute top-0 text-white p-1 rounded-sm right-0 mr-4 mt-4">
        {price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handelAddToCart(item)} className="btn btn-outline border-0 border-b-4 border-orange-400">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
