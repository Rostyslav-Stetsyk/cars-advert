import { useState } from "react";
import noImg from "../../img/noImg.png";
import {
  CarItem,
  DescWrapper,
  ImgWrapper,
  TitelAndPrice,
} from "./CarCard.styled";
import spryte from "../../img/spryte.svg";
import { ButtonStyled } from "../FilterForm/FilterForm.styled";

export const CarCard = ({ car }) => {
  const {
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
    img = noImg,
    make,
    model,
    year,
    rentalPrice,
  } = car;

  const [active, setActive] = useState(false);
  const adressArr = address.split(",").map((el) => el.trim());
  const formatedMileage = `${mileage / 1000}`.replace(".", ",");

  const carSpecifications = [
    ...adressArr.slice(1),
    rentalCompany,
    type,
    formatedMileage,
    ...functionalities,
  ];

  const toogleActive = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <CarItem>
      <div>
        <ImgWrapper>
          <img src={img} alt={make + " " + model} />
          <button onClick={toogleActive}>
            <svg width="18" height="18">
              {active ? (
                <use href={spryte + "#icon-active"}></use>
              ) : (
                <use href={spryte + "#icon-normal"}></use>
              )}
            </svg>
          </button>
        </ImgWrapper>
        <DescWrapper>
          <TitelAndPrice>
            <h3>
              {make} <span>{model}</span>, {year}
            </h3>
            <span>{rentalPrice}</span>
          </TitelAndPrice>
          <p>{carSpecifications.join(" | ")}</p>
        </DescWrapper>
      </div>
      <ButtonStyled type="button">Learn more</ButtonStyled>
    </CarItem>
  );
};
