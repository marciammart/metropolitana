import React from "react";
import { useState, useRef } from "react";
import { useOnClickOutside } from "use-hooks";
import FeatherIcon from "feather-icons-react";

const Search = ({ onChange, defaultFilter, defaultQuery }) => {
  const filterOptions = [
    { value: "previousRouteId", label: "Linha anterior" },
    { value: "currentRouteId", label: "Linha atual" }
  ];

  const [filter, setFilter] = useState(defaultFilter || filterOptions[0].value);
  const [query, setQuery] = useState(defaultQuery || "");

  const handleInput = ({ target: { value } }) => {
    setQuery(value);
    onChange(value ? { query: value, filter } : {});
  };

  const handleDropdown = (option) => {
    setFilter(option.value);
    onChange(query ? { query, filter: option.value } : {});
  };

  return (
    <div className="search">
      <div>Pesquisar por linha</div>
      <div className="search-form">
        <input
          className="search-input"
          placeholder='Exemplo: 410'
          onChange={handleInput}
          value={query} />
        <DropDown
          onChange={handleDropdown}
          selected={filter}
          options={filterOptions} />
      </div>
    </div>
  );
};

const DropDown = ({ options, selected, onChange }) => {
  const ref = useRef();
  const [open, setOpen] = useState(false);

  useOnClickOutside(ref, () => setOpen(false));

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  const selectedOption = options.find((option) => option.value === selected);

  return (
    <div ref={ref} className='dropdown'>
      <div className='dropdown-selected' onClick={() => setOpen(!open)}>
        <span>{selectedOption.label}</span>
        <FeatherIcon icon="chevron-down" size="20" />
      </div>
      {open &&
        <div className='dropdown-options'>
          {options.filter(option => option.value !== selectedOption.value).map(option => <div key={option.value} onClick={() => handleSelect(option)}>{option.label}</div>)}
        </div>}
    </div>
  );
};

export default Search;
