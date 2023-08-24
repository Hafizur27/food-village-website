import { Link } from "react-router-dom";
import MenuItem from "../../Home/PopularMenu/MenuItem";
import Cover from "../../Shared/Components/Cover/Cover";


const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className='pt-8'>
           { title &&  <Cover img={coverImg}  title={title}></Cover>}
             <div className='grid md:grid-cols-2 gap-6 my-12'>
                {
                    items.map(item =><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><button className='btn btn-outline border-0 border-b-4'>Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;