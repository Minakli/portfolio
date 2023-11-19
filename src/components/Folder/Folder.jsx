import s from "./Folder.module.css";
import { useState } from "react";
import arrowDown from "./arrow-down.svg";
import arrowRight from "./arrow-right.svg";
import folderRed from "./folder-red.svg";
import folderGreen from "./folder-green.svg";
import folderBlue from "./folder-blue.svg";

export default function Folder({
  folder,
  children,
  showFolder,
  setShowFolder,
}) {
  return (
    <div className={s.wrapper}>
      <button
        className={folder.isOpen === true ? s.btn__active : s.btn}
        onClick={() => {
          folder.isOpen === true
            ? (folder.isOpen = false)
            : (folder.isOpen = true);

          let newShowFolder = showFolder.map((item) => {
            let newFolders = item.folders.map((unit) =>
              unit.name === folder.name ? folder : unit
            );
            item.folders = newFolders;
            return item;
          });
          setShowFolder(newShowFolder);
        }}
      >
        <img
          className={s.arrow}
          src={folder.isOpen === true ? arrowDown : arrowRight}
          alt="˃"
          width="13"
          height="8"
        />
        <img
          className={s.folder__icon}
          src={
            folder.color === "red"
              ? folderRed
              : folder.color === "green"
              ? folderGreen
              : folder.color === "blue"
              ? folderBlue
              : null
          }
          alt=""
          width="14"
          height="13"
        />
        <p
          className={
            folder.isOpen === true ? s.folder__name_active : s.folder__name
          }
        >
          {folder.name}
        </p>
      </button>
      <div></div>
      {folder.isOpen == true ? children : null}
    </div>
  );
}
