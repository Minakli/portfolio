import s from "./Footer.module.css";
import FooterIcon from "../../ui/footerIcon/FooterIcon";
import instagram from "./assets/instagram.svg";
import facebook from "./assets/facebook.svg";
import git from "./assets/git.svg";

export default function Footer() {
  const footerSocial = [
    { img: instagram, src: "https://instagram.com" },
    {
      img: facebook,
      src: "https://www.facebook.com/profile.php?id=100092998994065",
    },
    { img: git, src: "https://github.com/Minakli", text: "Minakli\u00A0" },
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
          footerSrc={elem.src}
        />
      ))}
      {/* </div> */}
    </div>
  );
}
