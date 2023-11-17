import s from "./Category.module.css";
import { useState } from "react";
import arrowWhiteRight from "./arrow-white-right.svg";
import arrowWhiteDown from "./arrow-white-down.svg";
export default function Category({
  children,
  elem,
  showFolder,
  setShowFolder,
}) {
  return (
    <div className={s.wrapper}>
      <button
        className={s.btn}
        onClick={() => {
          elem.isOpen === true ? (elem.isOpen = false) : (elem.isOpen = true);
          let tmp = showFolder.map((item) =>
            item.title === elem.title ? JSON.parse(JSON.stringify(elem)) : item
          );
          setShowFolder(tmp);
        }}
      >
        <img
          className={s.arrow}
          src={elem.isOpen === true ? arrowWhiteDown : arrowWhiteRight}
          alt="˃"
          width="8"
          height="8"
        />
        <div className={s.title}>{elem.title}</div>
      </button>
      <div className={elem.isOpen === true ? s.body : s.body__hidden}>
        {children}
      </div>
    </div>
  );
}
