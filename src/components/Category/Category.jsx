import s from "./Category.module.css";

export default function Category({ children, elem }) {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>{elem.title}</div>
      <div className={s.body}>{children}</div>
    </div>
  );
}
