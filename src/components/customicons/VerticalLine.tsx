export default function VerticalLine({ ...props }) {
  return (
    <svg 
      {...props} 
      width="4" 
      height="100" 
      viewBox="0 0 4 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      >
      <line 
        x1="2" 
        y1="2.5" 
        x2="2" 
        y2="97.5" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round"
      />
    </svg>
  );
}
