import s from "./About.module.css";
import { useState } from "react";
import Category from "../../components/Category/Category";
import Folder from "../../components/Folder/Folder";
import aboutCategories from "../../data/about.js";

export default function About({}) {
  const [showFolder, setShowFolder] = useState(aboutCategories);
  return (
    <div className={s.wrapper}>
      <div className={s.left__sidebar}></div>
      <div className={s.categories__panel}>
        {aboutCategories.map((elem, index) => {
          return (
            <Category
              key={index}
              elem={elem}
              showFolder={showFolder}
              setShowFolder={setShowFolder}
            >
              {elem.folders.map((folder) => (
                <Folder
                  key={Math.random()}
                  folder={folder}
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
