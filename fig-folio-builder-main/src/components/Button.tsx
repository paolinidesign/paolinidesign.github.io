
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  external?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  href,
  onClick,
  type = "button",
  external = false,
  disabled = false,
}) => {
  const baseStyles = "inline-block px-6 py-2.5 rounded font-medium transition-colors duration-200";
  
  const variantStyles = {
    primary: "bg-portfolio-yellow text-portfolio-dark hover:bg-amber-500",
    secondary: "bg-white border border-portfolio-dark text-portfolio-dark hover:bg-gray-100",
  };
  
  const buttonClasses = cn(
    baseStyles,
    variantStyles[variant],
    className,
    disabled ? "opacity-50 cursor-not-allowed" : ""
  );

  if (href && !disabled) {
    if (external) {
      return (
        <a 
          href={href} 
          className={buttonClasses}
          target="_blank" 
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link to={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
