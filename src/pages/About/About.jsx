import s from "./About.module.css";
import { useState, useEffect } from "react";
import Category from "../../components/Category/Category";
import Folder from "../../components/Folder/Folder";
import aboutCategories from "../../data/about.js";
import FolderItem from "../../components/FolderItem/FolderItem";
import InfoBox from "../../components/InfoBox/InfoBox";
import texts from "../../data/texts.js";
import AboutLeftSide from "../../ui/AboutLeftSide/AboutLeftSide.jsx";
import CodeSnippetBox from "../../components/CodeSnippetBox/CodeSnippetBox";

export default function About({}) {
  const [showFolder, setShowFolder] = useState(aboutCategories);
  const [folderItemSelected, setFolderItemSelected] = useState("");
  const [codeSnippetArr, setCodeSnippetArr] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Minakli/gists")
      .then((response) => response.json())
      .then((data) => {
        setCodeSnippetArr(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(codeSnippetArr);

  return (
    <div className={s.wrapper}>
      <div className={s.left__sidebar}>
        <AboutLeftSide
          showFolder={showFolder}
          setShowFolder={setShowFolder}
          setFolderItemSelected={setFolderItemSelected}
        />
      </div>
      <div className={s.categories__panel}>
        {aboutCategories.map((elem, index) => {
          return (
            <Category
              key={index}
              elem={elem}
              showFolder={showFolder}
              setShowFolder={setShowFolder}
              setFolderItemSelected={setFolderItemSelected}
            >
              {elem.folders.map((folder) => (
                <Folder
                  key={Math.random()}
                  folder={folder}
                  showFolder={showFolder}
                  setShowFolder={setShowFolder}
                  setFolderItemSelected={setFolderItemSelected}
                >
                  {folder.items
                    ? folder.items.map((item) => (
                        <FolderItem
                          item={item}
                          key={Math.random()}
                          showFolder={showFolder}
                          setShowFolder={setShowFolder}
                          folderItemSelected={folderItemSelected}
                          setFolderItemSelected={setFolderItemSelected}
                        >
                          {item.title}
                        </FolderItem>
                      ))
                    : null}
                </Folder>
              ))}
            </Category>
          );
        })}
      </div>
      <div className={s.left__section}>
        {texts[folderItemSelected] ? (
          <InfoBox
            text={texts[folderItemSelected]}
            folderItemSelected={folderItemSelected}
            setFolderItemSelected={setFolderItemSelected}
          />
        ) : null}
      </div>
      <div className={s.right__section}>
        {/* <div className={s.snippet__title}>
          <div>// Code snippet showcase:</div>
        </div> */}
        <CodeSnippetBox codeSnippetArr={codeSnippetArr} />
      </div>
    </div>
  );
}
