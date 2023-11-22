import s from "./AboutLeftSide.module.css";
import LeftSideBtn from "../LeftSideBtn/LeftSideBtn";
import btn_1 from "./btn_1.svg";
import btn_2 from "./btn_2.svg";
import btn_3 from "./btn_3.svg";

export default function AboutLeftSide({
  showFolder,
  setShowFolder,
  setFolderItemSelected,
}) {
  let handler_1 = () => {
    setFolderItemSelected("");
    let tmp = showFolder.map((elem) => {
      if (elem.isOpen === true) {
        elem.isOpen = false;
      }
      if (elem.folders.isOpen === true) {
        elem.folders.isOpen = false;
      }
      return elem;
    });
    setShowFolder(tmp);
  };
  let handler_2 = () => {};
  let handler_3 = () => {};
  return (
    <div className={s.wrapper}>
      <LeftSideBtn
        img={btn_1}
        handler={handler_1}
        showFolder={showFolder}
        setShowFolder={setShowFolder}
        setFolderItemSelected={setFolderItemSelected}
      />
      <LeftSideBtn
        img={btn_2}
        handler={handler_2}
        showFolder={showFolder}
        setShowFolder={setShowFolder}
        setFolderItemSelected={setFolderItemSelected}
      />
      <LeftSideBtn
        img={btn_3}
        handler={handler_3}
        showFolder={showFolder}
        setShowFolder={setShowFolder}
        setFolderItemSelected={setFolderItemSelected}
      />
    </div>
  );
}
