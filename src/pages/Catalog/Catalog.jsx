import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/operations";
import {
  carListSelect,
  carLoadingSelect,
  noMoreSelect,
  pageSelect,
} from "../../redux/selectors";
import { CarCard } from "../../components/CarCard/CarCard";
import { FilterForm } from "../../components/FilterForm/FilterForm";
import { CatalogList, CatalogWrapper, LoadMoreButton } from "./Catalog.styled";
import { changeFilter } from "../../redux/filterSlice";

export const Catalog = () => {
  const dispatch = useDispatch();

  const carList = useSelector(carListSelect);
  const isLoading = useSelector(carLoadingSelect);
  const noMore = useSelector(noMoreSelect);
  const page = useSelector(pageSelect);

  const controllerRef = useRef();

  useEffect(() => {
    if (carList.length) {
      return;
    }

    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    dispatch(getCars({ signal, page }));

    return () => controllerRef.current.abort();
  }, [dispatch, page, carList]);

  useEffect(() => {
    if (page === 1) return;

    controllerRef.current.abort();
    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    dispatch(getCars({ signal, page }));
    return () => controllerRef.current.abort();
  }, [dispatch, page]);

  return (
    <CatalogWrapper>
      <FilterForm />
      <CatalogList>
        {carList.map((el) => {
          return <CarCard key={el.id} car={el} />;
        })}
      </CatalogList>
      {!noMore && (
        <LoadMoreButton
          disabled={isLoading}
          onClick={() => {
            dispatch(changeFilter({ page: page + 1 }));
          }}
        >
          Load more
        </LoadMoreButton>
      )}
    </CatalogWrapper>
  );
};
