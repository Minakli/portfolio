import s from "./FolderItem.module.css";
import m from "./m.svg";

export default function FolderItem({ children }) {
  return (
    <div className={s.wrapper}>
      <img className={s.img} src={m} alt="item" />
      <p>{children}</p>
      {/* <p className={(isSelected = true ? s.active : s.inactive)}></p> */}
    </div>
  );
}
