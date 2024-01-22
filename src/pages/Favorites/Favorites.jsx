import { CarCard } from "../../components/CarCard/CarCard";
import { CatalogList } from "../Catalog/Catalog.styled";

export const Favorites = () => {
  const favoriteCarList = [];
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
