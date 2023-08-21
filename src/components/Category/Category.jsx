import s from "./Category.module.css";
import { useState } from "react";
import arrowWhiteRight from "./arrow-white-right.svg";
import arrowWhiteDown from "./arrow-white-down.svg";

export default function Category({ children, elem, setShowFolder }) {
  const [showCategory, setShowCategory] = useState("");
  return (
    <div className={s.wrapper}>
      <button
        className={s.btn}
        onClick={() => {
          showCategory === elem.title
            ? setShowCategory("")
            : setShowCategory(elem.title);
          if (showCategory === elem.title) setShowFolder("");
        }}
      >
        <img
          className={s.arrow}
          src={showCategory === elem.title ? arrowWhiteDown : arrowWhiteRight}
          alt="˃"
          width="8"
          height="8"
        />
        <div className={s.title}>{elem.title}</div>
      </button>

      <div className={showCategory === elem.title ? s.body : s.body__hidden}>
        {children}
      </div>
    </div>
  );
}
