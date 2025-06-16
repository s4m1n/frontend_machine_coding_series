import { useEffect, useState } from "react";

function App() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);

  const fetchData = async () => {
    console.log("API CALLED ", input);
    const data = await fetch(
      `https://dummyjson.com/products/search?q=${input}`
    );
    const json = await data.json();

    setResults(json?.products);
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="App">
      <h1>Autocomplete / Typeahead Component</h1>
      <input
        type="text"
        className="search-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShowResult(true)}
        onBlur={() => setShowResult(false)}
      />
      {showResult && (
        <div className="results-container">
          {results.map((result) => (
            <span className="result" key={result.id}>
              {result.title}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
