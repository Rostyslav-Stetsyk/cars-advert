import notFoundImg from "../../img/404.png";

export const NotFound = () => {
  return (
    <>
      <h1>404 Not found!</h1>
      <img src={notFoundImg} alt="Not found" />
    </>
  );
};
