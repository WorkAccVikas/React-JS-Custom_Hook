import { useState } from "react";
import "./styles.css";
import { useRef } from "react";
import useOutsideClick from "./useOutsideClick.hook";

const style = {
  padding: "10px",
  border: "1px solid black",
  display: "flex",
  justifyContent: "space-between",
};

function One() {
  const [count, setCount] = useState(0);

  const handleClickOutside = () => {
    console.log("Outside click");
    setCount(0);
  };

  const ref = useOutsideClick(handleClickOutside);

  const handleClick = (event) => {
    console.log("Button click");
    event.stopPropagation();
    setCount((state) => state + 1);
  };

  const handleHeaderClick = () => {
    console.log("Header clicked");
  };

  return (
    <div style={style} onClick={handleHeaderClick}>
      <div>Header</div>
      <button ref={ref} type="button" onClick={handleClick}>
        Count: {count}
      </button>
    </div>
  );
}
export default One;
