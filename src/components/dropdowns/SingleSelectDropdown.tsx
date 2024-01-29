import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import downIcon from "../../assets/icons/down.svg";
import searchIcon from "../../assets/icons/search.svg";

interface DropdownProps {
  options: Array<string | number>;
  disabled?: boolean;
  searchable?: boolean;
  onSelect: (selectedOption: string | number | undefined) => void;
}

const DropdownContainer = styled.div<{ searchMode: boolean }>`
  position: relative;
  display: inline-block;
  width: calc(100% - 10px);
  padding: 10px;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 153.846% */
`;

const DropdownButton = styled.button<{
  searchMode: boolean;
  searchable: boolean;
}>`
  background: #fff;
  padding: ${(props) =>
    props.searchMode && props.searchable ? "8px 0" : "8px 12px"};
  border: 1px solid #d0d5dd;
  border-radius: 4px;
  text-align: start;
  cursor: pointer;
  color: #848e9c;
  font-family: Poppins;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  width: 100%;
  min-height: 40px;
  max-height: 52px;
  display: flex;
  justify-content: space-between;

  span {
    color: #2c3138;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 153.846% */
  }

  &:disabled {
    background-color: #d0d5dd;
    cursor: default;
  }
`;

const SearchInputContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0 16px;
  height: 22px;
  box-sizing: border-box;
  border: none;
  background: #fff;
  outline: none;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const DropdownList = styled.ul<{ open: boolean }>`
  width: 100%;
  margin: 0;
  padding: 8px 0;
  list-style: none;
  border: none;
  background: #fff;
  display: none;
  border-radius: 4px;
  border: 1px solid #d0d5dd;
  ${({ open }) =>
    open &&
    css`
      display: block;
    `};
`;

const DropdownItem = styled.li<{ isFocused: boolean }>`
  padding: 8px 16px;
  cursor: pointer;
  color: #2c3138;

  ${({ isFocused }) =>
    isFocused &&
    css`
      background-color: #f9fafb;
    `}

  &:hover {
    background-color: #f9fafb;
  }
`;

// Dropdown Component
const SingleSelectDropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  disabled = false,
  searchable = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | number>();
  const [dropDownOptions, setDropDownOptions] =
    useState<Array<string | number>>(options);
  const [searchText, setSearchText] = useState("");
  const [searchMode, setSearchMode] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1); // Track focused index
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchMode(false);
      }
    };
    onSelect(selectedOption);

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setFocusedIndex((prevIndex) =>
        Math.min(prevIndex + 1, dropDownOptions.length - 1)
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, -1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (focusedIndex !== -1) {
        handleSelect(dropDownOptions[focusedIndex]);
      }
    } else if (event.key === " ") {
      event.preventDefault();
      setSearchText((prevSearchText) => prevSearchText + " ");
    }
  };

  // Handle selection of an option
  const handleSelect = (option: string | number) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchMode(!searchMode);
    setSearchText(""); // Clear search text after selection

    onSelect(option);
  };

  // Handle clicking on a dropdown list item
  const handleListItemClick = (index: number) => {
    handleSelect(filteredOptions[index]);
  };

  // Handle toggling search mode
  const handleSearchIconClick = () => {
    setSearchMode(!searchMode);
    setFocusedIndex(-1); // Reset focused index when switching to search mode
  };

  // Handle toggling dropdown visibility
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    if (searchable) setSearchMode(!searchMode);
    setFocusedIndex(-1); // Reset focused index when toggling dropdown
  };

  // Define a sorting function
  const customSort = (arr: (string | number)[]) => {
    return arr.sort((a, b) => {
      // Sort logic here, modify according to your requirements
      if (typeof a === "number" && typeof b === "number") {
        return a - b;
      } else {
        return String(a).localeCompare(String(b));
      }
    });
  };

  // Filter options based on search text
  const filteredOptions = customSort(
    dropDownOptions.filter((option) =>
      String(option).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  // Render the Dropdown component
  return (
    <DropdownContainer
      ref={dropdownRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      searchMode={searchMode}
    >
      <DropdownButton
        disabled={disabled}
        onClick={handleButtonClick}
        searchMode={searchMode}
        searchable={searchable}
      >
        {searchMode && searchable ? (
          <SearchInputContainer>
            <SearchInput
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
            <SearchIcon
              src={searchIcon}
              alt="Search Icon"
              onClick={handleSearchIconClick}
            />
          </SearchInputContainer>
        ) : (
          <>
            {selectedOption ? selectedOption : "Select an option"}
            <img src={downIcon} alt="Down Arrow" />
          </>
        )}
      </DropdownButton>
      <DropdownList open={isOpen}>
        {filteredOptions.map((option, index) => (
          <DropdownItem
            key={option}
            onClick={() => handleListItemClick(index)}
            isFocused={focusedIndex === index}
          >
            {option}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default SingleSelectDropdown;
