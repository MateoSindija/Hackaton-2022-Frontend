import { IconButton, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props: any) => {
  const { setSearchQuery } = props;

  return (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          const result = (e.target as HTMLInputElement).value;
          setSearchQuery(result);
        }}
        label="Pretražite timove"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="button" aria-label="search">
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
    </form>
  );
};

export default SearchBar;
