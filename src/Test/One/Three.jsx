import { useEffect } from "react";

const style = {
  padding: "10px 30px",
  border: "1px solid black",
};

function Three() {
  const handleOuterClick = () => {
    alert("outer click");
  };

  const handleInnerClick = () => {
    alert("inner click");
  };

  useEffect(() => {
    const handleDocumentClick = () => {
      alert("document click");
    };

    document.addEventListener("click", handleDocumentClick, true);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, []);

  return (
    <div style={style} onClickCapture={handleOuterClick}>
      <div style={style} onClickCapture={handleInnerClick}>
        Click Me
      </div>
    </div>
  );
}

export default Three;

/** DESC : Learn Event Capturing
 *  - If we use onClick in both div and click on Click Me
 *      - Output : document, inner, outer
 *  - If we use onClickCapture in both div and click on Click Me
 *      - Output : document, outer, inner
 */
