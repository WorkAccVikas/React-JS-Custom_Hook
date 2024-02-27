import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

async function fetchDataFromAPI(query) {
  console.log("Fetching data from API.....");
  const response = await fetch(
    `https://demo.dataverse.org/api/search?q=${query}`
  );
  const data = await response.json();
  return data.data.items;
}

function Two() {
  const [search, setSearch] = useState("");

  const debounceValue = useDebounce(search, 4000);
  console.log("Two re-render = ", debounceValue);

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

export default Two;

/** DESC :
 *  - fetch data from API using debouncing
 *  - using setTimeout in useDebounce custom hook
 */
