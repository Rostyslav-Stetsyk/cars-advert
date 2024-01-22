import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import { useState } from "react";
import { StyledForm } from "./FilterForm.styled";

export const FilterForm = () => {
  const dispatch = useDispatch();

  const [make, setMake] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  return (
    <StyledForm>
      <label>
        Car brand
        <input
          type=""
          value={make}
          onChange={(e) => setMake(e.currentTarget.value)}
        />
      </label>
      <label>
        Price / 1 hour
        <input
          type="number"
          value={rentalPrice}
          onChange={(e) => setRentalPrice(e.currentTarget.value)}
        />
      </label>
      <fieldset>
        <legend>Car mileage / km</legend>
        <label>
          From
          <input
            type="number"
            value={minMileage}
            onChange={(e) => setMinMileage(e.currentTarget.value)}
          />
        </label>
        <label>
          To
          <input
            type="number"
            value={maxMileage}
            onChange={(e) => setMaxMileage(e.currentTarget.value)}
          />
        </label>
      </fieldset>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          dispatch(changeFilter({ make }));
        }}
      >
        Search
      </button>
    </StyledForm>
  );
};
