import React from "react";
import styles from "../styles/layout/Container.module.scss";

interface Props {
  children: JSX.Element;
  disabled?: boolean;
  removeOuterDiv?: boolean;
  otherClassName?: string;
  fluid?: boolean;
  style?: any;
}

function Container({
  children,
  disabled = false,
  removeOuterDiv = false,
  otherClassName = "",
  fluid,
  style,
}: Props) {
  return removeOuterDiv && disabled ? (
    children
  ) : (
    <div
      className={`${
        !disabled ? styles.Container : undefined
      } ${otherClassName}`}
      style={{ width: fluid ? "100%" : undefined, ...style }}
    >
      {children}
    </div>
  );
}

Container.defaultProps = {
  disabled: false,
  removeOuterDiv: false,
  otherClassName: "",
  fluid: false,
};

export default Container;
