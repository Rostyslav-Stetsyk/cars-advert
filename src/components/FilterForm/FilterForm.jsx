import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import { useState } from "react";
import {
  ButtonSearch,
  StyledFieldSet,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./FilterForm.styled";
import carBrand from "../../data/carBrend.json";
import { Dropdown } from "../Dropdown/Dropdown";

export const FilterForm = () => {
  const dispatch = useDispatch();

  const [dropDownVisible, setDropDownVisible] = useState(false);
  const [make, setMake] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const carBrandFiltered = carBrand.filter((brand) => brand.includes(make));

  return (
    <StyledForm>
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
      <ButtonSearch
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          dispatch(changeFilter({ make }));
        }}
      >
        Search
      </ButtonSearch>
    </StyledForm>
  );
};
