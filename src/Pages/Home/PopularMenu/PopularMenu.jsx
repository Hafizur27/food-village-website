
import SectionTitle from "../../Shared/Components/SectionTitle/SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((items) => items.category === "popular");
  return (
    <div className="mb-10">
      <SectionTitle
        subHeading={"From Our Menu"}
        heading={"Popular Items"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {popular?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
