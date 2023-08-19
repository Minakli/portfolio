import s from "./Main.module.css";

export default function Main({ children }) {
  return <div className={s.wrapper}>{children}</div>;
}
