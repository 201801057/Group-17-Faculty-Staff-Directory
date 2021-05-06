import React, { useState } from "react";
import "./styles.css"
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';


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

  const iconstyle = {
    display: "inline"
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          className="searchpage-searchbar"
          type="search"
          placeholder={" Type to search..."}
          onChange={handleChange}
        />
        <button type="submit"><SearchIcon style={iconstyle} /></button>
      </form>
    </div>
  );
}

export default Search;
