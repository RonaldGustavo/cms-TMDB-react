import { KTSVG } from "utilities";
import { ButtonType } from "./Button.type";
import { variantStyles, sizeStyles } from "./Button.style";

const BaseButton = ({
  className,
  id,
  variant = "primary",
  text,
  icon,
  size = "lg",
  isDisabled = false,
  position,
  onClick,
}: ButtonType) => {
  return (
    <button
      id={id}
      className={`btn ${variantStyles[variant]} ${
        size === "sm" && "btn-icon"
      } ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <div
        className={`d-flex ${
          position
            ? position === "left"
              ? "flex-row-reverse justify-content-between align-items-center"
              : "justify-content-between align-items-center"
            : "align-items-center"
        }`}
      >
        {text && <p className="mb-0 mx-2">{text}</p>}
        {icon && <KTSVG path={icon} className="svg-icon-3" />}
      </div>
    </button>
  );
};

export default BaseButton;
