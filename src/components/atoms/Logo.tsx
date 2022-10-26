const Logo = ({ ...props }) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16 32L2 -8.58381e-07L16 18.6667L30 1.58946e-06L16 32Z"
      />
    </svg>
  );
};

export default Logo;
