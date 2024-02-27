import { useEffect, useState } from "react";

async function fetchDataFromAPI(query, controller) {
  console.log("Fetching data from API.....");
  const response = await fetch(
    `https://demo.dataverse.org/api/search?q=${query}`,
    {
      signal: controller.signal,
    }
  );
  const data = await response.json();
  return data.data.items;
}

function One() {
  console.log("One re-render");

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      if (!search) return;

      const result = await fetchDataFromAPI(search, controller);
      console.log("Result = ", result);
    })();

    return () => {
      console.log("Cleanup ...........");
      controller.abort();
    };
  }, [search]);

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

export default One;

/** DESC :
 *  - abort controller
 *  - fetch data from API without debouncing
 */
