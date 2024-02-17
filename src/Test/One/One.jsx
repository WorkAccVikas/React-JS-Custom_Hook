import { useEffect } from "react";

const style = {
  padding: "10px 30px",
  border: "1px solid black",
};

function One() {
  useEffect(() => {
    const handleDocumentClick = () => {
      alert("document click");
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleOuterClick = () => {
    alert("outer click");
  };

  const handleInnerClick = () => {
    alert("inner click");
  };

  return (
    <div style={style} onClick={handleOuterClick}>
      <div style={style} onClick={handleInnerClick}>
        Click Me
      </div>
    </div>
  );
}

export default One;

/** DESC :
 *  - Learn about Event Bubbling
 */
