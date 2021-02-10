import React, {useState, useEffect} from "react";
// import ResultsList from "../../components/ResultsList/ResultsList.js";

const SearchContainer = () => {
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("page loaded");
  }, []);

  return (
  <div className="search-container">
    
  </div>
  );
};

export default SearchContainer;
