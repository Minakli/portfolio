import s from "./CodeSnippet.module.css";
import { useEffect, useState } from "react";
import commentsIcon from "./comments-icon.svg";

export default function CodeSnippet({ elem }) {
  const [body, setBody] = useState("");
  let bodyUrl;
  for (let key in elem.files) {
    bodyUrl = elem.files[key].raw_url;
    console.log(bodyUrl);
  }
  useEffect(() => {
    fetch(bodyUrl)
      .then((response) => response.text())
      .then((data) => {
        // console.log(data);
        setBody(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.author}>
          <img className={s.img} src={elem.owner.avatar_url} alt="Avatar" />
          <div className={s.author__title}>
            <a className={s.username} href="" target="_blank">
              {elem.owner.login}
            </a>
            <div className={s.date}>qq</div>
          </div>
        </div>
        <div className={s.social}>
          <a className={s.details} href={elem.comments_url} target="_blank">
            <img className={s.details__img} src={commentsIcon} alt="icon" />
            <div className={s.details__text}>details</div>
          </a>
          <div className={s.stars}>
            <img className={s.star__img} src="" alt="" />
            <div className={s.star__count}></div>
            <div className={s.star__text}></div>
          </div>
        </div>
      </div>
      <pre className={s.body}>
        {/* <pre> */}
        {body}
        {/* </pre> */}
      </pre>
    </div>
  );
}
