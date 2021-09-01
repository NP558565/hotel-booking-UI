import React from "react";
import Filter from "./Filter.js";
import { filterOptions } from "../data.js";

const FiltersList = (props) => {
  /* notice how we've moved our callback function 
  inside of the FiltersList function so that we can access props
  in our definition of the renderFilter callback function */
  const renderFilter = (filter) => {
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes to see how the .includes array method works
    const isChecked = props.selectedFilters.includes(filter.key);
    return (
      /*Back in the Filters/index.js file, pass a reference to the toggleFilter method 
  from the FiltersList component to the Filter component where the eventListener 
  lives in our JSX. It’ll look like this: toggleFilter={props.toggleFilter}. Note: 
  in steps 2 and 3, you’re referencing toggleFilter first as a method of the class 
  you’re in, then as a prop! This is why you’ll use this. then props. in steps 2 and 
  .*/
      <Filter
        key={filter.key}
        filter={filter}
        isChecked={isChecked}
        toggleFilter={props.toggleFilter}
      />
    );
  };
  const filterListElements = filterOptions.map(renderFilter);
  return (
    <div className="filters">
      <h5 className="filters__header">Filter By:</h5>
      <hr />
      <ul className="filters-list">{filterListElements}</ul>
    </div>
  );
};

export default FiltersList;
