import React, { useState } from "react";
import "./styles.css"
import { useHistory } from 'react-router-dom';


function Search() {

  const history = useHistory();
  const [searchText, setSearchText] = useState();

  function handleSubmit() {
    var x;
    if (searchText === "" || searchText === undefined)
      x = "/Searchpage";
    else
      x = "/Searchpage/" + searchText;

    history.push(x);
  }

  function handleChange(e) {
    setSearchText(e.target.value);
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="search"
          placeholder={" Type to search..."}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Search;
