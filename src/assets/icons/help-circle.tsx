type PropsType = {
  fill?: string;
  width?: string | number;
  height?: string | number;
};

const CloseIcon = ({ fill, width, height }: PropsType) => {
  return (
    <svg
      width={width ?? 16}
      height={height ?? 16}
      viewBox="0 0 16 16"
      fill={"#ffffff"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="help-circle" clip-path="url(#clip0_3325_5200)">
        <path
          id="Icon"
          d="M6.05992 6.00001C6.21665 5.55446 6.52602 5.17875 6.93322 4.93943C7.34042 4.70012 7.81918 4.61264 8.2847 4.69248C8.75022 4.77233 9.17246 5.01436 9.47664 5.3757C9.78081 5.73703 9.94729 6.19436 9.94659 6.66668C9.94659 8.00001 7.94659 8.66668 7.94659 8.66668M7.99992 11.3333H8.00659M14.6666 8.00001C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00001C1.33325 4.31811 4.31802 1.33334 7.99992 1.33334C11.6818 1.33334 14.6666 4.31811 14.6666 8.00001Z"
          stroke={fill ?? "#98A2B3"}
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3325_5200">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CloseIcon;
