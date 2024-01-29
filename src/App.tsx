import Button from "./components/Buttons";
import icon from "./assets/icons/circle.svg";
import search from "./assets/icons/search.svg";
import infoCirlce from "./assets/icons/circle.svg";
import alertTriangle from "./assets/icons/alert-triangle.svg";
import styled, { css } from "styled-components";
import FieldLabel from "./components/FieldLabel";
import TextInput from "./components/TextInput";
import { useState } from "react";
import Checkbox from "./components/Checkbox";
import tableCheckBoxBg from "./assets/icons/table-checkbox.svg";
import Toggle from "./components/Toggle";
import MultiSelectDropdown from "./components/dropdowns/MultiSelectDropdown";
import Toast from "./components/Toast";
import SingleSelectDropdown from "./components/dropdowns/SingleSelectDropdown";
import Modal from "./components/modals/Modal";
import Loader from "./components/Loader";
import UserTag from "./components/UserTag";
import Tooltip from "./components/Tooltip";
import ConfirmationMessageModal from "./components/modals/ConfirmationMessageModal";

const buttonStyles = css`
  padding: 8px 14px;
  color: var(--Base-White, #fff);
  font-size: 14px;
  line-height: 20px;
  background: #006694;
  width: 163px;
  height: 35px;
  border: none;

  &:hover {
    background: #004869;
  }
  &:active {
    background: #006694;
  }
  &:disabled {
    background: #e6f0f4;
    cursor: default;
  }
`;

const onClickHandler = () => {
  console.log("CLicked :D");
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 10px;
  justify-content: space-evenly;
  font-family: poppins !important;
`;

const CustomToastStyle = css`
  background-color: #12b76a;
`;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
  ];

  const handleSelectMulti = (selectedOptions: Array<string | number>) => {
    console.log(`Selected options: ${selectedOptions}`);
  };
  const handleSelectSingle = (selectedOptions: string | number | undefined) => {
    console.log(`Selected options: ${selectedOptions}`);
  };
  const [closed, setClosed] = useState(true);
  const [closedDefault, setClosedDefault] = useState(true);
  return (
    <>
      <Container>
        <Button
          disabled={false}
          customStyles={buttonStyles}
          onClickHandler={() => setClosed(false)}
        >
          <i className="left">
            <img src={icon} alt="" />
          </i>
          Open Alert
          <i className="right">
            <img src={icon} alt="" />
          </i>
        </Button>
        <Button
          disabled={false}
          customStyles={buttonStyles}
          onClickHandler={() => setClosedDefault(false)}
        >
          <i className="left">
            <img src={icon} alt="" />
          </i>
          Open Modal
          <i className="right">
            <img src={icon} alt="" />
          </i>
        </Button>
        <Button disabled={true} customStyles={buttonStyles}>
          Button CTA
        </Button>
        <FieldLabel
          required
          tooltip="This is a tooltip This is a tooltip This is a tooltip This is a tooltip This is a tooltip This is a tooltip This is a tooltip"
        >
          Field Label
        </FieldLabel>
        <TextInput
          placeholder="placeholder"
          value={inputValue1}
          setInputValue={setInputValue1}
          rightIcon={<img src={search} />}
          leftIcon={<img src={search} />}
        />
        <TextInput
          placeholder="placeholder"
          error={true}
          value={inputValue}
          setInputValue={setInputValue}
        ></TextInput>
        <i>
          <img src={search} alt="" />
        </i>
        <TextInput
          placeholder="placeholder"
          disabled={true}
          value={inputValue}
          setInputValue={setInputValue}
        />
        <Checkbox
          onToggle={() => {
            console.log("object");
          }}
          onCheckedBackground={tableCheckBoxBg}
          disabled={false}
        />
        <Toggle
          onToggle={() => {
            console.log("test");
          }}
          disabled={false}
        />
        {/* <Toast
          title="Success"
          content="Operation completed!"
          customStyles={CustomToastStyle}
        >
          <i>
            <img src={infoCirlce} alt="" />
          </i>
        </Toast> */}

        <Toast
          toastDetails={{
            title: "Toast Title",
            content: "This is the toast content",
            icon: <img src={infoCirlce} alt="" />,
          }}
          duration={5000}
          closeButton={true}
          autoClose={true}
          customStyles={CustomToastStyle}
        />
        <MultiSelectDropdown options={options} onSelect={handleSelectMulti} />
        <SingleSelectDropdown
          searchable={true}
          options={options}
          onSelect={handleSelectSingle}
        />
        <SingleSelectDropdown
          searchable={false}
          options={options}
          onSelect={handleSelectSingle}
        />
        <Modal
          closed={closedDefault}
          setClosed={setClosedDefault}
          modalDetails={{
            title: "Sample Modal",
            actions: (
              <>
                <Button
                  disabled={false}
                  customStyles={buttonStyles}
                  onClickHandler={onClickHandler}
                >
                  <i className="left">
                    <img src={icon} alt="" />
                  </i>
                  Button CTA
                  <i className="right">
                    <img src={icon} alt="" />
                  </i>
                </Button>
                <Button
                  disabled={false}
                  customStyles={buttonStyles}
                  onClickHandler={onClickHandler}
                >
                  <i className="left">
                    <img src={icon} alt="" />
                  </i>
                  Button CTA
                  <i className="right">
                    <img src={icon} alt="" />
                  </i>
                </Button>
              </>
            ),
          }}
        >
          <p>This is a Modal Content</p>
        </Modal>
        <ConfirmationMessageModal
          alertDetails={{
            image: <img src={alertTriangle} alt="alert" />,
            title: "Confirmation",
            message: "Are you sure you want to proceed?",
            onConfirm: () => {
              console.log("confirmed");
            },
            onClose: () => console.log("Modal closed"),
          }}
          closed={closed}
          setClosed={setClosed}
        ></ConfirmationMessageModal>
        <UserTag
          name="Ali Rafea"
          image="https://camo.githubusercontent.com/0a283fdc0ffde203438747f59bede51e5cfd88ba6805b6416822627e01e64ab7/68747470733a2f2f6a656e737365676572732e636f6d2f7374617469632f6d656469612f6167656e742e706e67"
        />
        <Tooltip text="This is a tooltip" />
        <Loader />
      </Container>
    </>
  );
}

export default App;
