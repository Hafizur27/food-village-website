import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Components/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg';
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../Shared/Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');

  return (
    <div>
      <Helmet>
        <title>Food Menu</title>
      </Helmet>
      <Cover img={menuImg}  title={'Our Menu'}></Cover>
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={desserts} title='dessert' coverImg={dessertImg}></MenuCategory>
      <MenuCategory items={pizza} title='pizza' coverImg={pizzaImg}></MenuCategory>
      <MenuCategory items={soup} title='soup' coverImg={soupImg}></MenuCategory>
      <MenuCategory items={salad} title='salad' coverImg={saladImg}></MenuCategory>
    </div>
  );
};

export default Menu;
