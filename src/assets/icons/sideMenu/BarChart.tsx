type PropsType = {
  fill?: string;
  stroke?: string;
};

const BarChart = ({ fill, stroke }: PropsType) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill ?? "#0C314E"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="bar-chart-07">
        <path
          id="Icon"
          d="M21 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V3M7 10.5V17.5M11.5 5.5V17.5M16 10.5V17.5M20.5 5.5V17.5"
          stroke={stroke ?? "#ffffff"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
export default BarChart;
