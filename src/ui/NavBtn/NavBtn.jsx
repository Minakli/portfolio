import s from "./NavBtn.module.css";
import { Link } from "react-router-dom";

export default function NavBtn({ elem, index, activePage, setActivePage }) {
  return (
    <Link
      to={elem.path}
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
    </Link>
  );
}
