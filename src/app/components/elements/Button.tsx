import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <button {...props} >
      {children}
    </button>
  );
};
export default Button;
