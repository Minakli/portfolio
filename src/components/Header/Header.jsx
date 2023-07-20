import s from "./Header.module.css";

export default function Header({ navBtn }) {
  return (
    <header className={s.wrapper}>
      <div className={s.name}>
        <span className={s.span}>Plan-D</span>
        <div className={s.flex_shrink}></div>
      </div>
      {navBtn.map((elem, index) => (
        <div className={s.nav} key={index}>
          <span className={s.span}>{elem.name}</span>
        </div>
      ))}
      <div className={s.contact}>
        <span className={s.span}>_contact-me</span>
      </div>
    </header>
  );
}
