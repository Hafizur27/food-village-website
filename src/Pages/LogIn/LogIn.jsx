import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PhoneLogIn from "../Shared/Components/PhoneLogIn/PhoneLogIn";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const LogIn = () => {

  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result => {
          const user = result.user;
          console.log(user);
          Swal.fire({
            title: 'user login successfully',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
          navigate(from, {replace: true});
        })
        .catch(error => {
          console.log(error.message)
        })
    }
    return (
        <>
      <Helmet>
        <title>log In</title>
      </Helmet>
          <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form className="card-body"  onSubmit={handleLogIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered w-3/4" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"
                name='password' placeholder="password" className="input input-bordered w-3/4" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
             
              <div className="form-control mt-6 w-3/4">
                <input type="submit" disabled={false} value="Login" className='btn btn-primary'/>
              </div>
            </form>
            <p><small>new here? <Link to='/signUp'>create an account</Link></small></p>
            <PhoneLogIn></PhoneLogIn>
          </div>
        </div>
      </div>
      </>
    );
};

export default LogIn;