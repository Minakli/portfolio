import s from "./Footer.module.css";
import FooterIcon from "../../ui/footerIcon/FooterIcon";
import instagram from "./assets/instagram.svg";
import facebook from "./assets/facebook.svg";
import git from "./assets/git.svg";

export default function Footer() {
  const footerSocial = [
    { img: instagram },
    { img: facebook },
    { img: git, text: "Minakli\u00A0" },
  ];
  return (
    <div className={s.wrapper}>
      <div className={s.findMe}>
        <span>find me in:</span>
      </div>
      {/* <div className={s.social__wrapper}> */}
      {footerSocial.map((elem, index) => (
        <FooterIcon
          key={index}
          footerImg={elem.img}
          footerImgWidth={elem.width}
          footerText={elem.text}
        />
      ))}
      {/* </div> */}
    </div>
  );
}
