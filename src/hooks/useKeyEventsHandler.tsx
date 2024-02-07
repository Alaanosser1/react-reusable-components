import { useState } from "react";

const useKeyboardEventHandler = (
  event: React.KeyboardEvent<HTMLDivElement>,
  dropDownOptions: any[], // assuming this is the type of your dropdown options
  focusedIndex: number,
  setFocusedIndex: React.Dispatch<React.SetStateAction<number>>,
  handleSelect: (option: any) => void, // assuming this is the type of your handleSelect function
  setSearchText: React.Dispatch<React.SetStateAction<string>> // assuming this is the type of your setSearchText function
) => {
  const handleKeyboardEvents = () => {
    const keyActions: { [key: string]: () => void } = {
      ArrowDown: () => {
        event.preventDefault();
        setFocusedIndex((prevIndex) =>
          Math.min(prevIndex + 1, dropDownOptions.length - 1)
        );
      },
      ArrowUp: () => {
        event.preventDefault();
        setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, -1));
      },
      Enter: () => {
        event.preventDefault();
        if (focusedIndex !== -1) {
          handleSelect(dropDownOptions[focusedIndex]);
        }
      },
      " ": () => {
        event.preventDefault();
        setSearchText((prevSearchText) => prevSearchText + " ");
      },
    };

    const action = keyActions[event.key];
    if (action) {
      action();
    }
  };

  return handleKeyboardEvents;
};

export default useKeyboardEventHandler;
