import s from "./Folder.module.css";
import { useState } from "react";
import arrowDown from "./arrow-down.svg";
import arrowRight from "./arrow-right.svg";
import folderRed from "./folder-red.svg";
import folderGreen from "./folder-green.svg";
import folderBlue from "./folder-blue.svg";

export default function Folder({ elem, children, showFolder, setShowFolder }) {
  return (
    <div className={s.wrapper}>
      <button
        className={showFolder === elem.name ? s.btn__active : s.btn}
        onClick={() =>
          showFolder === elem.name
            ? setShowFolder("")
            : setShowFolder(elem.name)
        }
      >
        <img
          className={s.arrow}
          src={showFolder === elem.name ? arrowDown : arrowRight}
          alt="˃"
          width="13"
          height="8"
        />
        <img
          className={s.folder__icon}
          src={
            elem.color === "red"
              ? folderRed
              : elem.color === "green"
              ? folderGreen
              : elem.color === "blue"
              ? folderBlue
              : null
          }
          alt=""
          width="14"
          height="13"
        />
        <p
          className={
            showFolder === elem.name ? s.folder__name_active : s.folder__name
          }
        >
          {elem.name}
        </p>
      </button>
      {children}
    </div>
  );
}
