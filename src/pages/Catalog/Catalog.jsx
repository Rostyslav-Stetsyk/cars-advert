import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/operations";
import {
  carListSelect,
  carLoadingSelect,
  noMoreSelect,
} from "../../redux/selectors";
import { CarCard } from "../../components/CarCard/CarCard";
import { FilterForm } from "../../components/FilterForm/FilterForm";

export const Catalog = () => {
  const dispatch = useDispatch();

  const carList = useSelector(carListSelect);
  const isLoading = useSelector(carLoadingSelect);
  const noMore = useSelector(noMoreSelect);

  const controllerRef = useRef();

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (carList.length) {
      return;
    }

    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    dispatch(getCars({ signal }));

    return () => controllerRef.current.abort();
  }, [dispatch, page, carList]);

  useEffect(() => {
    if (page === 1) return;

    controllerRef.current.abort();
    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    dispatch(getCars({ page, signal }));
    return () => controllerRef.current.abort();
  }, [dispatch, page]);

  return (
    <>
      <FilterForm />
      <ul>
        {carList.map((el) => {
          return <CarCard key={el.id} car={el} />;
        })}
      </ul>
      {!noMore && (
        <button
          disabled={isLoading}
          onClick={() => {
            setPage((prevPage) => prevPage + 1);
          }}
        >
          Load more
        </button>
      )}
    </>
  );
};
