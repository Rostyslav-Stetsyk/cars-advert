import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCars } from "../../redux/operations";

export const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return <ul></ul>;
};
