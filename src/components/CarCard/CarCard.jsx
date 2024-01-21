import noImg from "../../img/noImg.png";

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
  const adressArr = address.split(",").map((el) => el.trim());

  const carSpecifications = [
    ...adressArr.slice(1),
    rentalCompany,
    type,
    mileage,
    ...functionalities,
  ];

  return (
    <li>
      <div>
        <img src={img} alt={make + " " + model} width="274" />
      </div>
      <div>
        <h3>
          {make} <span>{model}</span>, {year}
        </h3>
        <span>{rentalPrice}</span>
        <p>{carSpecifications.join(" | ")}</p>
      </div>
      <button type="button">Learn more</button>
    </li>
  );
};
