import React, { useState } from "react";
import { getUniquePokemon } from "../../services/PokeAPI/config";

export default function SearchBar(props) {
  const [search, setSearch] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await getUniquePokemon(search);

      console.log(response, "search response");
      
    } catch (error) {
      console.log("Somenthing went wrong --> ", error);
    }

    setSearch("");
  };

  return (
    <form className="search-bar" onSubmit={submit}>
      <input
        type="text"
        autoComplete="off"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn" type="submit">
        <img className="icon-search" src={props.icon} alt="Search Bar" />
      </button>
    </form>
  );
}
