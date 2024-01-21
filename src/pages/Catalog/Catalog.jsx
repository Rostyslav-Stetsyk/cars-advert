import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/operations";
import { carListSelect } from "../../redux/selectors";
import { CarCard } from "../../components/CarCard/CarCard";

export const Catalog = () => {
  const dispatch = useDispatch();
  const carList = useSelector(carListSelect);
  const controllerRef = useRef();

  const [page, setPage] = useState(1);

  useEffect(() => {
    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;
    dispatch(getCars({ page, signal }));

    return () => controllerRef.current.abort();
  }, [dispatch, page]);

  return (
    <>
      {console.log(carList.length === 0 || page > 1)}
      <ul>
        {carList.map((el) => {
          return <CarCard key={el.id} car={el} />;
        })}
      </ul>
      <button onClick={() => setPage((state) => state + 1)}>Load more</button>
    </>
  );
};
