import s from "./FooterIcon.module.css";

export default function FooterIcon({ footerImg, footerText }) {
  return (
    <a className={footerText ? s.btn__withtext : s.btn}>
      <div className={s.wrapper}>
        <p className={s.text}>{footerText}</p>
        <img className={s.img} src={footerImg} width="24" height="24" />
      </div>
    </a>
  );
}
