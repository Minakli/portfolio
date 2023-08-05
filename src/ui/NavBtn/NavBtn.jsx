import s from "./NavBtn.module.css";

export default function NavBtn({ elem, index, activePage, setActivePage }) {
  return (
    <div
      className={s.nav__btn}
      key={index}
      onClick={() => {
        setActivePage(elem.name);
      }}
    >
      <span className={activePage === elem.name ? s.span__active : s.span}>
        {elem.name}
      </span>
      <div className={activePage === elem.name ? s.active__line : null}></div>
    </div>
  );
}
