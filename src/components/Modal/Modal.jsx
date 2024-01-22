import spryte from "../../img/spryte.svg";
import noImg from "../../img/noImg.png";
import {
  ButtonCross,
  CarSpecifications,
  Condition,
  ConditionList,
  Description,
  ModalButtonStyled,
  StyledModal,
  Titel,
} from "./Modal.styled";

export const Modal = ({ isOpen, onRequestClose, car }) => {
  const {
    address,
    type,
    mileage,
    functionalities,
    img = noImg,
    make,
    model,
    year,
    rentalPrice,
    id,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
  } = car;

  const adressArr = address.split(",").map((el) => el.trim());
  const carSpecifications = [
    ...adressArr,
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ];
  const rentalConditionsArr = rentalConditions.split("\n");
  const formatedMileage = `${mileage / 1000}`.replace(".", ",");

  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{ overlay: { backgroundColor: "#12141780" } }}
    >
      <ButtonCross type="button" onClick={onRequestClose}>
        <svg width="24" height="24">
          <use href={spryte + "#icon-x"}></use>
        </svg>
      </ButtonCross>
      <img
        src={img}
        alt={make + " " + model}
        onError={(e) => (e.target.src = noImg)}
      />
      <div>
        <Titel>
          <h3>
            {make} <span>{model}</span>, {year}
          </h3>
        </Titel>
        <CarSpecifications>{carSpecifications.join(" | ")}</CarSpecifications>
        <Description>{description}</Description>
        <h4>Accessories and functionalities:</h4>
        <CarSpecifications>
          {[...accessories, ...functionalities].join(" | ")}
        </CarSpecifications>
        <h4>Rental Conditions:</h4>
        <ConditionList>
          {rentalConditionsArr.map((el) => (
            <Condition key={el}>{el}</Condition>
          ))}
          <Condition key={"mileage"}>
            Mileage: <span>{formatedMileage}</span>
          </Condition>
          <Condition key={"price"}>
            Price: <span>{rentalPrice.slice(1)}$</span>
          </Condition>
        </ConditionList>
        <ModalButtonStyled href="tel:+380730000000">
          Rental car
        </ModalButtonStyled>
      </div>
    </StyledModal>
  );
};
