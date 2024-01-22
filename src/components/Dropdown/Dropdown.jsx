import { useCallback, useEffect, useRef } from "react";
import { DropdownWrapper } from "./Dropdown.styled";

export const Dropdown = ({ data, changeFilter, setIsOpen }) => {
  const node = useRef();

  const handleEscPress = useCallback(
    (e) => {
      if (e.code.toLowerCase() === "escape") setIsOpen(false);
    },
    [setIsOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscPress);
    return () => {
      document.removeEventListener("keydown", handleEscPress);
    };
  }, [handleEscPress]);

  return (
    <DropdownWrapper ref={node}>
      <ul>
        {data.map((el) => (
          <li key={el}>
            <button
              onClick={(e) => {
                e.preventDefault();
                changeFilter(el);
                setIsOpen(false);
              }}
            >
              {el}
            </button>
          </li>
        ))}
      </ul>
    </DropdownWrapper>
  );
};
