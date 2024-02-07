import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import downIcon from "../../assets/icons/down.svg";
import searchIcon from "../../assets/icons/search.svg";
import closeTag from "../../assets/icons/close-tag.svg";
import useOutsideClick from "../../hooks/useOutsideClick";
import handleKeyboardEvents from "./utils/keyboardEventsHandler"; // Import the function

interface DropdownProps {
  options: Array<string>;
  disabled?: boolean;
  onSelect: (selectedOption: Array<string | number>) => void;
}

const DropdownContainer = styled.div<{ searchMode: boolean }>`
  position: relative;
  display: inline-block;
  color: #848e9c;
  width: calc(100% - 10px);
  font-family: Poppins;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  padding: 10px;
`;

const DropdownButton = styled.button<{ searchMode: boolean }>`
  background: #fff;
  padding: ${(props) => (props.searchMode ? "8px 0" : "8px 12px")};
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
  background: #fff;

  ${({ open }) =>
    open &&
    css`
      display: block;
    `}
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

const TagsContainer = styled.div`
  display: flex;
  padding: 8px 0 16px;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  border-radius: 4px 4px 0 0;
`;

const TagBox = styled.div`
  border-radius: 8px;
  background: #e6f0f4;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  color: #004869;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

const CloseTagButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-left: 8px;
`;

// Dropdown Component
const MultiSelectDropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [dropDownOptions, setDropDownOptions] =
    useState<Array<string | number>>(options);
  const [selectedOptions, setSelectedOptions] = useState<
    Array<string | number>
  >([]);
  const [searchText, setSearchText] = useState("");
  const [searchMode, setSearchMode] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1); // Track focused index
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Callback function to handle outside click events
  const handleOutsideClick = () => {
    setIsOpen(false);
    setSearchMode(false);
    setSearchText("");
  };

  // handle click outside
  useOutsideClick(dropdownRef, handleOutsideClick);

  // Handle selection of an option
  const handleSelect = (option: string | number) => {
    setIsOpen(true);
    setSearchText(""); // Clear search text after selection
    if (option) {
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    }
    setDropDownOptions((prevOptions) =>
      customSort(prevOptions.filter((prevOption) => prevOption !== option))
    );
    onSelect(selectedOptions);
  };

  // Handle removal of a selected tag
  const handleRemoveTag = (index: number) => {
    const removedOption = selectedOptions[index];
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((option) => option !== removedOption)
    );
    setDropDownOptions((prevOptions) =>
      customSort([...prevOptions, removedOption])
    );
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
    setSearchMode(!searchMode);
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

  const handleEvents = (event: React.KeyboardEvent<HTMLDivElement>) => {
    handleKeyboardEvents(
      event,
      focusedIndex,
      setFocusedIndex,
      dropDownOptions,
      handleSelect,
      setSearchText
    );
  };

  // Render the Dropdown component
  return (
    <DropdownContainer
      ref={dropdownRef}
      onKeyDown={handleEvents}
      tabIndex={0}
      searchMode={searchMode}
    >
      <DropdownButton
        disabled={disabled}
        onClick={handleButtonClick}
        searchMode={searchMode}
      >
        {searchMode ? (
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
            {"Select an option"}
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
      <TagsContainer>
        {selectedOptions.map((option, index) => (
          <TagBox key={index}>
            {option}
            <CloseTagButton onClick={() => handleRemoveTag(index)}>
              <img src={closeTag} alt="" />
            </CloseTagButton>
          </TagBox>
        ))}
      </TagsContainer>
    </DropdownContainer>
  );
};

export default MultiSelectDropdown;
