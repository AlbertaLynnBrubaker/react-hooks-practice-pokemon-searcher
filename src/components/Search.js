import React from "react";

function Search({searchQuery, handleSearch}) {
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSearch} className="prompt" value={searchQuery}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
