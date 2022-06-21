import React from "react";
import { useState, useRef } from "react";
import { useOnClickOutside } from "use-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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
    <>
      <div className="has-text-queen-blue has-text-weight-bold mb-1">
        Pesquisar por linha
      </div>
      <div className="field is-grouped mb-5">
        <p className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="Exemplo: 410"
            onChange={handleInput}
            value={query} />
        </p>
        <p className="control">
          <DropDown
            onChange={handleDropdown}
            selected={filter}
            options={filterOptions} />
        </p>
      </div>
    </>
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
    <div ref={ref} className="dropdown is-active">
      <div className="dropdown-trigger" onClick={() => setOpen(!open)}>
        <button className="button is-link" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>{selectedOption.label}</span>
          <span className="icon is-small">
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </button>
      </div>
      {open && <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {options.map(option =>
            <div key={option.key} onClick={() => handleSelect(option)} className="dropdown-item">
              {option.label}
            </div>
          )}
        </div>
      </div>}
    </div>
  );
};

export default Search;
