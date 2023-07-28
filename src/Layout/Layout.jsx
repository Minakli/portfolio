import s from "./Layout.module.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

export default function Layout({ children }) {
  const navBtn = [
    {
      name: "_hello",
    },
    { name: "_about-me" },
    {
      name: "_projects",
    },
  ];
  return (
    <div className={s.bg}>
      <div className={s.wrapper}>
        <Header navBtn={navBtn} />
        <Main>{children}</Main>
        <Footer />
      </div>
    </div>
  );
}
