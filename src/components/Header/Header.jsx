import s from "./Header.module.css";
import NavBtn from "../../ui/NavBtn/NavBtn";
import { useState } from "react";

export default function Header({ navBtn }) {
  const [activePage, setActivePage] = useState("_hello");
  return (
    <header className={s.wrapper}>
      <div className={s.name}>
        <span className={s.span}>Plan-D</span>
        <div className={s.flex_shrink}></div>
      </div>
      {navBtn.map((elem, index) => (
        <NavBtn
          key={index}
          elem={elem}
          index={index}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      ))}
      <div className={s.contact}>
        <NavBtn
          activePage={activePage}
          setActivePage={setActivePage}
          elem={{ name: "_contact-me" }}
        />
      </div>
    </header>
  );
}
