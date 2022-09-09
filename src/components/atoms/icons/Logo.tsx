type LogoProps = {
  size?: string;
};

const IconLogo = ({ size }: LogoProps) => {
  return (
    <svg
      width={size || "1rem"}
      height={size || "1rem"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="currentColor" d="M12 22.8L4 2L12 15.3162L20 2L12 22.8Z" />
    </svg>
  );
};

export default IconLogo;
