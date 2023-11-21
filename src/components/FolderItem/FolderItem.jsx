import s from "./FolderItem.module.css";
import m from "./m.svg";

export default function FolderItem({
  item,
  children,
  showFolder,
  setShowFolder,
  folderItemSelected,
  setFolderItemSelected,
}) {
  return (
    <button
      className={s.wrapper}
      onClick={() => {
        setFolderItemSelected(item.title);
      }}
    >
      <img className={s.img} src={m} alt="item" />
      <p className={folderItemSelected === item.title ? s.active : s.inactive}>
        {children}
      </p>
    </button>
  );
}
