import s from "./About.module.css";
import Category from "../../components/Category/Category";
import Folder from "../../components/Folder/Folder";
import aboutCategories from "../../data/about.js";
console.log(aboutCategories);

export default function About({}) {
  return (
    <div className={s.wrapper}>
      <div className={s.left__sidebar}></div>
      <div className={s.categories__panel}>
        {aboutCategories.map((elem, index) => {
          return (
            <Category key={index} elem={elem}>
              {/* {elem.folders.map((elem, index) => {
              <Folder key={index} name={elem.name} filesArr={elem.filesArr} />;
            })} */}
              <Folder />
            </Category>
          );
        })}
      </div>
      <div className={s.left__section}></div>
      <div className={s.right__section}></div>
    </div>
  );
}
