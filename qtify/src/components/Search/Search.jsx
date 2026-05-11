import React from "react";
import styles from "./Search.module.css";

function Search() {
  return (
    <form className={styles.wrapper}>
      <input
        type="text"
        className={styles.search}
        placeholder="Search a song of your choice"
      />

      <button className={styles.searchButton} type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;