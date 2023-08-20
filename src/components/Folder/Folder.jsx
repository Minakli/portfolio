import s from "./Folder.module.css";
import arrowDown from "./arrow-down.svg";
import arrowRight from "./arrow-right.svg";

export default function Folder({ elem, children }) {
  return (
    <div className={s.wrapper}>
      <button className={s.btn}>
        <img className={s.arrow} src={arrowRight} alt="" />
        <img className={s.folderImg} src={arrowRight} alt="" />
        <p className={s.folder__name}>qweqweqwe</p>
      </button>
    </div>
  );
}
