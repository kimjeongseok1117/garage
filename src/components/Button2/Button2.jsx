import React from "react";
import classNames from "classnames";
import "./Button2.scss";

function Button2({ children, size }) {
  return <button2 className={classNames("Button2", size)}>{children}</button2>;
}

Button2.defaultProps = {
  size: "medium",
};

export default Button2;
