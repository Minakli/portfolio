import s from "./CodeSnippetBox.module.css";
import CodeSnippet from "../CodeSnippet/CodeSnippet";

export default function CodeSnippetBox({ codeSnippetArr }) {
  return (
    <>
      <div className={s.snippet__title}>
        <div>// Code snippet showcase:</div>
      </div>
      <div className={s.body}>
        {codeSnippetArr.map((elem) => {
          // <CodeSnippet key={Math.random()} elem={elem} />;
          // console.log(elem.comments);
          // console.log(elem.comments_url);
          // console.log(elem.created_at);
          // console.log(elem.updated_at);
          // console.log(elem.owner.login);
          // console.log(typeof elem.owner);
          // console.log(elem.owner.avatar_url);
          // for (let key in elem.files) {
          //   console.log(elem.files[key].raw_url);
          // }
          return <CodeSnippet elem={elem} key={Math.random()} />;
        })}
      </div>
    </>
  );
}
