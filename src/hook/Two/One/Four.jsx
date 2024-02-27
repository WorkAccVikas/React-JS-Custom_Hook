import { useState } from "react";
import useDebounce2 from "./useDebounce2";

async function fetchDataFromAPI(query) {
  console.log("Fetching data from API..... for query = ", query);
  const response = await fetch(
    `https://demo.dataverse.org/api/search?q=${query}`
  );
  const data = await response.json();
  return data.data.items;
}

function Four() {
  const [search, setSearch] = useState("");

  console.log("Four re-render");

  const handleDebounce = useDebounce2(async (term) => {
    const result = await fetchDataFromAPI(term);
    console.log("Result = ", result);
  }, 4000);

  const handleChange = async (e) => {
    setSearch(e.target.value);
    // Debounce callback
    handleDebounce(e.target.value);
  };

  return (
    <div>
      <p>Real time value = {search}</p>
      <input
        type="text"
        placeholder="Enter something..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Four;

/** DESC :
 *  - fetch data from API using debouncing
 *  - using useRef in useDebounce custom hook (callback)
 */
