import s from "./LeftSideBtn.module.css";

export default function LeftSideBtn({ img, handler }) {
  return (
    <button className={s.btn} onClick={handler}>
      <img className={img} src={img} alt="icon" width="24" height="24" />
    </button>
  );
}
