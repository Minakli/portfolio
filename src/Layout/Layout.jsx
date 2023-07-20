import s from "./Layout.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Layout({}) {
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
    <div>
      <Header navBtn={navBtn} />
      <Footer />
    </div>
  );
}
