import s from "./Header.module.css";
import NavBtn from "../../ui/NavBtn/NavBtn";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Header({ arrNavBtn }) {
  // console.log(useLocation().pathname);
  let path = useLocation().pathname;
  const [activePage, setActivePage] = useState(
    path === "/"
      ? "_hello"
      : path === "/about"
      ? "_about-me"
      : path === "/projects"
      ? "_projects"
      : path === "/contacts"
      ? "_contact-me"
      : ""
  );
  return (
    <header className={s.wrapper}>
      <div className={s.name}>
        <span className={s.span}>Plan-D</span>
        <div className={s.flex_shrink}></div>
      </div>
      {arrNavBtn.map((elem, index) => (
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
          elem={{ name: "_contact-me", path: "/contacts" }}
        />
      </div>
    </header>
  );
}
