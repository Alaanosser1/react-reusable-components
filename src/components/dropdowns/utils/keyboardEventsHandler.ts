// keyboardEventsHandler.ts

const handleKeyboardEvents = (
  event: React.KeyboardEvent<HTMLDivElement>,
  focusedIndex: number,
  setFocusedIndex: React.Dispatch<React.SetStateAction<number>>,
  dropDownOptions: Array<string | number>,
  handleSelect: (option: string | number) => void,
  setSearchText: React.Dispatch<React.SetStateAction<string>>
) => {
  const keyActions = new Map<string, () => void>([
    [
      "ArrowDown",
      () =>
        setFocusedIndex((prevIndex) =>
          Math.min(prevIndex + 1, dropDownOptions.length - 1)
        ),
    ],
    [
      "ArrowUp",
      () => setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, -1)),
    ],
    [
      "Enter",
      () => {
        if (focusedIndex !== -1) {
          handleSelect(dropDownOptions[focusedIndex]);
        }
      },
    ],
    [" ", () => setSearchText((prevSearchText) => prevSearchText + " ")],
  ]);

  const action = keyActions.get(event.key);
  if (action) {
    event.preventDefault();
    action();
  }
};

export default handleKeyboardEvents;
