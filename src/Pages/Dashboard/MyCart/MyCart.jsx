import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";


const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
  
    const handleDelete = item => {
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.isConfirmed) {
              fetch(`http://localhost:5000/carts/${item._id}`, {
                  method: 'DELETE'
              })
                  .then(res => res.json())
                  .then(data => {
                      if (data.deletedCount > 0) {
                          refetch();
                          Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                          )
                      }
                  })
          }
      })
  }
  
    return (
        <div>
      <Helmet>
        <title>Bistro | My cart</title>
      </Helmet>
      <div className="uppercase font-bold h-10 flex justify-evenly items-center">
        <p className="text-3xl">Total Items : {cart.length}</p>
        <p className="text-3xl">Total price : $ {total}</p>
        <Link to='/dashboard/payment'><button className="btn btn-warning btn-sm">pay</button></Link>
      </div>
      <div className="overflow-x-auto overflow-y-auto w-full">
        <table className="table w-full">
        
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           
            {
                cart.map((item, index) => <tr key={item._id}>
                <td>
                  {index + 1}
                </td>
                <td>
                
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    
                 
                </td>
                <td>
                  {item.name}
                </td>
                <td className="text-end">$ {item.price}</td>
                <td>
                  <button onClick={() => handleDelete (item)} className="btn btn-ghost btn-sm text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyCart;