import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import { useRef, useState } from "react";
import {
  ButtonStyled,
  StyledFieldSet,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./FilterForm.styled";
import carBrand from "../../data/carBrand.json";
import { Dropdown } from "../Dropdown/Dropdown";
import { getCars } from "../../redux/operations";

export const FilterForm = () => {
  const dispatch = useDispatch();
  const controllerRef = useRef();

  const [dropDownVisible, setDropDownVisible] = useState(false);
  const [make, setMake] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const carBrandFiltered = carBrand.filter((brand) => brand.includes(make));

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(changeFilter({ make, page: 1 }));

        controllerRef.current = new AbortController();
        const signal = controllerRef.current.signal;

        dispatch(getCars({ signal, page: 1 }));
      }}
    >
      <StyledLabel
        onFocus={() => setDropDownVisible(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setDropDownVisible(false);
          }
        }}
      >
        Car brand
        <StyledInput
          type="text"
          placeholder="Enter the text"
          value={make}
          onChange={(e) => setMake(e.currentTarget.value)}
          id="carBrand"
        />
        {dropDownVisible && (
          <Dropdown
            data={carBrandFiltered}
            changeFilter={setMake}
            setIsOpen={setDropDownVisible}
          />
        )}
      </StyledLabel>
      <StyledLabel>
        Price / 1 hour
        <StyledInput
          placeholder="30"
          type="number"
          value={rentalPrice}
          onChange={(e) => setRentalPrice(e.currentTarget.value)}
          id="perHour"
        />
      </StyledLabel>
      <StyledFieldSet>
        <legend>Car mileage / km</legend>
        <StyledLabel>
          From
          <StyledInput
            type="number"
            value={minMileage}
            onChange={(e) => setMinMileage(e.currentTarget.value)}
            id="minMileage"
          />
        </StyledLabel>
        <StyledLabel>
          To
          <StyledInput
            type="number"
            value={maxMileage}
            onChange={(e) => setMaxMileage(e.currentTarget.value)}
            id="maxMileage"
          />
        </StyledLabel>
      </StyledFieldSet>
      <ButtonStyled type="submit">Search</ButtonStyled>
    </StyledForm>
  );
};
