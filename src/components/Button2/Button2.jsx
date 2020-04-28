import React from "react";
import classNames from "classnames";
import "./Button2.scss";
import "./MainPageContainer.scss";

function Button2({
  children,
  size,
  color,
  outline,
  fullWidth,
  onClick,
  onMouseMove,
}) {
  return (
    <button2
      className={classNames("Button2", size, color, {
        outline,
        fullWidth,
      })}
      onClick={onClick}
      onMouseMove={onMouseMove}
    >
      {children}
    </button2>
  );
}

Button2.defaultProps = {
  size: "large",
  color: "blue",
};

export default Button2;
