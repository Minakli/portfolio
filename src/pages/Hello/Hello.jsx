import s from "./Hello.module.css";

export default function Hello() {
  return (
    <div className={s.wrapper}>
      <div className={s.left__side}>
        <p className={s.hi__all}>Hi all. I am</p>
        <h1 className={s.h1}>Andrei Plavskii</h1>
        <p className={s.profession}>{"> Front-end developer"}</p>
        <p className={s.description}>// complete the game to continue</p>
        <p className={s.description}>
          // you can also see it on my Github page
        </p>
        <p className={s.git__link}>
          <span className={s.blue__text}>const </span>
          <span className={s.green__text}>githubLink</span>
          <span className={s.white__text}>=</span>
          <a
            className={s.red__text}
            href="https://github.com/Minakli"
            target="_blanc"
          >
            https://github.com/Minakli
          </a>
        </p>
      </div>
      <div className={s.game}></div>
    </div>
  );
}
