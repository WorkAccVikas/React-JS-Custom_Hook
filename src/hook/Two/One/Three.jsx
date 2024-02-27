import { useEffect, useState } from "react";
import useDebounce1 from "./useDebounce1";

async function fetchDataFromAPI(query) {
  console.log("Fetching data from API.....");
  const response = await fetch(
    `https://demo.dataverse.org/api/search?q=${query}`
  );
  const data = await response.json();
  return data.data.items;
}

function Three() {
  const [search, setSearch] = useState("");

  const debounceValue = useDebounce1(search, 4000);
  console.log("Three re-render = ", debounceValue);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    (async () => {
      if (!debounceValue) return;

      const result = await fetchDataFromAPI(debounceValue);
      console.log("Result = ", result);
    })();

    return () => {
      console.log("Cleanup ...........");
    };
  }, [debounceValue]);

  return (
    <div>
      <p>Real time value = {search}</p>
      <p>Debounced Value = {debounceValue}</p>
      <input
        type="text"
        placeholder="Enter something..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Three;

/** DESC :
 *  - fetch data from API using debouncing
 *  - using useRef in useDebounce custom hook
 */
