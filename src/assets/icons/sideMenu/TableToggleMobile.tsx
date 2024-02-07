type PropsType = {
  fill?: string;
  stroke?: string;
};

const TableToggleMobile = ({ fill, stroke }: PropsType) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icons / Editor / ic-editor-table">
        <g id="ic-editor-table">
          <rect
            id="Rectangle 16962"
            x="5"
            y="5"
            width="22"
            height="22"
            rx="4"
            stroke={stroke ?? "#ffffff"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Line 174"
            d="M11.7002 5V26.9999"
            stroke={stroke ?? "#ffffff"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Line 175"
            d="M27 20.3994H5.00009"
            stroke={stroke ?? "#ffffff"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Line 176"
            d="M5.00009 12.7002H27"
            stroke={stroke ?? "#ffffff"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};
export default TableToggleMobile;
