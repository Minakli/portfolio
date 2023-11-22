import s from "./InfoBox.module.css";
import { useRef, useEffect, useState } from "react";
import cross from "./cross.svg";

export default function InfoBox({
  text,
  folderItemSelected,
  setFolderItemSelected,
}) {
  let lastNum = 0;
  // useRef for Info left div
  const infoRef = useRef(null);
  // Array lines for Info left div content
  const [infoLinesArr, setInfoLinesArr] = useState([]);

  // Array code snippets
  const [codeSnippetArr, setCodeSnippetArr] = useState([]);

  // Dividing Info left div content into lines
  useEffect(() => {
    if (infoRef.current) {
      let infoBoxWidth = infoRef.current.getBoundingClientRect().width;

      // Width for one letter
      let signWidth = 11;

      // const text = personalInfo.content;
      let words = text.split(" ");
      let currentLine = "";
      let currentWidth = 0;
      let updatedLine = [];
      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let wordWidth = word.length * signWidth;
        if (currentWidth + wordWidth <= infoBoxWidth - 120) {
          currentLine += word += " ";
          currentWidth += wordWidth + signWidth;
        } else {
          updatedLine.push(currentLine);
          currentLine = word += " ";
          currentWidth = wordWidth + signWidth;
        }
      }
      updatedLine.push(currentLine);
      setInfoLinesArr(updatedLine);
    }
  }, [text]);
  return (
    <div className={s.box} ref={infoRef}>
      <div className={s.upper}>
        <div className={s.title}>
          <span className={s.title__span}>{"title"}</span>

          <button
            className={s.cross__btn}
            onClick={() => {
              setFolderItemSelected("");
            }}
          >
            <img src={cross} alt="cross" />
          </button>
        </div>
      </div>
      <div className={s.content}>
        <p className={s.text}>
          <span className={s.line__first}></span>
          <span className={s.line__elem}>1</span>&nbsp;&nbsp;&nbsp;/**
        </p>
        <p className={s.text}>
          <span className={s.line__first}></span>
          <span className={s.line__second}>2</span>&nbsp;&nbsp;&nbsp;*&nbsp;
          {folderItemSelected ? folderItemSelected : null}
        </p>
        {infoLinesArr.map((line, index) => {
          lastNum = index + 4;
          return (
            <p className={s.text} key={index}>
              <span className={s.line__num}>
                <span className={s.line__elem}> {index + 3} </span>

                <span className={s.line__elem}>*&nbsp;</span>
              </span>
              {line}
            </p>
          );
        })}
        <p className={s.p}>
          <span className={s.line__last}>{lastNum}</span>
          &nbsp;&nbsp; */
        </p>
      </div>
    </div>
  );
}
