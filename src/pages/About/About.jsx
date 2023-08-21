import s from "./About.module.css";
import { useState } from "react";
import Category from "../../components/Category/Category";
import Folder from "../../components/Folder/Folder";
import aboutCategories from "../../data/about.js";

export default function About({}) {
  // const [showCategory, setShowCategory] = useState("");
  const [showFolder, setShowFolder] = useState("");
  return (
    <div className={s.wrapper}>
      <div className={s.left__sidebar}></div>
      <div className={s.categories__panel}>
        {aboutCategories.map((elem, index) => {
          return (
            <Category
              key={index}
              elem={elem}
              setShowFolder={setShowFolder}
              // showCategory={showCategory}
              // setShowCategory={setShowCategory}
            >
              {/* {elem.folders.map((elem, index) => {
              <Folder key={index} name={elem.name} filesArr={elem.filesArr} />;
            })} */}
              {elem.folders.map((el) => (
                <Folder
                  key={Math.random()}
                  elem={el}
                  showFolder={showFolder}
                  setShowFolder={setShowFolder}
                >
                  {" "}
                </Folder>
              ))}
            </Category>
          );
        })}
      </div>
      <div className={s.left__section}></div>
      <div className={s.right__section}></div>
    </div>
  );
}
