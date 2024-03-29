import { useQuery } from '@tanstack/react-query';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from './UseAxiosSecure';


const useCart = () => {
   const {user, loading} = useContext(AuthContext);

   const [axiosSecure] = useAxiosSecure();

   const {  data: cart = [], refetch } = useQuery({
       queryKey: ['carts', user?.email],
       enabled: !loading,
       queryFn: async () => {
           const res = await axiosSecure(`/carts?email=${user?.email}`);
           return res.data;
       },
   })

   return [cart, refetch];
};

export default useCart;