import React from "react";
import styles from "./style.module.scss";

const LinkExternal = ({ text, href, download, variant }) => {
  return React.createElement(
    "a",
    {
      className: styles.link,
      variant: variant,
      target: "_blank",
      rel: "noreferrer",
      href: href,
      download: download,
    },
    text
  );
};

export default LinkExternal;
