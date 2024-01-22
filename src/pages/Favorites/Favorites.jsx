import { useSelector } from "react-redux";
import { CarCard } from "../../components/CarCard/CarCard";
import { CatalogList } from "../Catalog/Catalog.styled";
import { favoriteCarsSelect } from "../../redux/selectors";

export const Favorites = () => {
  const favoriteCarList = useSelector(favoriteCarsSelect);
  return (
    <>
      <CatalogList>
        {favoriteCarList.map((el) => {
          return <CarCard key={el.id} car={el} />;
        })}
      </CatalogList>
    </>
  );
};
