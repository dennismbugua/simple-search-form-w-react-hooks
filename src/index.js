import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// FOLLOWED ALONG: https://dev.to/asimdahall/simple-search-form-in-react-using-hooks-42pg

// TWO-WAY DATA BINDING: TAKES THE VALUE FROM THE USER AND ADDS IT TO STATE
// ^^^USESTATE^^^

// CREATING USESTATE ALLOWED US TO SAVE DATA FROM THE SEARCH INPUT ON EVERY CHANGE; HANDLECHANGE TAKES THE EVENT OBJECT AS THE ARGUMENT AND SETS THE CURRENT VALUE OF THE FORM TO THE SEARCHTERM STATE USING SETSEARCHTERM

// USEEFFECT: REACT HOOK THAT TAKES TWO ARGUMENTS: 1) THE FUNCTION TO EXECUTE WHEN THE DATA IN THE DEPENDENCY IS MODIFIED 2) ARRAY OF DEPENDENCIES THAT USEEFFECT IS DEPENDENT ON (OR WATCHES)
// WHENEVER THE VALUE OF THE DEPENDENCIES CHANGES, THE FUNCTION IN ITS FIRST ARGUMENT EXECUTES

const batfam = [
  "Batman",
  "Robin",
  "Nightwing",
  "Batgirl",
  "Red Hood",
  "Red Robin",
  "Batwoman"
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = batfam.filter(bat =>
      bat.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
