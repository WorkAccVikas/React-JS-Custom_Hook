import { useEffect } from "react";

const styleHeader = {
  padding: "10px",
  border: "1px solid black",
  boxSizing: "border-box",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
};

function Four() {
  const handleHeaderClick = () => {
    alert("header click (e.g. navigate to home page)");
  };

  const handleButtonClick = (event) => {
    alert("button click (e.g. log out user)");

    // important: stops event from appearing
    // in the document's event handler
    event.stopPropagation();
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      alert(`
        document clicked - \n
    run analytics for clicked element: ${event.target.tagName}
      `);
    };

    document.addEventListener("click", handleDocumentClick, true);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, []);

  return (
    <>
      <div style={styleHeader} onClick={handleHeaderClick}>
        <div>Header</div>
        <button type="button" onClick={handleButtonClick}>
          Log Out
        </button>
      </div>
    </>
  );
}

export default Four;

// DESC : stop event capturing
