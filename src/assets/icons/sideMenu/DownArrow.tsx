type PropsType = {
  fill?: string;
  stroke?: string;
};

const DownArrow = ({ fill, stroke }: PropsType) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={fill ?? "#ffffff"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="fi-br-caret-down">
        <path
          id="Vector"
          d="M4.2759 6H11.7239C11.8557 6.00003 11.9846 6.03914 12.0942 6.1124C12.2038 6.18565 12.2892 6.28976 12.3397 6.41156C12.3901 6.53336 12.4033 6.66738 12.3776 6.79669C12.3519 6.92599 12.2884 7.04476 12.1952 7.138L8.47123 10.862C8.34621 10.987 8.17668 11.0572 7.9999 11.0572C7.82312 11.0572 7.65358 10.987 7.52857 10.862L3.80457 7.138C3.71136 7.04476 3.64789 6.92599 3.62218 6.79669C3.59647 6.66738 3.60967 6.53336 3.66011 6.41156C3.71056 6.28976 3.79599 6.18565 3.90559 6.1124C4.0152 6.03914 4.14407 6.00003 4.2759 6Z"
          fill={fill ?? "#ffffff"}
        />
      </g>
    </svg>
  );
};

export default DownArrow;