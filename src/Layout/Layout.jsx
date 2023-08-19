import s from "./Layout.module.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

export default function Layout({ children }) {
  const arrNavBtn = [
    {
      name: "_hello",
      path: "/",
    },
    { name: "_about-me", path: "/about" },
    {
      name: "_projects",
      path: "/projects",
    },
  ];
  return (
    <div className={s.bg}>
      <div className={s.wrapper}>
        <Header arrNavBtn={arrNavBtn} />
        <Main>{children}</Main>
        <Footer />
      </div>
    </div>
  );
}
